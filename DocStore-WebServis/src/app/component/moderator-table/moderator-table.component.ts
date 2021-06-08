import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DataService } from 'src/app/httpservice/data.service';
import { TransfereService } from 'src/app/httpservice/transfere.service';
import { ModerDataWindowComponent } from '../moder-data-window/moder-data-window.component';
import { RegisterUserComponent } from '../register-user/register-user.component';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-moderator-table',
  templateUrl: './moderator-table.component.html',
  styleUrls: ['./moderator-table.component.css']
})
export class ModeratorTableComponent implements OnInit {
  error:any;
  public displayedColumns: string[] = ['login','status','role','button'];
  public dataSource: any; 
  statusSpiner:boolean=false;
  constructor(private productService: DataService,public dialog: MatDialog,private transfer:TransfereService) { }

  ngOnInit() {
    this.statusSpiner=true;
this.productService.getAllModers()
.subscribe( (p) => {

  this.dataSource = p;
  // const filterValue = (this.dataSource.id.target as HTMLInputElement).value;
  // this.dataSource.filter = filterValue.trim().toLowerCase();
  (error:any) => {
    this.error = error.message
    console.log(error)
    location.replace('')

}});

setTimeout(()=>{
  this.statusSpiner=false;
},0);
}

openChangeData(element:any){
  this.transfer.clearData
  this.transfer.setData(element)
  this.dialog.open(ModerDataWindowComponent)
  console.log(element)
}
letIdUser(userid:any){
console.log(userid)
}

BanUser(any:any){
this.productService.BanUser(any.idUser,any.password,any.login, any.role)
.subscribe((d)=>{
  console.log(d)
  this.productService.getAllModers()
  .subscribe( (p) => {
    this.dataSource = p
  })
})

}
UbBanUser(any:any){
  this.productService.UnBanUser(any.idUser,any.password,any.login, any.role)
  .subscribe((d)=>{
    console.log(d)
    this.productService.getAllModers()
    .subscribe( (p) => {
      this.dataSource = p
    })
  })
}


Register(){
  this.dialog.open(RegisterUserComponent)
}

}
