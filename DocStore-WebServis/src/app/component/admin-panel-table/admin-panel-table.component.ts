import { Component, OnInit } from '@angular/core';
import { DataService } from '../../httpservice/data.service';
import {MatDialog} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

import { TransfereService } from 'src/app/httpservice/transfere.service';

import * as _moment from 'moment';

const moment = _moment;

// import {AfterViewInit, ViewChild} from '@angular/core';
// import {MatPaginator} from '@angular/material/paginator';
// import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ModalCreateDocumentComponent } from '../modal-create-document/modal-create-document.component';





@Component({
  selector: 'app-admin-panel-table',
  templateUrl: './admin-panel-table.component.html',
  styleUrls: ['./admin-panel-table.component.css'],

})

export class AdminPanelTableComponent implements OnInit {
  dateFormat = moment();
  
  public setTypeValue:any;
  public status:any='0';
  public date:any;
  types:any=[];
  public datType:any;
  public paginatorData={previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: 100};
  public paginatorDataRename:any;
  public statusData:boolean=false;
  public statusFind:boolean=false;
  public issureDate:any='%20';
  public expirationDate:any='%20';
  public param: any='%20'; 
  public valueDoc:any;
  statusSpiner:boolean=false;
  totalPages:any;
  statusFiltyres:boolean=false;
  //data for get main JSon[]// 
  myjson:any=JSON;
  product: any;


  //data for http get sort//
  pageSizeOp:any;
  lengthValue:any;
err:any;

 statusFilt:boolean=false
  public displayedColumns: string[] = ['name','docType','certCode','issueDate','expirationDate','admin_panel'];
  public dataSource: any; 
  
    constructor(private productService: DataService, public dialog: MatDialog,private route: ActivatedRoute, private transfer:TransfereService) {}
    ngOnInit() {
      this.statusSpiner=true;
      // запрос всех документов

      this.productService.getDocuments(this.paginatorData.pageIndex + 1,this.paginatorData.pageSize)
  
      .subscribe( (p) => {
        this.product = p
        this.dataSource = p.documents
        this.totalPages=p.pageViewModel.totalPages
        
      });
     //запрос типов документов для сортировки
      this.productService.getDocumentTypes()
      .subscribe( (p) => {
        this.types=p
    
        subtasks: [
          {name: this.types[0].docType, completed: false, color: 'primary'},]
      });
      
      setTimeout(()=>{
        this.statusSpiner=false;
      },150);

    } 
    //Собирает данные с пагинатора если они поменялись 
    public getPaginatorData(event: PageEvent): PageEvent {
     this.paginatorDataRename=event
     this.statusData=true;
     
      this.productService.getDocuments(event.pageIndex + 1, event.pageSize)  
      .subscribe( (m)=>{
            console.log(m)
            this.dataSource=m.documents
            })
      
      return event;
    }

    //Переход на карточку документа
    renderPage () {
    location.replace("/documents")
      
    }
    
    //берет вводимые данные с инпута для поиска
    tableFilter(value:any) {
      this.param=value;
      this.statusFind=true
    } 
  //  Поиск по нажатию кнопки
findForClick () {
if (this.statusData==false ) {
  this.superGetDataSort(1,10,this.status,this.issureDate,this.expirationDate,this.param)
  if (this.statusFind==false){
    this.superGetDataSort(1,10,this.status,this.issureDate,this.expirationDate,"%20")
  }
}

else 
{
  this.superGetDataSort(this.paginatorDataRename.pageIndex+1,this.paginatorDataRename.pageSize,this.status,this.issureDate,this.expirationDate,this.param)
  if (this.statusFind==false){
    this.superGetDataSort(this.paginatorDataRename.pageIndex+1,this.paginatorDataRename.pageSize,this.status,this.issureDate,this.expirationDate,"%20")
  }

}
}



//берет id выбраного элемента в фильтре после чего делает запрос данных
setType(_argument:any){
  this.status=_argument.idType;
  this.transfer.setData(this.status)
 this.statusFilt=true
  
 if (this.statusData==false)
 {
  console.log("Else")
  this.datType= this.transfer.getData()
  this.superGetDataSort(1,10,this.status,this.issureDate,this.expirationDate,this.param)
  
 }
 else {
  this.datType= this.transfer.getData()
  this.superGetDataSort(this.paginatorDataRename.pageIndex+1,this.paginatorDataRename.pageSize,this.status,this.issureDate,this.expirationDate,this.param)
 }

}
// удаление связи | работает|
deleteDocument(_arguments:any){
  console.log(_arguments.idDoc)
   this.productService.deleteDocument(_arguments.idDoc)
   .subscribe( (a) => {
    console.log(a);
  
    if (!this.statusData ){
      this.productService.getDocuments(1,10)
      .subscribe( (p) => {
        console.log(p);
        this.dataSource = new MatTableDataSource(p.documents);
      });
    }
    else{
    
      this.productService.getDocuments(this.paginatorDataRename.pageIndex+1,this.paginatorDataRename.pageSize)
        .subscribe( (p) => {  
          console.log(p);
        this.dataSource = new MatTableDataSource(p.documents);
      
        });
    }
  });
console.log(this.statusData)

  
  
 

}
//Return date from date picker
inputEvent($event: { value: any; }){
  this.statusFilt=true
  this.dateFormat=moment($event.value)
  this.issureDate=this.dateFormat.format('YYYY-MM-DD');
  console.log(this.issureDate )

  if(this.statusData==false){
    this.superGetDataSort(1,10,this.status,this.issureDate,this.expirationDate,this.param)
  }
  else{
    this.superGetDataSort(this.paginatorDataRename.pageIndex+1,this.paginatorDataRename.pageSize,this.status,this.issureDate,this.expirationDate,this.param)
  }
 
}
changeEvent($event: { value: any; }){
  this.statusFilt=true
  this.dateFormat=moment($event.value)
  this.expirationDate= this.dateFormat.format('YYYY-MM-DD');
  console.log(this.expirationDate)
  if(this.statusData==false){
    this.superGetDataSort( 1,10,this.status,this.issureDate,this.expirationDate,this.param)
  }
  else{
    this.superGetDataSort(this.paginatorDataRename.pageIndex + 1,this.paginatorDataRename.pageSize,this.status,this.issureDate,this.expirationDate,this.param)
  } 
 
}

superGetDataSort(_argument1:any,_argument2:any,_argument3:any,_argument4:any,_argument5:any,_argument6:any){
  this.productService.getDOcumentAlltypes(_argument1,_argument2,_argument3,_argument4,_argument5,_argument6)
  .subscribe( (a) => {
    console.log(a);
    this.dataSource = a.documents;
  });

}
openAddDoc(){

  this.dialog.open( ModalCreateDocumentComponent)
}
OffFilture(){
  this.productService.getDocuments(this.paginatorData.pageIndex + 1,this.paginatorData.pageSize)
      .subscribe( (p) => {
        this.statusFilt=false
        this.dataSource = p.documents;
        
      });
}

totalPage(){
return this.totalPages
}

}