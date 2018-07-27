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
  }

  enviarEmail(message: IMessage) {
    this.mailingService.sendEmail(message).subscribe(
        result => {
        console.log('AppComponent Success', result);
                setTimeout(alert("4 seconds"),4000);
      },
        error => {
        console.log('Sending email got error', error);
                setTimeout(alert("4 seconds"),4000);

      });
      setTimeout(alert("4 seconds"),4000);
  }
}
