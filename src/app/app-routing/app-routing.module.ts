import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RevistaComponent } from '../components/revista/revista.component';
import { RevistaListaComponent } from '../components/revista-lista/revista-lista.component';
import { RevistaArticulosListaComponent } from '../components/revista-articulos-lista/revista-articulos-lista.component';
import { ArticuloComponent } from '../components/articulo/articulo.component';
import { EtiquetaComponent } from '../components/etiqueta/etiqueta.component';
import { EtiquetaArticuloComponent } from '../components/etiqueta-articulo/etiqueta-articulo.component';
import { BuscaPalabrasComponent } from '../components/busca-palabras/busca-palabras.component';
import { BusquedaComponent } from '../components/busqueda/busqueda.component';
import { SignInComponent } from '../components/user/sign-in/sign-in.component';
import { RegistroComponent } from '../components/user/registro/registro.component';
import { PerfilComponent } from '../components/perfil/perfil.component';
import { HomeComponent } from '../components/home/home.component';
import { ContactoComponent } from '../components/contacto/contacto.component';
//import { RecaptchaComponent } from '../components/recaptcha/recaptcha.component';
import { FavoritosComponent } from '../components/favoritos/favoritos.component';

const routes: Routes = [
  { path: 'revistas', component: RevistaListaComponent },
  { path: 'revista/:id', component: RevistaComponent },
  { path: 'articulo/:id', component: ArticuloComponent },
  { path: 'etiqueta', component: EtiquetaComponent },
  { path: 'etiqueta/:id', component: EtiquetaArticuloComponent },
  { path: 'buscar', component: BusquedaComponent },
  { path: 'login', component: SignInComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'favoritos', component: FavoritosComponent },  
//  { path: 'recaptcha', component: RecaptchaComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
