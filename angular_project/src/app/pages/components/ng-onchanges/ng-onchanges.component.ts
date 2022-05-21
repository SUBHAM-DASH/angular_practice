import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-ng-onchanges',
  templateUrl: './ng-onchanges.component.html',
  styleUrls: ['./ng-onchanges.component.scss']
})
export class NgOnchangesComponent implements OnInit,OnDestroy {
  @Input() data:any;
  @Input() val:any;
  constructor(){
    console.log("child constructer called");
  }
  ngOnInit(): void {
    console.log("child ngoninit called");
  }
  ngOnDestroy(): void {
    console.log("onDestroy works");
  }
}
