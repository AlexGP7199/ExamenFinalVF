import { database } from 'firebase';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RealtdbService } from './../../Services/realtdb.service';

@Component({
  selector: 'app-details-md',
  templateUrl: './details-md.component.html',
  styleUrls: ['./details-md.component.css']
})
export class DetailsMDComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private db: RealtdbService) { }

  ngOnInit(): void {
    this.dataToUpdate = this.db.dataUpdate
  }
    dataToSend = {FirstName: ''
      ,LastName: ''
      ,Email : '',
      PhoneNumber: '',
      Id: ''}
    
    dataToUpdate: any

    Contact: any = []
    getContact(){
      this.db.getContact().subscribe(resp => {
        //console.log(resp)
        alert('Se obtuvo el registro')
      }), (err => {
        alert("Error")
      })
      
    }
    updateTheData(){
      this.dataToSend.FirstName = this.dataToUpdate.FirstName;
      this.dataToSend.LastName = this.dataToUpdate.LastName;
      this.dataToSend.Email = this.dataToUpdate.Email;
      this.dataToSend.PhoneNumber = this.dataToUpdate.PhoneNumber;
      this.dataToSend.Id = this.dataToUpdate.Id;
      this.db.updateContacts(this.dataToSend).subscribe(resp =>{
        this.getContact()
          alert("Actualizado")
      }, (err) =>{
          alert("Error al actualizar")
      })
    }
}
