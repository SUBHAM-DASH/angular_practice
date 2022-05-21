import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.scss']
})
export class EventbindingComponent implements OnInit {

  constructor() { }

  msg:string='';

  ngOnInit(): void {
  }

  onGetValue(event:any){
    this.msg=event;
    console.log(this.msg);
  }
}
