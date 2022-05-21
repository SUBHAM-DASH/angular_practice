import { DataserviceService } from './../../dataservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  constructor(private _dataService:DataserviceService) { }
  data:any=[];
  p:any;
  ngOnInit(): void {
    this.getData()
  }
  getData(){
    this._dataService.getData().subscribe((res)=>{
      console.log(res);
      this.data=res;
    })
  }
}
