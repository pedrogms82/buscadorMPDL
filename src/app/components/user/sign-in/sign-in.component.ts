import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { UsermenuComponent } from "../../../components/usermenu/usermenu.component";
import { Location } from '@angular/common';



@Component({
  selector: 'app-sign-in',
   templateUrl: './sign-in.component.html',
  //templateUrl: '../../../views/login.html',
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

  public OnSubmit(userName,password){

    let data = this.userService.userAuthentication(userName.toUpperCase(),password).subscribe((data : any)=>{
console.log(data);
      sessionStorage.setItem('TdpToken',JSON.stringify(data.TdpToken));
      console.log(sessionStorage.getItem("TdpToken"));
      this.pageRefresh();
      this.pagePerfil();

    },
    (err : HttpErrorResponse)=>{
      console.log("Error", err)
      this.isLoginError = true;
    });

  }
  public Logout() {
    sessionStorage.removeItem('TdpToken');
    console.log("Remuevo token ", sessionStorage.getItem("TdpToken"));
    this.pageRefresh();
    this.router.navigate(['/home']);
  }
  public reload(){
    this.UsermenuComponent.reload();
  }
  public pageRefresh() { //Aqui deberiamos emitir un evento
     location.reload();
  }
  public pagePerfil() {
    this.router.navigate(['/perfil']);
  }
}
