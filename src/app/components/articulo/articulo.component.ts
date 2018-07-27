import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import { RevistaApiService } from '../../services/revista-api.service';

@Component({
  selector: 'app-articulo',
  templateUrl: '../../views/articulo-simple.html',
  styleUrls: ['./articulo.component.css'],
  providers:[RevistaApiService]
})
export class ArticuloComponent implements OnInit {

  public articuloId: number;
  public articulo: any = [];
  public html: string;
  constructor(private revistaApiService: RevistaApiService,
              private route: ActivatedRoute) {
                this.route.params.subscribe( params => this.articuloId = params.id );
         }

  ngOnInit() {
        this.showArticulo(this.articuloId);
        console.log("Revista seleccionada", this.articuloId)
  }

    public showArticulo (id) {
      console.log(this.revistaApiService.getArticulo(id));

      this.revistaApiService.getArticulo(id)
          .subscribe(
            result => {
              // this.resultado = result;
              this.articulo = result;
              console.log("HTML",this.articulo.art_r_m[0].html);
              console.log("Resultado articulo", this.articulo);
            },
            error => {
              console.log("Error")
            }
          )  ;
    }
}
