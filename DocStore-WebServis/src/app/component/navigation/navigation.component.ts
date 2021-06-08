import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service/auth.service';
import { AuthGuardAll } from './protection/protection-auth';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private as:AuthGuardAll, private auth:AuthService) { }

  ngOnInit(): void {

    
  }


   isLoggedIn():boolean{
    //console.log("Status login"+ this.as.canActivate())
    return this.as.canActivate()
  }

  isLoggedInModerator():boolean{
return this.as.adminRoleStatus()
}
logout(){
  localStorage.removeItem('token')
  localStorage.removeItem('role')
  location.replace('/login')
}

}
