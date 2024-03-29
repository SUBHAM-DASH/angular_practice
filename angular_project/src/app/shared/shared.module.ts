import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { CustomCardComponent } from './components/custom-card/custom-card.component';
import { MaterialUIModule } from '../material-ui/material-ui.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';

const sharedComponent=[
  CustomButtonComponent,
  CustomInputComponent,
  CustomCardComponent
]

@NgModule({
  declarations: [
    CustomButtonComponent,
    CustomInputComponent,
    CustomCardComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    MaterialUIModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    sharedComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
