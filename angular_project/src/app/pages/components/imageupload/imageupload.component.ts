import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imageupload',
  templateUrl: './imageupload.component.html',
  styleUrls: ['./imageupload.component.scss']
})
export class ImageuploadComponent implements OnInit {

  constructor(private fb:FormBuilder,private http:HttpClient) { }
  formGroup!:FormGroup;
  albumImage:any=null;
  ngOnInit(): void {
    this.formGroup=this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      // image:['',Validators.required]
    })
  }
  handleimageClick(value:any){
    console.log(value.target.files[0]);
    this.albumImage = value.target.files[0];
  }
  getData(){
    const fd=new FormData();
    for (const key in this.formGroup.value) {
      fd.append(key,this.formGroup.value[key]);
    }
    fd.append('image',this.albumImage,this.albumImage.name);
    this.http.post('http://localhost:9000/api/resume',fd);
  }
}
