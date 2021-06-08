
import { Injectable } from '@angular/core';



@Injectable({
    providedIn: 'root'
})
export class TransfereDataService {

private data:any;

constructor() { }

setData(data: any){
    this.data = data;
  }

  getData(){
    let temp = this.data;
    return temp;
  }

  clearData(){
    this.data = undefined;
  }

}