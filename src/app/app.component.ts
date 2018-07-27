import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RevistaComponent } from './components/revista/revista.component';
import { RevistaListaComponent } from './components/revista-lista/revista-lista.component';
import { RevistaArticulosListaComponent } from './components/revista-articulos-lista/revista-articulos-lista.component';
import { EtiquetaComponent } from './components/etiqueta/etiqueta.component';
import { EtiquetaArticuloComponent } from './components/etiqueta-articulo/etiqueta-articulo.component';
import { FooterComponent } from './components/footer/footer.component';


@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  templateUrl: './views/app.html',
  styleUrls: ['./app.component.css']
  // directives: [RevistaListaComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
  title = 'app';
  constructor(
              private router : Router,
              private route: ActivatedRoute){}

  ngOnInit() {
        console.log("APP");
      //this.router.navigate(['/home']);
  }

}
