import { Component, OnInit } from '@angular/core';
import { CalendarCellViewModel } from 'ngx-bootstrap/datepicker/models';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  constructor() {
  }
  ngOnInit(): void {

  }
  // onOpenCalendar(container:any) {
  //   console.log(container);
    // container.setViewMode('year');
    // container.yearSelectHandler = (event: CalendarCellViewModel): void => {
    // container.value =  event.date;
    // console.log(this.modelDate);

    // return
    // container.monthSelectHandler = (event: any): void => {
    //   container._store.dispatch(container._actions.select(event.date));
    // };
    // container.setViewMode('year');
  // }
  getValue(val:any){
    console.log(val);
  }
}
// function ViewChild(arg0: string) {
//   throw new Error('Function not implemented.');
// }

