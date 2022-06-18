import { InputComponent } from './components/input/input.component';
import { ImageuploadComponent } from './components/imageupload/imageupload.component';
import { InlineeditComponent } from './components/inlineedit/inlineedit.component';
import { FormvalidationComponent } from './components/formvalidation/formvalidation.component';
import { ParentNgOnChangesComponent } from './components/parent-ng-on-changes/parent-ng-on-changes.component';
import { Child2Component } from './components/child2/child2.component';
import { CommonComponent } from './components/common/common.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { InputDecoratorComponent } from './components/input-decorator/input-decorator.component';
import { NgContentComponent } from './components/ng-content/ng-content.component';
import { EventbindingComponent } from './components/eventbinding/eventbinding.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassbindingComponent } from './components/classbinding/classbinding.component';
import { StylebindingComponent } from './components/stylebinding/stylebinding.component';
import { SampleformComponent } from './components/sampleform/sampleform.component';
import { FormarrayComponent } from './components/formarray/formarray.component';
import { ParentComponent } from './components/parent/parent.component';
import { TryformComponent } from './components/tryform/tryform.component';
import { TableComponent } from './components/table/table.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ShowDetailsComponent } from './components/tryform/show-details/show-details.component';
import { ShowpageComponent } from './components/showpage/showpage.component';

const routes: Routes = [
  { path: 'ng-switch', component: NgSwitchComponent },
  { path: 'classbinding', component: ClassbindingComponent },
  { path: 'stylebinding', component: StylebindingComponent },
  { path: 'eventbinding', component: EventbindingComponent },
  { path: 'ng-content', component: NgContentComponent },
  { path: 'input-decorator', component: InputDecoratorComponent },
  { path: 'datepicker', component: DatepickerComponent },
  { path: 'sampleform', component: SampleformComponent },
  { path: 'searchbox', component: SearchboxComponent },
  { path: 'tooltip', component: TooltipComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'formarray', component: FormarrayComponent },
  { path: 'common', component: CommonComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'child2', component: Child2Component },
  { path: 'parentngchanges', component: ParentNgOnChangesComponent },
  { path: 'formvalidation', component: FormvalidationComponent },
  { path: 'tryform', component: TryformComponent },
  { path: 'inlineedit', component: InlineeditComponent },
  { path: 'imageupload', component: ImageuploadComponent },
  { path: 'table', component: TableComponent },
  { path: 'showdetail', component: ShowDetailsComponent },
  { path: 'showpage/:id', component: ShowpageComponent },
  { path: 'input', component: InputComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
