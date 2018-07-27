import { Component, OnInit } from '@angular/core';
import { RevistaApiService } from '../../services/revista-api.service';

@Component({
  selector: 'app-revista-lista',
//  templateUrl: './revista-lista.component.html',
  templateUrl: '../../views/revista-lista.html',
  styleUrls: ['./revista-lista.component.css'],
  providers:[RevistaApiService]
})

export class RevistaListaComponent implements OnInit {


    public revistas: any = [];
  constructor(private revistaApiService: RevistaApiService) { }

  ngOnInit() {
      console.log("on init", this);

      this.showRevistas();
}

  public showRevistas(){

      console.log(this.revistaApiService.getRevistas());

      this.revistaApiService.getRevistas()
          .subscribe(
            result => {
              this.revistas = result;
              console.log("Resultado lista revista", result)


            },
            error => {
              console.log("Error")
            }

          );

      }




}
