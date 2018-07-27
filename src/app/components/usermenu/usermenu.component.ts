import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usermenu',
  templateUrl: './usermenu.component.html',
  styleUrls: ['./usermenu.component.css']
})
export class UsermenuComponent implements OnInit {

  private token: string = null;
  public autentificado:boolean = false;
  public userToken: string = "";
  public userData: any;

  constructor() {

  }

  ngOnInit() {
    console.log("inicio usermenu");

    if (sessionStorage.getItem("dataUser"))
      {
        this.userData = sessionStorage.getItem("dataUser");
        this.userToken = this.userData.token;
      }
    else this.autentificado=false;
        this.userData = sessionStorage.getItem("dataUser");

    if (this.userToken === null){
      this.autentificado=false;}
    else this.autentificado=true;
  }
  reload(){
    console.log("voy a recargar valores");
    this.userToken = sessionStorage.getItem("userToken");
    console.log("El token es este: ", this.userToken = sessionStorage.getItem("userToken"));
    if (this.userToken === null)
    {
    this.autentificado=false;
    console.log("si esta vacio lo cambio a false")
    }
    else{
      this.autentificado=true;
      console.log("si no esta vacio lo cambio a true")
    }
  }
}
