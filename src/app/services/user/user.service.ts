import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable } from 'rxjs';
import { UsuarioRegistroModel } from '../../models/usuario.model';

@Injectable()
export class UserService {
  readonly rootUrl = 'http://freeapp.ayudapyme.es';

  private token: string = "";
  public showlogeado:boolean = false;
  public usertoken: string = "";
  public reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True','Access-Control-Allow-Origin': '*' });

  constructor(private http: HttpClient) { }


  public registerUser(user: any) {
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

  // Si es correcto devolvemos solo el token TdpToken
  public userAuthentication(UserName, password) {
    var data = "email=" + UserName + "&pass=" + password;

    console.log("POST:", this.rootUrl + '/API_LOGIN?'+data);
    return  this.http.post(this.rootUrl + '/API_LOGIN?'+data, data,{ headers: this.reqHeader } );

  }

  public getUserData(TdpToken){
    console.log("GET: ",this.rootUrl+'/API_GET_USER_DATA?TOKEN='+TdpToken);
   return  this.http.get(this.rootUrl+'/API_GET_USER_DATA?TOKEN='+TdpToken);
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

      console.log('http://freeapp.ayudapyme.es/API_REG_USR?'+userData);

      return this.http.post(
      'http://freeapp.ayudapyme.es/API_REG_USR?'+userData,
      { headers: this.reqHeader });

  }

  public guardarUsuario(user: any, userToken: any){ // Swagger


      var userData = "eml=" + user.eml.toUpperCase()
       + "&cif=" + user.cif
        + "&name=" + user.name
         + "&ape_1=" + user.ape_1
          + "&ape_2=" + user.ape_2
           + "&tlf=" + user.tlf
            + "&dir=" + user.dir
             + "&loc=" + user.loc
              + "&cps=" + user.cps
               + "&TOKEN=" + userToken;

      console.log('http://freeapp.ayudapyme.es/API_MOD_USR?'+userData);

      return this.http.post('http://freeapp.ayudapyme.es/API_MOD_USR?'+userData, { headers: this.reqHeader });

  }

  public cambiarPassUsuario (user: any, userToken: any){ // Swagger


      var userData = "pass=" + user.pass
                      + "newpass=" + user.newPass
                        + "&TOKEN=" + userToken;

      console.log('http://freeapp.ayudapyme.es/API_MOD_PAS_USR?'+userData);

      return this.http.post('http://freeapp.ayudapyme.es/API_MOD_PAS_USR?'+userData, { headers: this.reqHeader });

  }

}
