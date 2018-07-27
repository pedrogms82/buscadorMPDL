import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Resolve } from '@angular/router';


export interface IMessage {
  Nombre?: string,
  Email?: string,
  Asunto?: string,
  Mensaje?: string
}

@Injectable()
export class MailingService {
  //private emailUrl = '../../assets/email.php';http://www.mpdl.org/util/email.php
  public reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True','Access-Control-Allow-Origin': '*' });
  private emailUrl = 'http://localhost:4200/email.php';
  constructor(private http: HttpClient) {

  }

  sendEmail(message: IMessage): Observable<IMessage> | any {
    console.log("URL", this.emailUrl);
    console.log("Mensaje", message);

    return this.http.post(this.emailUrl, message,  { headers: this.reqHeader })
    .subscribe(
        result => {
        console.log('Sending email was successfull', result);
        setTimeout(alert("4 seconds"),4000);
        return result;
      },
        error => {
        console.log('Sending email got error', error);
        alert('Sending email got error: ' + error);
        setTimeout(alert("4 seconds"),4000);
        return Observable.throw(error)
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
