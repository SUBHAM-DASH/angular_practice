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

  ngOnInit(): void {
    this.dt.obj.subscribe((res)=>{
      console.log(res);

    })
  }


}
