import { FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataserviceService } from '../../dataservice.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  array = [
    { id: 1, name: 'subham', gmail: 'dash@gmail.com', roll: 34, select: true },
    {
      id: 2,
      name: 'kumar',
      gmail: 'kumar@gmail.com',
      roll: 45,
      select: true,
    },
    { id: 3, name: 'dash', gmail: 'da1@gmail.com', roll: 43, select: false },
    { id: 4, name: 'jitu', gmail: 'jitu23@.com', roll: 3, select: false },
  ];

  constructor(private _dataservice: DataserviceService) {}
  check: any;
  ngOnInit(): void {}
  class = {};
  onSelect(event:any, i: any) {
    console.log(event.target.checked,i);
    this.check = event.target.checked ? i : undefined;
  }
}
