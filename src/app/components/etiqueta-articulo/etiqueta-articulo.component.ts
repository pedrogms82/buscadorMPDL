import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { RevistaApiService } from '../../services/revista-api.service';

@Component({
  selector: 'app-etiqueta-articulo',
  templateUrl: './etiqueta-articulo.component.html',
  styleUrls: ['./etiqueta-articulo.component.css'],
  providers:[RevistaApiService]
})
export class EtiquetaArticuloComponent implements OnInit {

    public etiquetaBuscar: number;
    public listaArticulos: any = [];

  constructor(private revistaApiService: RevistaApiService,
              private route: ActivatedRoute) {

              this.route.params.subscribe( params => this.etiquetaBuscar = params.id );
              console.log("etiqueta a buscar", this.etiquetaBuscar);

  }

  ngOnInit() {

    if (this.etiquetaBuscar==1){
          this.buscaEtiquetas("1xxxxxxx");
    }
    else if (this.etiquetaBuscar==2){
          this.buscaEtiquetas("x1xxxxxx");
    }
    else if (this.etiquetaBuscar==3){
          this.buscaEtiquetas("xx1xxxxx");
    }
    else if (this.etiquetaBuscar==4){
          this.buscaEtiquetas("xxx1xxxx");
    }
    else if (this.etiquetaBuscar==5){
          this.buscaEtiquetas("xxxx1xxx");
    }
    else if (this.etiquetaBuscar==6){
          this.buscaEtiquetas("xxxxx1xx");
    }
    else if (this.etiquetaBuscar==7){
          this.buscaEtiquetas("xxxxxx1x");
    }
    else if (this.etiquetaBuscar==8){
          this.buscaEtiquetas("xxxxxxx1");
    }
  }

  buscaEtiquetas(etiqueta){

    console.log("busco etiqueta", etiqueta);

    this.revistaApiService.buscarArticulosPorEtiquetas(etiqueta)
    .subscribe(
      result => {
        this.listaArticulos = result;
        console.log("Resultado etiquetas buscar", this.listaArticulos);
      },
      error => {
        console.log("Error", error)
      }
    )
  }
}
