import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UserService } from '../../services/user/user.service';
import { RevistaApiService } from '../../services/revista-api.service';

@Component({
  selector: 'app-articulo',
  templateUrl: '../../views/articulo-simple.html',
  styleUrls: ['./articulo.component.css'],
  providers:[RevistaApiService, UserService]
})
export class ArticuloComponent implements OnInit {

  public articuloId: number;
  public articulo: any = [];
  public etiquetasArticulo: any = [];
  public html: any = [];
  public userToken:any;
  constructor(private revistaApiService: RevistaApiService,
              private route: ActivatedRoute) {
                this.route.params.subscribe( params => this.articuloId = params.id );
         }

  ngOnInit() {
        this.articulo.favorito = false;
        console.log("Revista seleccionada", this.articuloId)
        if (sessionStorage.length===0) { console.log("Necesita registrarse");  }
        else {
          console.log("Logeado");
          this.userToken = JSON.parse(sessionStorage.getItem("TdpToken"));
          console.log(this.userToken);
        }
        this.showArticulo(this.articuloId);
    }

    public showArticulo (id) {
    //  console.log(this.revistaApiService.getArticulo(id));

      this.revistaApiService.getArticulo(id, this.userToken)
          .subscribe(
            result => {
              // this.resultado = result;
              this.articulo = result;
              //console.log("HTML",this.articulo.art_r_m[0].html);
              console.log("Resultado articulo", this.articulo);
              console.log("Favorito", this.articulo.favorito);

                    this.revistaApiService.getArticuloHtml(id)
                        .subscribe(
                          result => {
                            this.html = result;
                            console.log("Resultado HTML", this.html)
                          },
                          error => {
                            console.log("Error", error)
                          }
                        );
            },
            error => {
              console.log("Error", error)
            }
          );

        this.revistaApiService.getEtiquetasArticulo(id)
        .subscribe(
          result => {
            this.etiquetasArticulo = result;
            console.log("Resultado etiquetasArticulo", this.etiquetasArticulo);
          },
          error => {
            console.log("Error")
          }
        );

    }

    public OnClickMarcaFavorito(){

      this.revistaApiService.ArticuloFavorito(this.articuloId, this.userToken)
      .subscribe(
        result => {
          let resultado = result;
          this.articulo.favorito = !this.articulo.favorito;
          console.log(this.articulo.favorito);
          console.log("Resultado HTML", resultado)
        },
        error => {
          console.log("Error", error)
        }
      );


    }
}
