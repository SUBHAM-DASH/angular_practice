import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MaterialUIModule } from '../material-ui/material-ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { ClassbindingComponent } from './components/classbinding/classbinding.component';
import { StylebindingComponent } from './components/stylebinding/stylebinding.component';
import { EventbindingComponent } from './components/eventbinding/eventbinding.component';
import { NgContentComponent } from './components/ng-content/ng-content.component';
import { CardComponent } from './components/card/card.component';
import { InputDecoratorComponent } from './components/input-decorator/input-decorator.component';
// import {MultiDatepickerModule} from './multidatepicker/multidatepicker.module';


// bootstrap
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { SampleformComponent } from './components/sampleform/sampleform.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FormarrayComponent } from './components/formarray/formarray.component';
import { CommonComponent } from './components/common/common.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { NgOnchangesComponent } from './components/ng-onchanges/ng-onchanges.component';
import { ParentNgOnChangesComponent } from './components/parent-ng-on-changes/parent-ng-on-changes.component';


@NgModule({
  declarations: [
    NgSwitchComponent,
    ClassbindingComponent,
    StylebindingComponent,
    EventbindingComponent,
    NgContentComponent,
    CardComponent,
    InputDecoratorComponent,
    DatepickerComponent,
    SampleformComponent,
    SearchboxComponent,
    TooltipComponent,
    PaginationComponent,
    FormarrayComponent,
    CommonComponent,
    ChildComponent,
    ParentComponent,
    NgOnchangesComponent,
    ParentNgOnChangesComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialUIModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BsDatepickerModule,
    HttpClientModule,
    NgxPaginationModule
  ]
})
export class PagesModule { }
