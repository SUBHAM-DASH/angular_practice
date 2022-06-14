import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/pages/dataservice.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {
  server="http://localhost:9000";
  constructor(private _dataSerice:DataserviceService) { }
  array:any;
  ngOnInit(): void {
    this._dataSerice.getEmployeeDetails().subscribe((res:any)=>{
      console.log(res);
      this.array=res.result;
    })
  }

}
