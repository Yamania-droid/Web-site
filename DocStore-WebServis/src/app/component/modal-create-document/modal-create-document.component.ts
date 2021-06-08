import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/httpservice/data.service';

@Component({
  selector: 'app-modal-create-document',
  templateUrl: './modal-create-document.component.html',
  styleUrls: ['./modal-create-document.component.css']
})
export class ModalCreateDocumentComponent implements OnInit {
name:any=""
docType:any=""
certCode:any=""
authorityCode:any=""
issueDate:any=""
expirationDate:any=""
docCode:any=""


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  saveChange(){
this.dataService.postDocument(this.name,this.docType,this.certCode,this.authorityCode,this.issueDate,this.expirationDate,this.docCode)
.subscribe((d)=>{
console.log(d)
})
  }


  getName(name:any){
this.name=name
  }
  getDocType(docType:any){
this.docType=docType
  }
  getCertCode(certCode:any){
this.certCode=certCode
  }
  getAuthorityCode(authorityCode:any){
this.authorityCode=authorityCode
  }
  getIssueDate(issueDate:any){
this.issueDate=issueDate
  }
  getExpirationDate(expirationDate:any){
this.expirationDate=expirationDate
  }
  getDocCode(docCode:any){
this.docCode=docCode
  }

}
