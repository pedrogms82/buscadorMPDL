import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//import { NgxCaptchaModule } from 'ngx-captcha';
import { AppRoutingModule } from './app-routing/app-routing.module';
// import { ReCaptcha2Component } from '../../node_modules/ngx-captcha/public_api';


import { AppComponent } from './app.component';
import { RevistaComponent } from './components/revista/revista.component';
import { RevistaListaComponent } from './components/revista-lista/revista-lista.component';
import { RevistaArticulosListaComponent } from './components/revista-articulos-lista/revista-articulos-lista.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { EtiquetaComponent } from './components/etiqueta/etiqueta.component';
import { EtiquetaArticuloComponent } from './components/etiqueta-articulo/etiqueta-articulo.component';
import { BuscaPalabrasComponent } from './components/busca-palabras/busca-palabras.component';
import { SignInComponent } from './components/user/sign-in/sign-in.component';
import { UsermenuComponent } from './components/usermenu/usermenu.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { RegistroComponent } from './components/user/registro/registro.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SuscripcionComponent } from './components/suscripcion/suscripcion.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
//import { RecaptchaComponent } from './components/recaptcha/recaptcha.component';

@NgModule({
  declarations: [
    AppComponent,
    RevistaListaComponent,
    RevistaArticulosListaComponent,
    RevistaComponent,
    ArticuloComponent,
    EtiquetaComponent,
    EtiquetaArticuloComponent,
    BuscaPalabrasComponent,
    SignInComponent,
    UsermenuComponent,
    PerfilComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    BusquedaComponent,
    RegistroComponent,
    ContactoComponent,
    SuscripcionComponent,
    FavoritosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  //  NgxCaptchaModule.forRoot({
    //  reCaptcha2SiteKey: '6LdHfG4UAAAAAHHRLxUSpnLX-0Tg5pNgq1hYDJJ6', // optional, can be overridden with 'siteKey' component property
  //  }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
