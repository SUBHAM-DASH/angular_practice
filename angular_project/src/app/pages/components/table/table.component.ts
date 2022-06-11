import { FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataserviceService } from '../../dataservice.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  barcodeSearch:any;
  albumSearch:any;
  artistSearch:any;
  priceSearch:any;
  dateSearch:any
  dummyData:any=[]
  constructor(private _dataservice:DataserviceService) {}

  ngOnInit(): void {
    this._dataservice.getDetails().subscribe((res:any)=>{
      console.log(res);
      this.dummyData = res.result
    })
  }

}
