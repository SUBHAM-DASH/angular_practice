import { DialogComponent } from './../dialog/dialog.component';
import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { config } from 'rxjs';
@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.scss'],
})
export class Table2Component implements OnInit {
  source = [
    { id: 1, name: 'subham', desable: false },
    { id: 2, name: 'kumar', desable: false },
    { id: 3, name: 'dash', desable: true },
  ];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  slideToggleChange(event: any, obj: any,index:any) {
    console.log(event);
    console.log("check 1");


    event.source.checked = obj.desable; // Force slide toggle with our value
    console.log("check 2");
    console.log(this.source);

    // Open confirmation dialog
    this.dialog
      .open(DialogComponent, {
        data: config,
      })
      .afterClosed()
      .subscribe((confirm: boolean) => {
        if (confirm === true) {
          // Do something
          console.log("check 3");
          this.source[index].desable = event.source.checked =! event.source.checked
          // event.source.checked = true;
          console.log(this.source);
        }
      });
  }
}
