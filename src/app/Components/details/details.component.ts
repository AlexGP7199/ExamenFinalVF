import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { RealtdbService } from './../../Services/realtdb.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private db: RealtdbService) { }

  ngOnInit(): void {

  }
    Contact: any = {}
  
    setContact(){
      console.log(this.Contact);
      this.db.setContact(this.Contact).subscribe(resp =>{
        console.log(resp);
        alert("Se guardo")
      }, (err) => {
        alert("Error")
      }
      
      )
    }

    
  
}
