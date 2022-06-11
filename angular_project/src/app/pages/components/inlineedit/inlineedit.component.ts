import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-inlineedit',
  templateUrl: './inlineedit.component.html',
  styleUrls: ['./inlineedit.component.scss']
})
export class InlineeditComponent implements OnInit {

  constructor() { }
  // fal=false;
  data=of([
    {name:"subham",roll:"34",mobile:"7978904202"},
    {name:"subham",roll:"34",mobile:"7978904202"},
    {name:"subham",roll:"34",mobile:"7978904202"},
    {name:"subham",roll:"34",mobile:"7978904202"},
    {name:"subham",roll:"34",mobile:"7978904202"},
    {name:"subham",roll:"34",mobile:"7978904202"},
  ])
  finaldata:any;
  ngOnInit(): void {

    // this.fal=true;
    this.data.subscribe((res)=>{
      this.finaldata=res;

      console.log(this.finaldata);

      this.finaldata.forEach((element:any)=> {
        element['isEdit']=false
      });
    })
  }
  closeForm(val:any){
    val.isEdit = false;
    console.log("cloxes");
  }

  editForm(val:any){
    val.isEdit = true;
    // this.fal=true;
  }
}
