import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';
import { RealtdbService } from 'src/app/Services/realtdb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private db: RealtdbService, private routes: Router) { }

  ngOnInit(): void {
    this.usuario = new User()
  }
  usuario: User;
  registrarte(){
    console.log(this.usuario)
    this.db.SigUp(this.usuario).subscribe( resp =>{
        console.log(resp)
        alert("Logeado exitosamente")
      this.routes.navigateByUrl('/login')
        console.log("Error")

    }, (err) =>{
      alert("Error al logearse")
    })
  }
}
