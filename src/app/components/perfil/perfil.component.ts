import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  providers:[UserService]
})
export class PerfilComponent implements OnInit {

  public usuario:any;
  public user:any;
  constructor(private userService: UserService) {

  }

  ngOnInit() {

    if (sessionStorage.length===0) {
      console.log("Necesita registrarse");

    }
    else console.log("OK");

    this.user = JSON.parse(sessionStorage.getItem("dataUser"));

    console.log(this.user);

  }
  public guardar(){

    console.log("guardo", this.user);

    this.userService.guardarUsuario(this.user)
     .subscribe(
         result => {
          console.log("Resultado", result);
         },
         error => {
           console.log("Error")
         }
       )  ;
  }

}
