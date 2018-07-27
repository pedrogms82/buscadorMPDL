import { Component, OnInit } from '@angular/core';
import { UsuarioRegistroModel } from '../../../models/usuario.model';
import { UserService } from '../../../services/user/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { UsermenuComponent } from "../../../components/usermenu/usermenu.component";

@Component({
  selector: 'app-registro',
  templateUrl: '../../../views/register.html',
  styleUrls: ['./registro.component.css'],
  providers:[UserService,
             UsermenuComponent]
})
export class RegistroComponent implements OnInit {
  isLoginError : boolean = false;
  public UserReg :any;
  public dniColor ="";
  public emailColor ="";
  public ErrorValidacion:any ={
    "name" : 0,
    "email": 0,
    "cif" : 0,
    "pass" :0
  };

  constructor(private userService : UserService,
    private UsermenuComponent : UsermenuComponent,
    private router : Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }
  validarForm(name, eml, cif, pass){
    //Validaciones
    if(name.length===0){this.ErrorValidacion.name = 1;}
    // this.registro()

  }
  registro(name, eml, cif, pass ){
        console.log(this);
        // this.UserReg = new UsuarioRegistroModel(this.name, this.cif, this.eml, this.pass);

        this.ErrorValidacion.cif = 0;
        this.dniColor="";
        this.ErrorValidacion.email = 0;
        this.emailColor="";
        let dniValid = true;//this.checkNIF(cif);

        if(!dniValid) {alert("DNI/NIE No valido");}
        else{
        this.UserReg = new UsuarioRegistroModel(name, cif, eml, pass);

        let data = this.userService.registraUsuario(this.UserReg).subscribe(
        (data : any)=>{
          console.log(data);
          if (data.Errores){
                if (data.Dni) { this.ErrorValidacion.cif=1; this.dniColor="red";}
                if (data.Email) { this.ErrorValidacion.email = 1; this.emailColor="red";}
        }
          else if (data.token!=null) {

                        delete data.Errores;
                        delete data.Dni;
                        delete data.Email;
                        sessionStorage.setItem('dataUser',JSON.stringify(data));
                        this.pagePerfil();
                        this.pageRefresh();
                          }
        },
        (err : HttpErrorResponse)=>{
          console.log("Error", err)
        });
      }
  }

   checkNIF(nif) {
      nif = nif.toUpperCase().replace(/[\s\-]+/g, '');
      if(/^(\d|[XYZ])\d{7}[A-Z]$/.test(nif)) {
          let num = nif.match(/\d+/);
          num = (nif[0]!='Z'? nif[0]!='Y'? 0: 1: 2)+num;
          if(nif[8]=='TRWAGMYFPDXBNJZSQVHLCKE'[num%23]) {
              return /^\d/.test(nif)? 'DNI': 'NIE';
          }
      }
      else if(/^[ABCDEFGHJKLMNPQRSUVW]\d{7}[\dA-J]$/.test(nif)) {
          for(var sum=0,i=1;i<8;++i) {
              let num = nif[i]<<i%2;
              let uni = num%10;
              sum += (num-uni)/10+uni;
          }
          let c = (10-sum%10)%10;
          if(nif[8]==c || nif[8]=='JABCDEFGHI'[c]) {
              return /^[KLM]/.test(nif)? 'ESP': 'CIF';
          }
      }
      return false;
  }

  reload(){
    this.UsermenuComponent.reload();
  }
  pageRefresh() {
     location.reload();
  }
  pagePerfil() {
    this.router.navigate(['/perfil']);
  }

}
