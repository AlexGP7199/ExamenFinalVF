import { RealtdbService } from './../../Services/realtdb.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private db: RealtdbService, private router: Router) { }

  ngOnInit(): void {
    this.getContact();
  }

  Contact: any[]
  
  getContact(){
    this.db.getContact().subscribe(resp => {
      this.Contact = resp
      console.log(this.Contact)
    }, (err) => {
      alert("Error")
    })
  }

  getDataUpdate(id: any){
    this.db.getDataForUpdate(this.Contact[id])
    this.router.navigateByUrl('/details/'+this.Contact[id].Id);
    console.log(this.Contact[id], "Texto");
  }

  getContactID(contactID:any, id:any){
    this.getDataUpdate(id)
  } 


  deleteContact(id: any){
    this.db.delectContacts(this.Contact[id].Id).subscribe(resp =>{
      this.getContact();
        alert("Eliminado")
    })
  }
}
