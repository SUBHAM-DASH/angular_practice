import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss']
})
export class CustomCardComponent implements OnInit {

  @Input() refdata!:TemplateRef<any>;
  constructor() { }

  ngOnInit(): void {

  }

}
