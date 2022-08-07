import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../dataservice.service';

@Component({
  selector: 'app-imageupload',
  templateUrl: './imageupload.component.html',
  styleUrls: ['./imageupload.component.scss'],
})
export class ImageuploadComponent implements OnInit {
  url: any;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private _dataservice: DataserviceService
  ) {}
  formGroup!: FormGroup;
  albumImage: any = null;
  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      image: [this.url, Validators.required],
    });
  }
  handleimageClick(value: any) {
    if (value.target.files) {
      console.log(value.target.files[0]);

      var render = new FileReader();
      render.readAsDataURL(value.target.files[0]);
      render.onload = (e: any) => {
        this.url = e.target.result;
      };
    }
  }
  getData() {
    const fd=new FormData();
    for (const key in this.formGroup.value) {
      fd.append(key,this.formGroup.value[key]);
    }
    console.log(this.formGroup.value);
    // this._dataservice
    //   .imageUpload(this.formGroup.value)
    //   .subscribe((res: any) => {
    //     console.log(res);
    //   });

    fd.append('image',this.url);
    this._dataservice.imageUpload(fd).subscribe((res:any)=>{
      console.log(res);
    });
    // this.http.post('http://localhost:9000/api/resume',{data:this.formGroup.value});
  }
}
