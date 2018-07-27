import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import { RevistaApiService } from '../../services/revista-api.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
  providers:[RevistaApiService]
})

export class BusquedaComponent implements OnInit {

  @Input() public inputArticulos: any;
  public palabras: any = [];
  public listaArticulos: any = [];
  public articuloPush: any =[];
  //Etiquetas
  public etiqueta: any =[];
  public etiquetaArticulos: any =[];
  public etiquetaBuscar: any = [];

  constructor(private revistaApiService: RevistaApiService,
              private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.showEtiquetas();
    console.log("Lista de etiquetas", this.etiqueta);
    console.log("input" , this.inputArticulos)
  }

  public OcBuscaPalabras(){

    this.palabras=this.palabras.replace(/(\r\n|\n|\r)/gm,"%2C");
    //this.palabras.slice(4,1);
    console.log(this.palabras);
    this.revistaApiService.getArticulosPorPalabras(this.palabras)
        .subscribe(
          result => {
            this.listaArticulos = result;
            console.log("Resultado result", this.listaArticulos)
          },
          error => {
            console.log("Error")
          }

        );

  }

  //Etiquetas
  public showEtiquetas () {
    console.log(this.revistaApiService.getEtiquetas());

    this.revistaApiService.getEtiquetas()
        .subscribe(
          result => {

            this.etiqueta = result;
            console.log("Resultado etiqueta", this.etiqueta)
            console.log("res", result);
          },
          error => {
            console.log("Error")
          }
        )  ;
  }
  public OnClickEtiqueta (id) {
    console.log(id);
    this.listaArticulos.length = 0;
    this.revistaApiService.getEtiquetasArticulo(id)
        .subscribe(
          result => {

            this.etiquetaArticulos = result;
            console.log("Resultado etiqueta articulos", this.etiquetaArticulos)
            this.getArticulosEtiqueta(this.etiquetaArticulos);
          },
          error => {
            console.log("Error")
          }
        );
  }
  public SearchCkecked () {
  console.log("filtrando ", this.etiqueta);
    this.etiquetaBuscar="";

    for(let i = 0; i <  this.etiqueta.total_count; i++ ){
      if(this.etiqueta.eti_m[i].checked){
        this.etiquetaBuscar = this.etiquetaBuscar +"1";
      }
      else{
        this.etiquetaBuscar = this.etiquetaBuscar +"X";
      }
  }

    console.log("Etiquetas a buscar", this.etiquetaBuscar);
  this.revistaApiService.buscarArticulosPorEtiquetas(this.etiquetaBuscar)
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
    public OnClickEtiquetachecked (index) {
      this.etiqueta.eti_m[index].checked = !this.etiqueta.eti_m[index].checked;
      console.log("OnClickEtiquetachecked", this.etiqueta.eti_m[index], "  index", index);
  }



  public getArticulosEtiqueta(etiquetaArticulo) {


      for (let i=0; i<etiquetaArticulo.count; i++){

        console.log("Etiqueta Articulo",etiquetaArticulo.etiquetas_en_articulo[i].art_r_m);
        this.revistaApiService.getArticulo(etiquetaArticulo.etiquetas_en_articulo[i].art_r_m)
          .subscribe(
            result => {
              let push = result;
              console.log("Resultado result", result);
              this.articuloPush.push(result);
              console.log("Resultado articuloPush", this.articuloPush.art_r_m);
              this.listaArticulos.push(this.articuloPush.art_r_m);
            },
            error => {
              console.log("Error")
            }
          )
        }
      console.log("Resultado articulo final", this.listaArticulos);

  }



}
