import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sampleform',
  templateUrl: './sampleform.component.html',
  styleUrls: ['./sampleform.component.scss']
})
export class SampleformComponent implements OnInit {

  formGroup!:FormGroup;

  formField:any[]=[
    {
      email:{
        label:'Email',
        inputType:'email',
        placeholder:'Eamil',
        name:'email',
        validations:[
          {
            name:"required",
            validator:Validators.required,
            message:'email is required'
          }
        ]
      }
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
