import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/httpservice/data.service';
import { TransfereService } from 'src/app/httpservice/transfere.service';

@Component({
  selector: 'app-moder-data-window',
  templateUrl: './moder-data-window.component.html',
  styleUrls: ['./moder-data-window.component.css']
})
export class ModerDataWindowComponent implements OnInit {
newPass:any;
newLog:any;
usersData:any;
  constructor(private dataServise:DataService,private transfer:TransfereService) { }

  ngOnInit(): void {
 this.usersData=this.transfer.getData()
 this.transfer.clearData()
 console.log(this.usersData)
  }

getNewUser(){
  this.dataServise.NewUser(this.usersData.idUser, this.newPass,this.newLog,this.usersData.role)
  .subscribe((d)=>{
    console.log(d)
  })
}

getNewPassData(any:any){
this.newPass=any

}

getNewLogin (any:any){
this.newLog=any
}

}
