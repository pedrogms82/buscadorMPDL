import { Component, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { RevistaApiService } from '../../services/revista-api.service';

@Component({
  selector: 'app-nav',
  // templateUrl: './nav.component.html',
  templateUrl: '../../views/nav.html',
  styleUrls: ['./nav.component.css'],
    providers:[RevistaApiService]
})

export class NavComponent implements OnInit {

  public usuarioLogeado: boolean = false;
  public listaArticulos: any = [];
   @Output() public articulosOutput = this.listaArticulos;

  constructor(
              private revistaApiService: RevistaApiService,
              private router : Router,
              private route: ActivatedRoute
    ) { }

  ngOnInit() {
    console.log("NAV")
      if (sessionStorage.length===0) this.usuarioLogeado = false;
          else this.usuarioLogeado = true;
  }


  Logout() {
    console.log("Ejecuto logout()");
    sessionStorage.removeItem('userToken');
    sessionStorage.clear();
    console.log("Remuevo token ", sessionStorage.getItem("userToken"));

    this.router.navigate(['/']);
    this.pageRefresh();

  }

  pageRefresh() {
     location.reload();
  }

  registro(){

  }
  tagSearch(tag){
    //
    //   this.revistaApiService.buscarArticulosPorEtiquetas(tag)
    //   .subscribe(
    //     result => {
    //       this.listaArticulos = result;
    //       console.log("Resultado etiquetas buscar", this.listaArticulos);
    //       this.articulosOutput = this.listaArticulos;
    //     },
    //     error => {
    //       console.log("Error", error)
    //     }
    //   )
    //         this.router.navigate(['/buscar'], this.listaArticulos );
    //         this.articulosOutput = this.listaArticulos;
    this.router.navigate(['/buscar', tag]);

    //[routerLink]="['/revista', revista.id]"
    // this.router.navigate(['/etiqueta/'+tag]);
    this.pageRefresh();
  }

}
