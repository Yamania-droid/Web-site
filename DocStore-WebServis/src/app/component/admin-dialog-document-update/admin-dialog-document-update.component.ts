
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/httpservice/data.service';
import { TransfereDataService } from 'src/app/httpservice/transferData.service';
import { TransfereService } from 'src/app/httpservice/transfere.service';
//import { BindProductComponent } from '../bind-product/bind-product.component';



@Component({
  selector: 'app-admin-dialog-document-update',
  templateUrl: './admin-dialog-document-update.component.html',
  styleUrls: ['./admin-dialog-document-update.component.css']
})
export class AdminDialogDocumentUpdateComponent implements OnInit {
DocId:any;

  public document: any;
  public authorityName:any;
  public certCode:any;
  public docCode:any;
  public docType:any;
  public docTypeNavigation:any;
  public issueDate:any;
  public expirationDate:any;
  public name:any;
  constructor(private route: ActivatedRoute,private dataService: DataService, private transfer:TransfereService, private dataTrans:TransfereDataService) { }

  ngOnInit(): void {
   this.DocId= this.transfer.getData()
    console.log('DocId from parent component '+this.DocId)

    this.dataService.getDocumentById(this.DocId)
    .subscribe( (d)=>{  
      this.document=d;
      console.log (d)
      this.authorityName=this.document.document.authorityName
      this.name=this.document.document.name
      this.docType=this.document.document.docType
      this.certCode=this.document.document.certCode
      this.issueDate=this.document.document.issueDate
      this.expirationDate=this.document.document.expirationDate
      this.docCode=this.document.document.docCode
     

    });
  }

//делает post с новыми данными
  saveChange(){
    console.log("Save is complete")
this.dataService.postDocumentForId(this.document.document.idDoc,this.name,this.docType,this.document.document.file,this.certCode,this.document.document.authorityCode,this.authorityName,this.issueDate,this.expirationDate,this.document.document.formCode,this.document.document.vendorName,this.docCode,this.document.document.docTypeNavigation,this.document.document.documentProducts,this.document.products)
.subscribe( (d)=>{  
  this.document=d;
  console.log (d)

});
this.dataService.getDocumentById(this.DocId)
    .subscribe( (d)=>{  
      this.dataTrans.setData(d)
    });

location.replace('/admin-panel/bind-product/'+this.DocId)
  }


//методы получения value из input
  getAuthorityName(event:any){
this.authorityName=event
  }
  getCertCode(event:any){
this.certCode=event;
  }
  getDocCode(event:any){
this.docCode=event;
  }
  getDocType(event:any){
this.docType=event;
  }
  getDocTypeNavigation(event:any){
this.docTypeNavigation=event;
  }
  getIssureDate(event:any){
this.issueDate=event;
  }
  getExpirationDate(event:any){
this.expirationDate=event;
  }
  getName(event:any){
this.name=event;
  }



}
