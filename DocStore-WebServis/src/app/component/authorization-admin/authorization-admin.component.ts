import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { DataService } from 'src/app/httpservice/data.service';
import {Md5} from 'ts-md5/dist/md5';
import { interval } from 'rxjs';

import {MatDialog} from '@angular/material/dialog';
import { style } from '@angular/animations';
import { AuthService } from 'src/app/auth.service/auth.service';


@Component({
  selector: 'app-authorization-admin',
  templateUrl: './authorization-admin.component.html',
  styleUrls: ['./authorization-admin.component.css']
})
export class AuthorizationAdminComponent {
  pass: string='' ; 
  Repasssave: string = '' 
  login: string = '' 
  mail: string = '' 
  userName: string = "";
  response: any;
  status:boolean=true;
  statusUser:any;
  HashPass:any="";
  private:string="certificateSBaTsystem"

      constructor(private http: HttpClient, private dataService:DataService,public dialog: MatDialog, private as:AuthService){}

    isLoggedIn():boolean{
    return this.as.isAuthenticated()
  }

      password (value: any) {
 
    //       const md5 = new Md5();
    // this.HashPass= md5.appendStr(value+this.private).end();

         this.HashPass=value 
         
          this.status=true
      }

  
      gmail (value: any) {
    
          this.mail=value
          this.status=true
      }

      getToken () {
        
      const user = {
        "login": this.mail,
        "password":  this.HashPass
      } 
      
     this.as.login(user)
    

      // if (this.status==true){
      //   this.status=false;
      //   this.dataService.postUser(user)
      //   .subscribe((t) => {
      //      console.log(t);
      //     this.statusUser=t;
      //    });
        //  if (this.statusUser=='true'){
        //   alert( 'Авторизация выполнена успешно, приятного пользования, '+ this.mail);
        //    location.replace('/admin-panel/auth_yes')
          
        //  }
        //  else{
        //   alert('Пароль или логин введены не верно попробуйте еще раз.');
        //  }

      //}
      

       
  }
  
}