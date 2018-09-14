import { Component, OnInit } from '@angular/core';
import { MailingService, IMessage  } from '../../services/mailing.service';

@Component({
  selector: 'app-contacto',
  templateUrl: '../../views/contacto.html',
  styleUrls: ['./contacto.component.css'],
  providers:[MailingService]
})


export class ContactoComponent implements OnInit {

  public message: IMessage = {};
  constructor(private mailingService: MailingService) { }

  ngOnInit() {
    console.log("Pagina de contacto");

    console.log(this.message);
  }

  enviarEmail(message: IMessage) {
    //setTimeout(console.log("4 seconds"),4000);
    console.log(this.message);
    this.mailingService.sendEmail(message);
    /*.then(
        result => {
        console.log('AppComponent Success', result);
                setTimeout(console.log("4 seconds"),4000);
      },
        error => {
        console.log('Sending email got error', error);
                setTimeout(console.log("4 seconds"),4000);

      });*/
    //  setTimeout(alert("4 seconds"),4000);
  }
}
