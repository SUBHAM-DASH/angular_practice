import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCropperModule } from 'ngx-image-cropper';

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
import { DailogComponent } from './components/dailog/dailog.component';
import { FormvalidationComponent } from './components/formvalidation/formvalidation.component';
import { TryformComponent } from './components/tryform/tryform.component';
import { InlineeditComponent } from './components/inlineedit/inlineedit.component';
import { ImageuploadComponent } from './components/imageupload/imageupload.component';
import { TableComponent } from './components/table/table.component';
// import { FilterPipe } from './filter.pipe';
import { FilterNamePipe } from './filter-name.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ShowDetailsComponent } from './components/tryform/show-details/show-details.component';
import { ShowpageComponent } from './components/showpage/showpage.component';
import { InputComponent } from './components/input/input.component';
import { Table2Component } from './components/table2/table2.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { EditorComponent } from './components/editor/editor.component';
import { ImageCroperComponent } from './components/image-croper/image-croper.component';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { SocialLoginComponent } from './components/social-login/social-login.component';

import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';

const googleLoginOptions = {
  scope: 'dashsubham095@gmail.com',
  plugin_name: 'sample_login', //can be any name
};

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
    DailogComponent,
    FormvalidationComponent,
    TryformComponent,
    InlineeditComponent,
    ImageuploadComponent,
    TableComponent,
    // FilterPipe,
    FilterNamePipe,
    WishlistComponent,
    ShowDetailsComponent,
    ShowpageComponent,
    InputComponent,
    Table2Component,
    DialogComponent,
    EditorComponent,
    ImageCroperComponent,
    GoogleMapComponent,
    SocialLoginComponent,
  ],
  imports: [
    CommonModule,
    Ng2SearchPipeModule,
    PagesRoutingModule,
    MaterialUIModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    SharedModule,
    BsDatepickerModule,
    HttpClientModule,
    NgxPaginationModule,
    ImageCropperModule,
    SocialLoginModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '1094224468295-4bh0ng7vq6uh40knnqgfgn7ed0m96lds.apps.googleusercontent.com',
              googleLoginOptions
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
})
export class PagesModule {}
