import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Document} from '../models/document.model';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { DocumentViewModel } from '../models/documentViewModel.model';
import { Product } from '../models/product.model';


@Injectable({
    providedIn: 'root'
   })

export class DataService{

    public url= environment.dewApi
    constructor(private http: HttpClient){}
 
    getDocuments(_argument1:any,_argument2:any): Observable<DocumentViewModel> {
        return this.http.get<DocumentViewModel>(this.url+'/documents/page='+_argument1+'&pageSize='+_argument2+'/');
   
    }
    GetSortData(_argument1:any,_argument2:any): Observable<Document[]> {
        return this.http.get<Document[]>(this.url+'/getdocumentsext/'+'page='+_argument1+'&pageSize='+_argument2);
       
      }

   findProducts(_searchQuery: any,_arguments:any,_argument1:any): Observable<Document[]> {
       return this.http.get<Document[]>(this.url+'/find/search='+_searchQuery+'&page='+_arguments+'&pagesize='+_argument1);
    }
    postDocument(name:any,docType:any,certCode:any,authorityCode:any,issueDate:any,expirationDate:any,docCode:any){
       const document={"name":name,"docType":docType,"file":[""],"certCode":certCode,"authorityCode":authorityCode,"issueDate":issueDate,"expirationDate":expirationDate,"formCode":" ","vendorName":" ","docCode":docCode,"deleted":false} 
       return this.http.post(this.url+'/documents', document)
}

// Методы работы с Аккаунтами модераторов//администраторов

NewUser(Id:any,argymentPass:any,argymentLogin:any,role:any){
const putUser={'idUser': Id, 'login': argymentLogin, 'password':argymentPass , 'role': role, 'deleted': false}
console.log("This is put data  "+putUser)
return this.http.put(this.url+"/users/"+Id,putUser)
}

BanUser(Id:any,argymentPass:any,argymentLogin:any,role:any){
    const banUser={idUser: Id, login:argymentLogin, password: argymentPass, role:role, deleted:true}
    return this.http.put(this.url+"/users/"+Id,banUser)  
}
UnBanUser(Id:any,argymentPass:any,argymentLogin:any,role:any){
    const banUser={idUser: Id, login:argymentLogin, password: argymentPass, role:role, deleted:false}
    return this.http.put(this.url+"/users/"+Id,banUser)  
}

CreateUser(login:any,password:any,role:any){
const newUser={ login:login, password: password, role:role, deleted:false}
return this.http.post(this.url+"/users/",newUser)
}
postUser(user:User){
    return this.http.post(this.url+'/users/authorize', user)
    
}
getAllModers(){
    return  this.http.get(this.url+"/users")  
}



// Методы работы с документами 
getDocumentTypes(): Observable<DocumentType[]> {
        console.log('Getting product from '+ this.url +' request runned..');
        return this.http.get<DocumentType[]>(this.url+'/documenttypes/');
}
getDocumentById(_arguments: any): Observable<Document> {
        console.log('Getting product witch id from '+ this.url +_arguments+' request runned..');
        return this.http.get<Document>(this.url+'/documents/'+_arguments);  
}

getDOcumentAlltypes(_argument1:any,_argument2:any,_argument3:any,_argument4:any,_argument5:any,_argument6:any): Observable<DocumentViewModel>{
        return this.http.get<DocumentViewModel>(this.url+'/find/documents/page='+_argument1+'&pagesize='+_argument2+'&'+_argument3+'&search='+_argument6+'&datesearchissue='+_argument4+'&datesearchexp='+_argument5);      
}
getSortDataDocumentWithTypeDoc(_argument1:any,_argument2:any,_argument3:any){
    return this.http.get<Document>(this.url+'/find/doctype='+_argument1+'&page='+_argument2+'&pagesize='+_argument3);
   
}
deleteDocument(_arguments:any){
    return this.http.delete(this.url+'/documents/'+_arguments);
 }
postDocumentForId(_argument1:any,_argument2:any,_argument3:any,_argument4:any,_argument5:any,_argument6:any,_argument7:any,_argument8:any,_argument9:any,_argument10:any,_argument11:any,_argument12:any,_argument13:any,_argument14:any,_argument15:any){
    const body={ idDoc:_argument1, name:_argument2, docType:_argument3, file:_argument4, certCode:_argument5, authorityCode:_argument6, authorityName:_argument7, issueDate:_argument8, expirationDate:_argument9, formCode:_argument10, vendorName:_argument11, docCode:_argument12, docTypeNavigation:_argument13, documentProducts:_argument14};
console.log(body)
    return this.http.put(this.url+'/documents/'+_argument1,body)    
    

}


   // Методы работы с продуктами
getAllProduct(_argument1:any,_argument2:any):Observable<Product>{
        return this.http.get<Product>(this.url+'/products/page='+_argument1+'&pageSize='+_argument2)
  }
findProduct(_search_:any,page:any,pagesize:any):Observable<Product>{

      return this.http.get<Product>(this.url+'/find/products/searchquery='+_search_+'&page='+page+'&pagesize='+pagesize)

      }

//методы работы с привязками Документ-Продукт
deleteBinding(_iddoc_:any,_idprod_:any){
    return this.http.delete(this.url+'/documentproducts/delete/iddoc='+_iddoc_+'&idproduct='+_idprod_)
}

postBinding(_docid_:any,_prodid_:any){
    const bindingBody ={"idDoc":_docid_,"idProduct":_prodid_.idProduct}
    return this.http.post(this.url+'/documentproducts', bindingBody)
}

//Методы работы с файлами
downoloadImage(img:any){
    const imgUrl = img;
    const imgName = imgUrl.substr(imgUrl.lastIndexOf('/.jpg') );
   return this.http.get(this.url+'/images/', {responseType: 'blob' as 'json'})
  }

}

