import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formvalidation',
  templateUrl: './formvalidation.component.html',
  styleUrls: ['./formvalidation.component.scss']
})
export class FormvalidationComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  formGroup!:FormGroup;
  ngOnInit(): void {
    this.formGroup=this.fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      skill:this.fb.group({
        skillname:['',[Validators.required]],
        department:['',[Validators.required]]
      })
    })
  }
  getValue(){
    console.log(this.formGroup.value);
  }
}
