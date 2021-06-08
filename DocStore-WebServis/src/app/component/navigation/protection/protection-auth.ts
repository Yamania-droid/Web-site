import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "src/app/auth.service/auth.service";


@Injectable({
    providedIn: 'root'
   })


export class AuthGuardAll implements CanActivate{
  //[x: string]: any;

constructor( private as:AuthService,private router:Router){}

    canActivate(): boolean {
       if(!localStorage.getItem('token')){
        return false 
        location.replace('/login')
        
        
       }
       else{
        return true 
       }
     
    } 

    adminRoleStatus():boolean{
if (localStorage.getItem('role')=='admin'){
return true
}
else{
    return false
}


    }

   
}