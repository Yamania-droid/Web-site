import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/httpservice/data.service';
import { TransfereService } from 'src/app/httpservice/transfere.service';

@Component({
  selector: 'app-d0wnoload-file',
  templateUrl: './d0wnoload-file.component.html',
  styleUrls: ['./d0wnoload-file.component.css']
})
export class D0wnoloadFileComponent implements OnInit {
public DocId:any;
public files:any;
public status:boolean=false;
  constructor( public trasfer:TransfereService, public dataService: DataService) { }

  ngOnInit(): void {
  this.DocId=this.trasfer.getData()
   console.log(this.DocId) 
    this.dataService.getDocumentById(this.DocId)
    .subscribe( (d)=>{  
      console.log(d)
    this.files=d
  console.log(this.files.document.file)



    });
  }

 

}
