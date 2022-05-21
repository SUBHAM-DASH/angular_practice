import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent implements OnInit {

  data:string='off';

  @ViewChild('box1') box1!:ElementRef;
  @ViewChild('box2') box2!:ElementRef;

  constructor() { }

  ngOnInit():  void {

  }

  getValue(val:any){
    console.log(val.target.value);
  }
}
