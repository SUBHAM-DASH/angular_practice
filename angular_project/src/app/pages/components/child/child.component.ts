import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }
  @ViewChild('id') element!:ElementRef;
  @Output() onClick:EventEmitter<any> = new EventEmitter<any>()
  ngOnInit(): void {
    console.log("child ngonit");
  }

  sendValue(){
    this.onClick.emit(this.element);
  }

}
