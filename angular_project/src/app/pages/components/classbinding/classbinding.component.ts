import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.scss'],
})
export class ClassbindingComponent implements OnInit {
  formGroup!: FormGroup;

  field: any[] = [
    {
      type: 'text',
      placeholder: 'firstname',
      formControlName: 'firstname',
    },
    {
      type: 'text',
      placeholder: 'lastname',
      formControlName: 'lastname',
    },
    {
      type: 'text',
      placeholder: 'email',
      formControlName: 'email',
    },
    {
      type: 'select',
      formControlName: 'course',
      name: 'course',
    },
  ];

  courses = [
    { id: 1, name: 'html' },
    { id: 2, name: 'css' },
    { id: 3, name: 'javascript' },
    { id: 4, name: 'angular' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      course:['',[Validators.required]]
    });
  }
  onSubmit() {
    console.log(this.formGroup.value);
  }
}
