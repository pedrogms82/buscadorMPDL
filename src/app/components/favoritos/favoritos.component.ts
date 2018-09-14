import { Component, OnInit } from '@angular/core';
//import { UserService } from '../../services/user/user.service';
import { RevistaApiService } from '../../services/revista-api.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
 providers:[RevistaApiService],
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  public userToken:any;
  public favoritos:any = [];

  constructor(private revistaApiService: RevistaApiService) { }

  ngOnInit() {
    //Recogemos el token
    if (sessionStorage.length===0) { console.log("Necesita registrarse");  }
    else {console.log("Logeado");
      this.userToken = JSON.parse(sessionStorage.getItem("TdpToken"));
      console.log(this.userToken);
    }
    //Buscamos los favoritos
    this.showArticulo();
  }


  public showArticulo(){
    this.revistaApiService.getFavoritosCliente(this.userToken)
        .subscribe(
          result => {
            this.favoritos = result;
            console.log("Resultado HTML", this.favoritos)
          },
          error => {
            console.log("Error", error)
          }
        );
  }
}
