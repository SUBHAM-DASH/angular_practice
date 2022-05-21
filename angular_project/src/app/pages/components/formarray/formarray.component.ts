import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.scss']
})
export class FormarrayComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  formgroup!: FormGroup;
  ngOnInit(): void {
    this.formgroup=this.fb.group({
      firstname:['',Validators.required],
      details:this.fb.group({
        lastname:['',Validators.required],
        email:['',Validators.required]
      })
    })
  }

  getValue() {
    console.log(this.formgroup.value);

    //formarray using make a form


    // const formArray = new FormArray([
    //   new FormControl('subham', Validators.required),
    //   new FormGroup({
    //     mobile: new FormControl('7978904202', Validators.required)
    //   }),
    //   new FormArray([])
    // ])

    // for (const control of formArray.controls) {
    //   if(control instanceof FormControl){
    //     console.log("control of formControl");
    //   }
    //   if(control instanceof FormGroup){
    //     console.log("control of FormGroup");
    //   }
    //   if(control instanceof FormArray){
    //     console.log("control of formArray");
    //   }
    // }

    //formarray using method how to do it

    // const formArray = this.fb.array([
    //   new FormControl('subham',Validators.required),
    //   new FormControl('dash',Validators.required),
    //   new FormControl('email',Validators.required)
    // ]);
    // formArray.push(new FormControl('7978904202',Validators.required))
    // console.log(formArray.value);

    //formgroup using make a method how to do it

    // const formGroup=this.fb.group([
    //   new FormControl('subham',Validators.required),
    //   new FormControl('dash',Validators.required),
    //   new FormControl('dashsubham095@gmail.com',Validators.required)
    // ])
    // console.log(formGroup.value);
    // console.log(formGroup);
  }

}
