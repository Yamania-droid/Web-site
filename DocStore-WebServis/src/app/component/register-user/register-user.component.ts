import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/httpservice/data.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

StatusRole:any;
password:any;
login:any;
  constructor(private productService: DataService) { }

  ngOnInit(): void {
  }



  Role(any:any){
this.StatusRole=any;
console.log(this.StatusRole)
  }



Login(any:any){
this.login=any;
console.log(this.login)
}


Password(any:any){
this.password=any;
console.log(this.password )
}


completeRegister(){
 this.productService.CreateUser(this.login,this.password,this.StatusRole)
 .subscribe((d)=>{
   console.log(d)
 })

location.replace('/admin-panel/account-logic')
}





}
