import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialUIModule } from '../material-ui/material-ui.module';
import { PiechatComponent } from './components/piechat/piechat.component';
import { LinechartComponent } from './components/linechart/linechart.component';
import { BarchartComponent } from './components/barchart/barchart.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DashboardComponent,
    PiechatComponent,
    LinechartComponent,
    BarchartComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialUIModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BsDatepickerModule
  ]
})
export class DashboardModule { }
