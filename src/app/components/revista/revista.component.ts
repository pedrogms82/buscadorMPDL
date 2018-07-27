import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import { RevistaApiService } from '../../services/revista-api.service';
import { RevistaArticulosListaComponent } from '../revista-articulos-lista/revista-articulos-lista.component';

import { RevistaModel } from '../../models/revista.model';

@Component({
  selector: 'app-revista',
  templateUrl: './revista.component.html',
  styleUrls: ['./revista.component.css'],
  providers:[RevistaApiService]
})

export class RevistaComponent implements OnInit {

  public revistaId: number;
  public revista: any =[];
  constructor(private revistaApiService: RevistaApiService,
              private route: ActivatedRoute) {
                this.route.params.subscribe( params => this.revistaId = params.id );
         }

  ngOnInit() {
      this.showRevista(this.revistaId);
      console.log("Revista seleccionada", this.revistaId)
  }

  public showRevista (id) {
    console.log(this.revistaApiService.getRevista(id));

    this.revistaApiService.getRevista(id)
        .subscribe(
          result => {

            this.revista = result;
            console.log("Resultado revista", this.revista)
            console.log("res", result);
          },
          error => {
            console.log("Error")
          }
        )  ;
  }

}
