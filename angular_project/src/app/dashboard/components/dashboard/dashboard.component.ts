import { Component, OnInit } from '@angular/core';
import { MonthWeekdayFn } from 'moment';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  currentDate = new Date();
  year:any;
  month:any;
  from:any;
  to:any;
  showToday:boolean = true;

  //data emit
  gpsData:any;
  orderData:any;
  tokenData:any;

  minDate = new Date(this.currentDate.setFullYear(this.currentDate.getFullYear() - 10));
  maxDate = new Date(this.currentDate.setFullYear(this.currentDate.getFullYear()+ 10));
  constructor(private _dashboard:DashboardService) {}

  ngOnInit(): void {
    //for gps push
    this._dashboard.getGpsPush().subscribe((res:any)=>{
      this.gpsData = res.result;
      // console.log(res.result);
      this._dashboard.gpsPushDataSend.next(res.result);
    });

    //for order details
    this._dashboard.getOrders().subscribe((res:any)=>{
      this.orderData = res.result;
      // console.log(res.result);
      this._dashboard.tokenDataSend.next(res.result);
    })

    //for token details
    this._dashboard.getToken().subscribe((res:any)=>{
    this.tokenData = res.result;
      // console.log(res.result);
      this._dashboard.orderDataSend.next(res.result);
    })
  }

  getInputValue(){
    if(this.year){
      // console.log(this.year);
      this._dashboard.yearDetails({year:this.year}).subscribe((res:any)=>{
        console.log(res);
      })
      this.year=null;
    }else if(this.month){
      // console.log(this.month);
      this._dashboard.monthAndyearDetails({monthAndyear:this.month}).subscribe((res:any)=>{
        console.log(res);
      })
      this.month = null;
    }else if(this.from && this.to){
      // console.log(this.from,this.to);
      this._dashboard.fromAndToDetails({from:this.from,to:this.to}).subscribe((res:any)=>{
        console.log(res);
      })
      this.from = null;
      this.to = null;
    }
  }

  showTodayDate(){
    // console.log(this.currentDate);
    this._dashboard.todayDetails({date:this.currentDate}).subscribe((res:any)=>{
      console.log(res);
    })
    this.showToday = false;
  }
}
