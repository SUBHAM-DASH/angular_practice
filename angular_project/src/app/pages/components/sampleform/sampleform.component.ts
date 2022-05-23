import { DailogComponent } from './../dailog/dailog.component';
import { Component, Input, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DataserviceService } from '../../dataservice.service';

@Component({
  selector: 'app-sampleform',
  templateUrl: './sampleform.component.html',
  styleUrls: ['./sampleform.component.scss']
})
export class SampleformComponent implements OnInit {

  formGroup!: FormGroup;

  formTracks!: FormGroup;

  disable: boolean = false;

  @Input() hide: any;

  array: any = [];

  arr: any = [];

  @ViewChild(DailogComponent) DailogComponent!: DailogComponent;
  constructor(
    private fb: FormBuilder,
    private _dataService: DataserviceService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      email: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      password: ['', Validators.required],
    })

    this.formTracks = this.fb.group({
      name: ['', Validators.required],
      role: ['', Validators.required]
    })


    if (this.hide) {
      this.disable = true;
      this.formGroup.patchValue({
        email: 'dashsubham@gmail.com',
        firstname: 'subham',
        lastname: 'dash',
        password: '1234'
      })
    }
  }


  getFormValue() {
    this.formGroup.value['data']=this.arr;
    this.array.push(this.formGroup.value);
    console.log(this.formGroup.value);
    this._dataService.saveUserInfo(this.formGroup.value)
  }

  getValueData() {
    console.log(this.formTracks.value);
    this.arr.push(this.formTracks.value);
    this.formTracks.reset();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DailogComponent, {
      height: '500px',
      width: '900px',
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }

}

