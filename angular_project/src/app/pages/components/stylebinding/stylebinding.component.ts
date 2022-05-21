import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.scss']
})
export class StylebindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  changeStyle(){
    // this.mystyle=!this.mystyle;
  }
  // allStyle={
  //   'background':'green',
  //   'margin-left':'200px',
  //   'border':'4px'
  // }
}
