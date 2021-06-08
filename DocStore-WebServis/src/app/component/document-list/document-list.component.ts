import { Component, OnInit } from '@angular/core';
import { DataService } from '../../httpservice/data.service';
import {MatDialog} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { TransfereService } from 'src/app/httpservice/transfere.service';
import * as _moment from 'moment';
import {catchError} from 'rxjs/operators';
import { throwError} from 'rxjs';
const moment = _moment;


@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  dateFormat = moment();
  statusSpiner:boolean=false;
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
  public totalPage:any;
  public statuspaginatorData:boolean=false;
  //data for get main JSon[]// 
  myjson:any=JSON;
  product: any;


  //data for http get sort//
  pageSizeOp:any;
  lengthValue:any;


 
  public displayedColumns: string[] = ['name','docType','certCode','issueDate','expirationDate','admin'];
  public dataSource: any; 
  
    constructor(private productService: DataService, public dialog: MatDialog,private route: ActivatedRoute, private transfer:TransfereService) {}
    ngOnInit() {
      this.statusSpiner=true;
      // запрос всех документов
      console.log("homepage init");
      this.productService.getDocuments(this.paginatorData.pageIndex + 1,this.paginatorData.pageSize)
      .subscribe( (p) => {
        console.log(p);
        
        this.dataSource = p.documents;
        this.totalPage=p.pageViewModel.totalPages
      });
      this.productService.getDocumentTypes()
      //запрос типов документов для сортировки
      .subscribe( (p) => {
        console.log('Filter post work'+p);
        this.types=p
        console.log( this.types);
        subtasks: [
          {name: this.types[0].docType, completed: false, color: 'primary'},]
      });
      setTimeout(()=>{
        this.statusSpiner=false;
      },0);
    //   catchError(err => {  
    //     console.log(err); 
    //     return throwError(err);
    // })
      
    } 
    //Собирает данные с пагинатора если они поменялись 
    getPaginatorData(event: PageEvent): PageEvent {
     this.paginatorDataRename=event
     this.statuspaginatorData=true
     this.statusData=true;
      console.log(event)
      this.productService.getDocuments(event.pageIndex + 1, event.pageSize)
          .subscribe( (m)=>{
            console.log(m);
            this.dataSource=m.documents
            ;})
      return event;
    }

    //Переход на карточку документа
    renderPage () {
    location.replace("/documents");
    console.log("render Page Work");
      
    }
    
    //берет вводимые данные с инпута для поиска
    tableFilter(value:any) {
      this.param=value;
      console.log(this.param);  
      this.statusFind=true
    } 
  //  Поиск по нажатию кнопки
findForClick () {

if (this.statusData==false) {
  this.superGetDataSort(1,10,this.status,this.issureDate,this.expirationDate,this.param)

  if (this.statusFind==false){
    this.superGetDataSort(1,10,this.status,this.issureDate,this.expirationDate,'%20') 
  }
}
else 
{
  this.superGetDataSort(this.paginatorDataRename.pageIndex+1,this.paginatorDataRename.pageSize,this.status,this.issureDate,this.expirationDate,this.param)
}
}



//берет id выбраного элемента в фильтре после чего делает запрос данных
setType(_argument:any){
  this.status=_argument.idType;

 
  
 if (this.statusData==true)
 {
  this.datType= this.transfer.getData()
  console.log(this.datType)
  console.log( this.paginatorData)
  this.superGetDataSort(this.paginatorDataRename.pageIndex+1,this.paginatorDataRename.pageSize,this.status,this.issureDate,this.expirationDate,this.param)
  
 }
 else {

console.log("Else")
  this.datType= this.transfer.getData()
  console.log(this.datType)
  console.log( this.paginatorData)
  this.superGetDataSort(1,10,this.status,this.issureDate,this.expirationDate,this.param)
 }

}
//Return date from date picker
inputEvent($event: { value: any; }){
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
totalPege(){
  return  this.totalPage
}


}
  
