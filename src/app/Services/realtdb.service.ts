import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Key } from 'protractor';
import { User } from '../Models/User';
import { database } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class RealtdbService {
  userToken: string;
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

  dataUpdate: any[];
  getDataForUpdate(contact: any){
    this.dataUpdate = contact;
  }

  updateContacts(contact: any){

    const contacttemp = {
      ...contact
    }
    delete contacttemp.id
    return this.http.put(`https://databaserealtime-1b441.firebaseio.com/Contacts/${contact.Id}.json`, contacttemp);
  }

  deleteContact(contactID: any){
    return this.http.delete(`https://databaserealtime-1b441.firebaseio.com/Contacts/${contactID}.json`)
  }
  private saveToken( idToken: string ) {

    this.userToken = idToken;
    localStorage.setItem('token', idToken);

  }

  // SignUp
  SigUp( Profile: User ){

    const authData = {
      email: Profile.Email,
      password: Profile.Password,
      returnSecureToken: true
    }

    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCFVHIvyZqWteYkbkvge5q1Gu_qdUmBZVU', 
      Profile
    ).pipe(
      map( resp => {
        this.saveToken( resp['idToken'] );
        return resp;
      })
    );

  }
  // LogIn
  logIn( Profile: User ){
      const authData = {
      email: Profile.Email,
      password: Profile.Password,
      returnSecureToken: true
    }

    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCFVHIvyZqWteYkbkvge5q1Gu_qdUmBZVU', 
      authData
    ).pipe(
      map( resp => {
        this.saveToken( resp['idToken'] );
        return resp;
      })
    );

  }
  delectContacts(contactID: any){
    return this.http.delete(`https://databaserealtime-1b441.firebaseio.com/Contacts/${contactID}.json`);
  }

}
