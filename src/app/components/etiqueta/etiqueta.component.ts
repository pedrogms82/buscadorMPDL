import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RevistaApiService } from '../../services/revista-api.service';


@Component({
  selector: 'app-etiqueta',
  templateUrl: './etiqueta.busqueda.html',
  styleUrls: ['./etiqueta.component.css'],
  providers:[RevistaApiService]
})
export class EtiquetaComponent implements OnInit {

  //public etiquetaId: number;
  public etiqueta: any =[];
  public etiquetaArticulos: any =[];
  public listaArticulos: any =[];
  public articuloPush: any =[];
  public push : any;//{ art_r_m: any };
  constructor(private revistaApiService: RevistaApiService,
              private route: ActivatedRoute) {
            //  this.route.params.subscribe( params => this.etiquetaId = params.id );
              }

  ngOnInit() {
    this.showEtiquetas();
    console.log("Lista de etiquetas", this.etiqueta);
  }

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
    this.listaArticulos = [];
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
  console.log("filtrando ", this.etiqueta.total_count);
    this.listaArticulos = [];


    for(let i = 0; i <  this.etiqueta.total_count; i++ ){

    this.revistaApiService.getEtiquetasArticulo(i)
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

      }//for
  }


    public OnClickEtiquetachecked (index) {
      this.etiqueta.eti_m[index].checked = !this.etiqueta.eti_m[index].checked;
      console.log("OnClickEtiquetachecked", this.etiqueta.eti_m[index], "  index", index);
  }

  // public RevisaChecked () {
  //
  //   // this.etiqueta.eti_m[id].checked = !this.etiqueta.eti_m[id].checked;
  //   console.log("Revisa Checked",this);
  //   this.listaArticulos = [];
  //
  //   for (let i=0; i<this.etiqueta.count; i++){
  //     if(this.etiqueta.eti_m[i].checked){
  //
  //       this.revistaApiService.getEtiquetasArticulo(this.etiqueta.eti_m[i].id)
  //           .subscribe(
  //             result => {
  //
  //               this.etiquetaArticulos = result;
  //               console.log("Resultado etiqueta articulos", this.etiquetaArticulos)
  //               this.listaArticulos.push(this.getArticulosEtiqueta(this.etiquetaArticulos));
  //             },
  //             error => {
  //               console.log("Error")
  //             }
  //           );
  //
  //
  //     // this.listaArticulos.push();
  //         }
  //       }
  // }


  public getArticulosEtiqueta(etiquetaArticulo) {


      for (let i=0; i<etiquetaArticulo.count; i++){

        console.log("Etiqueta Articulo",etiquetaArticulo.etiquetas_en_articulo[i].art_r_m);
        this.revistaApiService.getArticulo(etiquetaArticulo.etiquetas_en_articulo[i].art_r_m)
          .subscribe(
            result => {
              //let push;// : { art_r_m: any; };
              this.push = result;
              //var obj: { property: string; } = { property: "foo" };
              console.log(result);
              console.log(this.push.art_r_m[i]);

            this.listaArticulos.push(this.push.art_r_m[i]);

              console.log("Resultado articulo", this.listaArticulos)
            },
            error => {
              console.log("Error")
            }
          )
        }
      console.log("Resultado articulo final", this.listaArticulos);
  }

}
