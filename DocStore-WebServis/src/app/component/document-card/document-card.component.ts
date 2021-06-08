import { Component, OnInit } from '@angular/core';
import { DataService } from '../../httpservice/data.service';
import { ActivatedRoute } from '@angular/router';
import { __values } from 'tslib';
import * as FileSaver from 'file-saver';
import * as fileSaver from 'file-saver';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-document-card',
  templateUrl: './document-card.component.html',
  styleUrls: ['./document-card.component.css']
})
export class DocumentCardComponent implements OnInit {




statusSpiner:boolean=false;
  Json:any=JSON;
  public pictures:any;
  public DocId: any;
  document: any;
  public displayedColumns: string[] = ['productName','productCode'];
  public dataSource: any;

   constructor(private route: ActivatedRoute,private dataService: DataService) {}
  
    ngOnInit(): void {
      this.statusSpiner=true;
      console.log("document-page init");
      const id = this.route.snapshot.paramMap.get('id');
      console.log(id);
      this.DocId = id ; 
      this.dataService.getDocumentById(this.DocId)
      .subscribe( (d)=>{  
        console.log(d)
      this.document= d;
      console.log('This doc'+this.document)
        this.dataSource=d.products;
     
      this.pictures=d.file
    
      // console.log(this.pictures.includes('.jpg'));
      // console.log(this.pictures.sort(comp )
      // if (this.pictures===".jpg"){}
      setTimeout(()=>{
        this.statusSpiner=false;
      },10);

      });
    }



    downloadPhoto(_arguments: any){


     
  console.log("Downoload start")
  this.dataService.downoloadImage(_arguments)
  .subscribe( (response:any) => 
  console.log(response)
  
  );

    


}





  }
  