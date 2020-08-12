import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Key } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class RealtdbService {

  constructor(private http: HttpClient) { }

  private objectToArray(objContact: Object){
    const contacts = []

    console.log(objContact)

    Object.keys(objContact).forEach(key => {
      let contactsModel = {
        Id: "",
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: ""
      }
      contactsModel = objContact[key];
      contactsModel.Id = key
      contacts.push(contactsModel)
    })

    if(objContact === null){
      return [];
    }
    return contacts
  }

  getContact(){
    return this.http.get('https://databaserealtime-1b441.firebaseio.com/Contacts.json').pipe(
      map(this.objectToArray)
    )  
  }

  setContact(contact: any){
    return this.http.post('https://databaserealtime-1b441.firebaseio.com/Contacts.json', contact);
  }

  updateContact(contact: any){
    const contactTmp = {
      ...contact
    }
    delete contactTmp.id
    return this.http.put('https://databaserealtime-1b441.firebaseio.com/Contacts.json', contactTmp);
  }

  deleteContact(contactID: any){
    return this.http.delete(`https://databaserealtime-1b441.firebaseio.com/Contacts/${contactID}.json`)
  }
}
