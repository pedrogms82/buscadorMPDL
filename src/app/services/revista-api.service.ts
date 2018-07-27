import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Response } from "@angular/http";


@Injectable(
//   {
//   // providedIn: 'root'
// }
)
export class RevistaApiService {

  readonly rootUrl = 'http://freeapp.ayudapyme.es';
  public reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True','Access-Control-Allow-Origin': '*' });

  constructor(private http: HttpClient) { }

  public getRevistas()  {
  return this.http.get('http://freeapp.ayudapyme.es/vERP_2_dat_dat/v1/rev_m?api_key=Revista');
  }

  public getRevista(id)  {
  return this.http.get('http://freeapp.ayudapyme.es/vERP_2_dat_dat/v1/rev_m/'+id+'?api_key=Revista');
}

  public getRevistaArticulos(id) {
  return this.http.get('http://freeapp.ayudapyme.es/vERP_2_dat_dat/v1/art_r_m?filter%5Brevista%5D='+id+'&api_key=Revista');
  }

  public getArticulo(id) {
  return this.http.get('http://freeapp.ayudapyme.es/vERP_2_dat_dat/v1/art_r_m/'+id+'?api_key=Revista');
  }


  public getEtiquetas()  {
  return this.http.get('http://freeapp.ayudapyme.es/vERP_2_dat_dat/v1/eti_m?api_key=Revista');
  }

  public getEtiquetasArticulo(id)  {
  return this.http.get('http://freeapp.ayudapyme.es/vERP_2_dat_dat/v1/etiquetas_en_articulo?filter%5Beti_m%5D='+id+'&api_key=Revista');
  }

  public getArticulosPorPalabras(palabras)  {
  console.log("consulta",'http://freeapp.ayudapyme.es/vERP_2_dat_dat/v1/art_r_m?filter%5Bnom_tod%5D=Index&filter%5Bwords%5D='+palabras+'&api_key=Revista');
  return this.http.get('http://freeapp.ayudapyme.es/vERP_2_dat_dat/v1/art_r_m?filter%5Bnom_tod%5D=Index&filter%5Bwords%5D='+palabras+'&api_key=Revista');

  }
  public buscarArticulosPorEtiquetas(data)  {
  console.log("URL: ", this.rootUrl + '/buscarporetiqueta?data='+ data);
  return  this.http.get(this.rootUrl + '/BUSCARPORETIQUETA?data='+data, { headers: this.reqHeader } );
//  return  this.http.get('http://freeapp.ayudapyme.es/buscarporetiqueta?ID1=1&ID2=1&ID3=1', { headers: this.reqHeader });


  }
}
