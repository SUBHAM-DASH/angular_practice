import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.scss']
})
export class ClassbindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  changeClass(){
    this.myClass.class1=!this.myClass.class1;
  }
  myClass={
    class1:true,
    class2:false,
    class3:false
  }

}
