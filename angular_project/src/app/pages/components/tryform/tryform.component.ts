import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tryform',
  templateUrl: './tryform.component.html',
  styleUrls: ['./tryform.component.scss']
})
export class TryformComponent implements OnInit {
  formGroup!: FormGroup;
  ticketData!:FormGroup;
  constructor(private fb: FormBuilder) { }
  form1:any;

  ngOnInit(): void {

  }
}
