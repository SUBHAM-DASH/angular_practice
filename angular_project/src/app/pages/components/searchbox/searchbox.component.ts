import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../dataservice.service';
@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent implements OnInit {
  name:any;
  constructor(private dataService:DataserviceService) { }

  ngOnInit(): void {
  }
  getSearchValue(){
    this.dataService.getSearchdata(this.name).subscribe((res)=>{
      console.log(res);

    })
  }
}
