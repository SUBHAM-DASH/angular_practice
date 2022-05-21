import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent-ng-on-changes',
  templateUrl: './parent-ng-on-changes.component.html',
  styleUrls: ['./parent-ng-on-changes.component.scss']
})
export class ParentNgOnChangesComponent implements OnInit {

  inputProperty:any;
  val:boolean=false
  constructor() {
    console.log("parent constructor called")
  }

  ngOnInit(): void {
    console.log("parent ngonint is called");
  }

  getChanges(){
    console.log(this.inputProperty);
    this.val =! this.val;
  }
}
