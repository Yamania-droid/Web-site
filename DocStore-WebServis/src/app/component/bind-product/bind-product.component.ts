import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/httpservice/data.service';
import {MatDialog} from '@angular/material/dialog';
import { AdminDialogProductComponent } from '../admin-dialog-product/admin-dialog-product.component';
import { AdminDialogDocumentUpdateComponent } from '../admin-dialog-document-update/admin-dialog-document-update.component';
import { TransfereService } from 'src/app/httpservice/transfere.service';
import { TransfereDataService } from 'src/app/httpservice/transferData.service';
import {MatTableDataSource} from '@angular/material/table';
import { D0wnoloadFileComponent } from '../d0wnoload-file/d0wnoload-file.component';
import { max } from 'moment';
@Component({
  selector: 'app-bind-product',
  templateUrl: './bind-product.component.html',
  styleUrls: ['./bind-product.component.css']
})
export class BindProductComponent implements OnInit {

  pdfSrcc=[];
  srcResult:any;
  Json:any=JSON;
  statusSpiner:boolean=false;
  statueFile:boolean=false;
IDBind:any;  
public test:any;
public document:any;
public DocId:any;
public product:any;
public displayedColumns: string[] = ['productCode','productName','admin'];
public dataSource: any; 

  constructor(private route: ActivatedRoute,private dataService: DataService,public dialog: MatDialog, public trasfer:TransfereService, private dataTrans:TransfereDataService) {}

  ngOnInit(): void {
  //Загрузка нужного Document по редиректу(id) из admin-panel
  this.statusSpiner=true
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Id:'+id);
    this.DocId=id
    this.trasfer.setData(this.DocId)
    this.dataService.getDocumentById(this.DocId)
      .subscribe( (d)=>{  
        console.log(d)
        this.document=d;
        this.dataSource=d.products;
        const file=this.document.document.file
        
        if (this.document.document.file.length>1){
          this.statueFile=true
        }
        else{
          this.statueFile=false
        }
      });
      setTimeout(()=>{
        this.statusSpiner=false;
      },50);


    

 
    }
    NoData(){
      alert('Данный документ не содержит файлов. Обратитесь в поддержку!')
    }
  unbindProduct(_arguments:any){

   this.dataService.deleteBinding(this.DocId,_arguments.idProduct)
   .subscribe( (d)=>{ 
    this.dataService.getDocumentById(this.DocId)
    .subscribe( (d)=>{  
      this.document=d;
      this.dataSource = new MatTableDataSource(d.products);
  
    });
  
  });

  }

  openDialog(){
    this.trasfer.clearData()
    this.trasfer.setData(this.DocId)
     this.dialog.open(AdminDialogProductComponent);
  }

openUpdateDocument(){
  this.dialog.open(AdminDialogDocumentUpdateComponent)


}
deleteDoc(){
  this.dataService.deleteDocument(this.DocId)
  .subscribe( (d)=>{  
    this.test=d;
    location.replace("/admin-panel/auth")
  });

}
onFileSelected() {
  const inputNode: any = document.querySelector('#file');

  if (typeof (FileReader) !== 'undefined') {
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.srcResult = e.target.result;
    };

    reader.readAsArrayBuffer(inputNode.files[0]);
  }
}
OpedD0wnoloadFile(){
  this.trasfer.clearData()
  
  
  this.trasfer.setData(this.DocId)
  this.dialog.open(D0wnoloadFileComponent) 
}





}
