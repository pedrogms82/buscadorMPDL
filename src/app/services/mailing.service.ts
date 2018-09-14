import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
//import { Observable } from 'rxjs/Rx';
import { Resolve } from '@angular/router';
//import 'rxjs/add/observable/throw';
import { filter, map, catchError } from 'rxjs/operators';


export interface IMessage {
  Nombre?: string,
  Email?: string,
  Asunto?: string,
  Mensaje?: string
}

@Injectable()
export class MailingService {
//  private emailUrl = '../../assets/email.php';
  public reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True','Access-Control-Allow-Origin': '*' });

  readonly rootUrl = 'http://freeapp.ayudapyme.es';
//  private emailUrl = 'http://mpdl.org/util/email.php';
  private emailUrl = 'http://ayudapyme.es/email.php';
  private contactoUrl = this.rootUrl + '/guardaContacto';
  constructor(private http: HttpClient) {

  }

  //sendEmail(message: IMessage): Observable<IMessage> | any {
  sendEmail(message) {
    console.log("URL", this.emailUrl);
    console.log("Mensaje", message);

    return this.http.post(this.emailUrl, message)//,  { headers: this.reqHeader })
    .subscribe(
        result => {
        console.log('Sending email was successfull', result);
      //  setTimeout(alert("4 seconds"),4000);
        return result;
      },
        error => {
        console.log('Sending email got error', error);
        alert('Sending email got error: ' + error);
      //  setTimeout(alert("4 seconds"),4000);
        return error;
      })
  }
  guardarContacto(message) {
    console.log("URL", this.contactoUrl);
    console.log("Mensaje", message);

    return this.http.post(this.contactoUrl, '{nombre: "Peter", email: "capi@mpdl.org", asunto: "prueba", mensaje: "Probando el envio de mensajes"}',  { headers: this.reqHeader })
    .subscribe(
        result => {
        console.log('Sending email was successfull', result);
      //  setTimeout(alert("4 seconds"),4000);
        return result;
      },
        error => {
        console.log('Sending email got error', error);
        //alert('Sending email got error: ' + error);
    //    setTimeout(alert("4 seconds"),4000);
        return Observable.throw(error);
      })
  }

  //You may also want to check the response. But again, let's keep it simple.
// this.http.post(this.endpoint, postVars)
//     .subscribe(
//         response => console.log(response),
//         response => console.log(response)
//     )
// }
}
