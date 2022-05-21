import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DataserviceService } from '../../dataservice.service';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {

  constructor(private ds:DataserviceService) { }

  ngOnInit(): void {
    this.ds.obj.next("subham");
  }

}
