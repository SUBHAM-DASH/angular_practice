import { ControlContainer, FormBuilder, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class CustomInputComponent implements OnInit {
  formGroup!: FormGroup;
  @Input() field!: any;
  constructor(private fb: FormBuilder, private ctrlContainer: FormGroupDirective) { }


  ngOnInit(): void {
    // console.log(this.field);
    this.formGroup = this.ctrlContainer.form;
    let control = new FormControl('');
    this.formGroup.addControl(this.field.name,control);
  }
}
