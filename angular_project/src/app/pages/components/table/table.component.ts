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
  showData = true;
  data:any
  constructor(private _dataservice:DataserviceService) {}

  ngOnInit(): void {
    this._dataservice.getDetails().subscribe((res:any)=>{
      console.log(res);
      this.dummyData = res.result
    })
  }

  selectedData(data:any,id:any){
    // console.log(data);
    console.log(id);
    this.showData = false;
    this.data = data;
  }

  isFeature(data:any,id:any){
    console.log(data);
  }

  getDetails(data:any,id:any){
    console.log(data);
    console.log(id);
  }
}
