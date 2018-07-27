import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { UsermenuComponent } from "../../../components/usermenu/usermenu.component";
import { Location } from '@angular/common';


@Component({
  selector: 'app-sign-in',
  // templateUrl: './sign-in.component.html',
  templateUrl: '../../../views/login.html',
  styleUrls: ['./sign-in.component.css'],
  providers:[UserService,
             UsermenuComponent]
})
export class SignInComponent implements OnInit {
  isLoginError : boolean = false;
  constructor(private userService : UserService,
              private location: Location,
              private UsermenuComponent : UsermenuComponent,
              private router : Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  OnSubmit(userName,password){
    //  this.userService.userAuthentication(userName,password).subscribe((data : any)=>{
    //   localStorage.setItem('userToken',data.token);
    //   this.router.navigate(['/home']);
    // },
    // (err : HttpErrorResponse)=>{
    //   this.isLoginError = true;
    // });

    let data = this.userService.userAuthentication(userName.toUpperCase(),password).subscribe((data : any)=>{
      sessionStorage.setItem('dataUser',JSON.stringify(data));
      this.pagePerfil();
      this.pageRefresh();
    },
    (err : HttpErrorResponse)=>{
      console.log("Error", err)
      this.isLoginError = true;
    });
    // localStorage.setItem('userToken',datos.token);
    // localStorage.setItem('datosUsuario',datos);
    // localStorage.setItem('dataUser',data);

    //this.router.navigate(['/']);
  }
  Logout() {
    sessionStorage.removeItem('userToken');
    console.log("Remuevo token ", sessionStorage.getItem("userToken"));
    this.pageRefresh();
    this.router.navigate(['/home']);
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
