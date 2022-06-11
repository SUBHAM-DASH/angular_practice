import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:4000/api/products/searchProduct?name=';
  url2 = 'http://localhost:4000/api/newuserdetails';
  url3 = 'http://localhost:9000/api/getDetails';

  saveUserInfo(data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'application/json; charset=utf-8'
      }),
      responseType: 'text' as 'json'
    };
    return this.http.post(this.url2, data);
  }


  getDetails(){
    return this.http.get(this.url3);
  }


  getSearchdata(data: any) {
    // return this.http.post(this.url + `${data}`);
    return this.http.post("http://localhost:9000/api/getsearchdetail",data)
  }

  getData() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
  obj = new Subject();
  data = [
    { name: "subham", mobile: 797890504202 },
    { name: "kumar", mobile: 79883838333 },
    { name: "raja", mobile: 72863737383 }
  ]


}
