import { DataserviceService } from 'src/app/pages/dataservice.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-showpage',
  templateUrl: './showpage.component.html',
  styleUrls: ['./showpage.component.scss']
})
export class ShowpageComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private _dataservice: DataserviceService,
    private fb: FormBuilder
  ) { }
  formGroup!: FormGroup;
  data: any;
  singleData: any;


  data2: any = [
    { name: "subham", roll: 34, mobile: 7978904202 },
    { name: "kumar", roll: 43, mobile: 9090786453 }
  ]
  ngOnInit(): void {

    this.formGroup = this.fb.group({
      album: [''],
      artist: [''],
      barcode: [''],
      price: [''],
      date: ['']
    })

    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    this._dataservice.getDetails().subscribe((res: any) => {
      // console.log(res);
      this.data = res.result;
      this.singleData = this.data.filter((a: any) => {
        return a._id == id;
      })

      console.log(this.singleData);
      this.formGroup.patchValue({
        album: this.singleData[0].album,
        artist: this.singleData[0].artist,
        barcode: this.singleData[0].barcode,
        price: this.singleData[0].price,
        date: this.singleData[0].date
      })
      this.formGroup.disable()
    })
  }
}
