import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataserviceService } from '../../dataservice.service';

@Component({
  selector: 'app-tryform',
  templateUrl: './tryform.component.html',
  styleUrls: ['./tryform.component.scss']
})
export class TryformComponent implements OnInit {
  formGroup!: FormGroup;
  fileUpload:any;
  imageUrl:any;
  constructor(private fb: FormBuilder,private _dataService:DataserviceService) { }

  ngOnInit(): void {

    this.formGroup=this.fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      cpassword:['',Validators.required],
      albumimage:['',Validators.required]
    })
  }
  getImage(file:any){
    console.log(file.target.files[0]);

    this.fileUpload = file.target.files[0];
    this.formGroup.value['albumimage'] = file.target.files[0].name;
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileUpload);
  }
  onSubmitDetails(){
    let formData = new FormData();
    formData.append('Image',this.fileUpload,this.fileUpload.name);
    formData.append('firstname',this.formGroup.value['firstname']);
    formData.append('lastname',this.formGroup.value['lastname']);
    formData.append('email',this.formGroup.value['email']);
    formData.append('password',this.formGroup.value['password']);
    formData.append('cpassword',this.formGroup.value['cpassword']);
    formData.append('albumimage',this.formGroup.value['albumimage']);

    this._dataService.submitEmployeeDetails(formData).subscribe((res:any)=>{
      console.log(res);
    })
  }
}
