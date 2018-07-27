import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable } from 'rxjs';
import { UsuarioRegistroModel } from '../../models/usuario.model';
// import 'rxjs/add/operator/map';
//import { User } from './user.model';
//import { map } from "rxjs/operators";
//import 'rxjs/add/operator/map';


@Injectable()
export class UserService {
  readonly rootUrl = 'http://freeapp.ayudapyme.es';


  private token: string = "";
  public showlogeado:boolean = false;
  public usertoken: string = "";
  public reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True','Access-Control-Allow-Origin': '*' });

  constructor(private http: HttpClient) { }


  registerUser(user: any) {
    const body = {
      UserName: user.UserName,
      Password: user.Password,
      Email: user.Email,
      FirstName: user.FirstName,
      LastName: user.LastName
    }
  //  var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.rootUrl + '/api/User/Register', body,{headers : this.reqHeader});
  }

  userAuthentication(UserName, password) {
    var data = "email=" + UserName + "&pass=" + password;// + "&grant_type=password"
  //  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True','Access-Control-Allow-Origin': '*' });
    console.log("POST:", this.rootUrl + '/login?'+data);
    return  this.http.post(this.rootUrl + '/login?'+data, data,{ headers: this.reqHeader } );
    //let response = this.http.get(this.rootUrl + 'login?EMAIL=capi@mpdl.org&PASS=1' );
    //let response ='{ "token" : "4E07408562BEDB8B60CE05C1DECFE3AD16B72230967DE01F640B7E4729B49FCE", "email" : "capi@mpdl.org", "Nombre" : "Pedro", "Apellidos":"García Montes", "Dirección": "Calle Martos 15" }';
    // return response;
  }

  getUserClaims(){
   return  this.http.get(this.rootUrl+'/api/GetUserClaims');
  }

  // public guardarUsuario(user: any){ // Swagger
  //
  //     console.log("Usuario en param", user);
  //     // console.log("POST",'http://freeapp.ayudapyme.es/vERP_2_dat_dat/v1/cli_m/'+user.id+'?api_key=Revista');
  //     // console.log("PARAM1",user);
  //     var userJson = JSON.stringify(user);
  //     console.log("JSON",userJson)
  //     // return this.http.post('http://freeapp.ayudapyme.es/vERP_2_dat_dat/v1/cli_m/'+user.id+'?api_key=Revista',userJson); //,{ headers: this.reqHeader }
  //     return this.http.post(
  //     'http://freeapp.ayudapyme.es/vERP_2_dat_dat/v1/cli_m?api_key=Revista',
  //     userJson,
  //     { headers: this.reqHeader });
  //
  // }

  public registraUsuario(user: any){ // Swagger


      var userData = "eml=" + user.eml.toUpperCase() + "&pass=" + user.pass + "&cif=" + user.cif + "&name=" + user.name;

      console.log('http://freeapp.ayudapyme.es/webregistro?'+userData);

      return this.http.post(
      'http://freeapp.ayudapyme.es/webregistro?'+userData,
      { headers: this.reqHeader });

  }

  public guardarUsuario(user: any){ // Swagger


      var userData = "eml=" + user.eml.toUpperCase()
       + "&cif=" + user.cif
        + "&name=" + user.name
         + "&ape_1=" + user.ape_1
          + "&ape_2=" + user.ape_2
           + "&tlf=" + user.tlf;

      console.log('http://freeapp.ayudapyme.es/mod_user?'+userData);

      return this.http.post(
      'http://freeapp.ayudapyme.es/mod_user?'+userData,
      { headers: this.reqHeader });

  }



}
