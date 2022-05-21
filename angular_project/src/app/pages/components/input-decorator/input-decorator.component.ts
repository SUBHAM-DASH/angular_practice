import { CustomInputComponent } from './../../../shared/components/custom-input/custom-input.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-decorator',
  templateUrl: './input-decorator.component.html',
  styleUrls: ['./input-decorator.component.scss'],

})
export class InputDecoratorComponent implements OnInit {
  formGroup!:FormGroup;
  constructor(private fb:FormBuilder) {}

  ngOnInit(): void {
    this.formGroup=this.fb.group({ })
  }

  field:any[]=[
    {
      inputType:'text',
      label:'FirstName...',
      name:'firstname',
      placeholder:'first name'
    },
    {
      inputType:'text',
      label:'LastName...',
      name:'lastname',
      placeholder:'last name'
    },
  ]
  getData(){
    console.log(this.formGroup.value);

  }
}
