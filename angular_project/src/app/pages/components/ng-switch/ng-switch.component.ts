import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.scss']
})
export class NgSwitchComponent implements OnInit {
  swichitem:any;
  constructor() { }

  ngOnInit(): void {
  }
  getValue(val:any){
    console.log(val.target.value);
    this.swichitem=val.target.value;
  }
}
