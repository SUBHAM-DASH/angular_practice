import { DataserviceService } from './../../dataservice.service';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl, Form } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.scss']
})
export class FormarrayComponent implements OnInit {

  buyTicketForm!: FormGroup

  constructor(private fb: FormBuilder,private _ds:DataserviceService) { }

  ngOnInit(): void {
    this.buyTicketForm = this.fb.group({
      emailControl: [null, [Validators.required]],
      phoneControl: [null],
      address: this.fb.group({
        streetControl: [],
        postalcodeControl: []
      }),
      tickets:this.fb.array([this.createTicket()],Validators.required)
    })
  }

  createTicket() {
    return this.fb.group({
      name: [null, Validators.required],
      age: [null, Validators.required]
    })
  }

  get tickets():FormArray{
    return  <FormArray> this.buyTicketForm.get('tickets');
  }

  addTicket(){
    this.tickets.push(this.createTicket());
  }

  buyTickets(){
    console.log(this.buyTicketForm.value);
    this._ds.saveUserInfo(this.buyTicketForm.value).subscribe((res)=>{
      console.log("saved");
    })
  }
}


