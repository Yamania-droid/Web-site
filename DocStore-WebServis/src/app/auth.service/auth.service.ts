import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DataService } from '../httpservice/data.service';
import jwt_decode from "jwt-decode";

export const ACCESS_TOKEN_KEY = ' '


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public tokenStatus:boolean=false;
  status:any;
  error: any;
  token:any;
  statusRole:boolean=false;
  
  constructor( private dataService:DataService, private jwtHelper:JwtHelperService, private router: Router) { }


  login(user:any){
return this.dataService.postUser(user)
.subscribe((d)=>{
this.token=d;

this.tokenStatus=true;

localStorage.setItem('token', this.token.token); 
localStorage.setItem('role', this.token.role); 
location.replace('admin-panel/auth_yes')

}, error =>{
  alert('Не верный логин или пароль')
});

  }


  isAuthenticated() {

return this.tokenStatus

//this.jwtHelper.isTokenExpired()++
    // var token = localStorage.getItem(ACCESS_TOKEN_KEY);
    // this.status=token && !this.jwtHelper.isTokenExpired(token)
    // return this.status
  }
  // isAuthenticatedModer() {
    
  //  if (this.token.role="admin"){
  //   this.statusRole=true;
  //   return this.statusRole
  //  }
  //   else{
  //     this.statusRole=false;
  //     return this.statusRole
  //   }
  // }

  logout(){
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    location.replace('/login')

  }


}
