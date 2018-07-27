import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import { RevistaApiService } from '../../services/revista-api.service';

@Component({
  selector: 'app-busca-palabras',
  templateUrl: '../../views/palabras.html',
  styleUrls: ['./busca-palabras.component.css'],
  providers:[RevistaApiService]
})

export class BuscaPalabrasComponent implements OnInit {

  public palabras: any = [];
  public listaArticulos: any = [];
  constructor(private revistaApiService: RevistaApiService,
              private route: ActivatedRoute) {
   }

  ngOnInit() {
  }

  public OcBuscaPalabras(){

    this.palabras=this.palabras.replace(/(\r\n|\n|\r)/gm,"%2C");
    //this.palabras.slice(4,1);
    console.log(this.palabras);
    this.revistaApiService.getArticulosPorPalabras(this.palabras)
        .subscribe(
          result => {
            this.listaArticulos = result;

            console.log("Resultado listaArticulos", result)


          },
          error => {
            console.log("Error")
          }

        );

  }

}
