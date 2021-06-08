import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/httpservice/data.service';
import { TransfereService } from 'src/app/httpservice/transfere.service';

@Component({
  selector: 'app-admin-dialog-product',
  templateUrl: './admin-dialog-product.component.html',
  styleUrls: ['./admin-dialog-product.component.css']
})
export class AdminDialogProductComponent implements OnInit {


  public startPaginatorData={previousPageIndex: 0, pageIndex: 1, pageSize: 10, length: 100};
  public modifiedData:any;
  public displayedColumns: string[] = ['docType','certCode','binding'];
  public dataSource: any; 
  public idDoc:any;
  public findData:any;
  public totalPage:any;
  public DocId:any;
  constructor(private dataService:DataService,public trasfer:TransfereService) { }

  ngOnInit() {
    this.dataService.getAllProduct(this.startPaginatorData.pageIndex,this.startPaginatorData.pageSize, )
    .subscribe( (d)=>{  
    this.dataSource=d.products;
    this.totalPage=d.pageViewModel.totalPages;
    console.log(this.dataSource);
    });

  }

  getPaginatorData($event:any){
   this.modifiedData= console.log($event)

   this.dataService.getAllProduct($event.pageIndex+1,$event.pageSize)
   .subscribe( (d)=>{  
     console.log("This is sort product ---> " + d)
    this.dataSource=d.products;
    });
  }


  bindingSET($event:any){
    this.idDoc=this.trasfer.getData()
    this.dataService.postBinding(this.idDoc,$event)
    .subscribe((d)=>{
      console.log(d)
      // this.dataSource.data=this.dataSource.data.filter(row=>row!$event.select(row))
    })
  }

serchData($event:any){
this.findData=$event

}
findForClick(){
  this.dataService.findProduct(this.findData,this.startPaginatorData.pageIndex,this.startPaginatorData.pageSize)
  .subscribe((d)=>{
    console.log(d)
    this.dataSource=d
  })
}


getDocId(){
  this.DocId=this.trasfer.getData()
 location.replace('/admin-panel/bind-product/'+this.DocId)
}


}
