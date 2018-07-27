import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { RevistaApiService } from '../../services/revista-api.service';

@Component({
  selector: 'app-revista-articulos-lista',
  //templateUrl: './revista-articulos-lista.component.html',
  templateUrl: './revista-articulos-lista.component.html',
  styleUrls: ['./revista-articulos-lista.component.css'],
  providers:[RevistaApiService]
})
export class RevistaArticulosListaComponent implements OnInit {

  public revistaId: number;
  public revistaArticulos: any = [];
  constructor(private revistaApiService: RevistaApiService,
              private route: ActivatedRoute) {
              this.route.params.subscribe( params => this.revistaId = params.id );
   }

  ngOnInit() {
    this.showRevistaArticulos(this.revistaId);
    console.log("Revista seleccionada", this.revistaId)
  }

  public showRevistaArticulos (id) {
    console.log(this.revistaApiService.getRevistaArticulos(id));

    this.revistaApiService.getRevistaArticulos(id)
        .subscribe(
          result => {
            this.revistaArticulos = result;
            console.log("Resultado Revista Articulos", this.revistaArticulos)
          },
          error => {
            console.log("Error")
          }
        )  ;
  }
}
