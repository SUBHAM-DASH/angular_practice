import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  gpsPushDataSend = new Subject();
  orderDataSend = new Subject();
  tokenDataSend = new Subject();

  constructor(private http:HttpClient) { }
  getToken(){
    return this.http.get("http://localhost:9000/api/totaltoken");
  }

  getOrders(){
    return this.http.get("http://localhost:9000/api/totalorder");
  }

  getGpsPush(){
    return this.http.get("http://localhost:9000/api/totalgpspush");
  }

  //yearDetails
  yearDetails(data:any){
    return this.http.post("http://localhost:9000/api/yeardetails",data);
  }

  //monthAndyearDetails
  monthAndyearDetails(data:any){
    return this.http.post('http://localhost:9000/api/monthyeardetails',data);
  }

  //formANDtoDetails
  fromAndToDetails(data:any){
    return this.http.post("http://localhost:9000/api/fromandtodetails",data);
  }

  //todayDetails
  todayDetails(data:any){
    return this.http.post("http://localhost:9000/api/todaydetails",data);
  }
}
