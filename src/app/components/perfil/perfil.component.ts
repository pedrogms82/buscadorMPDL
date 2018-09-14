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
  public userToken:any;
  public user:any;
  constructor(
              private userService: UserService) {

  }

  ngOnInit() {

    if (sessionStorage.length===0) { console.log("Necesita registrarse");  }
    else {
      console.log("Logeado");
      this.userToken = JSON.parse(sessionStorage.getItem("TdpToken"));
      console.log("token",this.userToken);
      this.userService.getUserData(this.userToken).subscribe((data : any)=>{
            this.user =data;
            console.log("user",this.user);
      },
      (err : HttpErrorResponse)=>{
        console.log("Error", err)
      });
    }
  }

  public guardar(){

    console.log("guardo", this.user);

    this.userService.guardarUsuario(this.user, this.userToken.TdpToken)
     .subscribe(
         result => {
          console.log("Resultado", result);
         },
         error => {
           console.log("Error")
         }
       );

       if(this.user.passChange){
          if(this.user.pass1 === this.user.pass2){
            this.user.newPass= this.user.pass1;
            this.userService.cambiarPassUsuario(this.user, this.userToken.TdpToken)
               .subscribe(
                   result => {
                    console.log("Resultado", result);
                   },
                   error => {
                     console.log("Error")
                   }
                 );
          }
          else this.user.wrgPass = true;
       }

  }
}
