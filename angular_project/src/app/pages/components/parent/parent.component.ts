import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../dataservice.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor(private dt:DataserviceService) { }

  check:boolean=true;
  data=[
    {title:"title1",desc:"vala nuhe",iswishlist:false},
    {title:"title2",desc:"vala kuade gala",iswishlist:false},
    {title:"title3",desc:"vala hebani",iswishlist:false},
    {title:"title4",desc:"vala kebe heba",iswishlist:false}
  ]
  ngOnInit(): void {

  }


}
