import { RealtdbService } from './../../Services/realtdb.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private db: RealtdbService) { }

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

  setProduct(){
    this.db.setContact(this.setProduct).subscribe(resp =>{
      this.getContact();
      alert("Se guardo")
    }, (err) => {
      alert("Error")
    }
    
    )
  }

}
