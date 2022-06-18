import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private _auth: AuthService
  ) { }
  formGroup!: FormGroup;
  loginMode: boolean = false;
  ngOnInit(): void {
    this.formGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    })
  }

  onSubmit() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
      this._auth.signUp(this.formGroup.value).subscribe((res:any)=>{
        console.log(res);
      })
    } else {

    }
  }

  loginsignupMode() {
    this.loginMode = !this.loginMode;
  }
}
