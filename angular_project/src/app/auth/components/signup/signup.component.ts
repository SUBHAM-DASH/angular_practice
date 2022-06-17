import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  formGroup!:FormGroup;
  loginMode:boolean = false;
  ngOnInit(): void {
    this.formGroup = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(4)]]
    })
  }

  onSubmit(){
    if(this.formGroup.valid){
      console.log(this.formGroup.value);
    }else{

    }
  }

  loginsignupMode(){
    this.loginMode = !this.loginMode;
  }
}
