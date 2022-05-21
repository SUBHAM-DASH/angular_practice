import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http:HttpClient) { }
  url='http://localhost:4000/api/products/searchProduct?name=';

  getSearchdata(data:any){
    return this.http.get(this.url+`${data}`);
  }

  getData(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
  obj=new Subject();
  data=[
    {name:"subham",mobile:797890504202},
    {name:"kumar",mobile:79883838333},
    {name:"raja",mobile:72863737383}
  ]
}
