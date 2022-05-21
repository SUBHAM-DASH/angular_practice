import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentNgOnChangesComponent } from './parent-ng-on-changes.component';

describe('ParentNgOnChangesComponent', () => {
  let component: ParentNgOnChangesComponent;
  let fixture: ComponentFixture<ParentNgOnChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentNgOnChangesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentNgOnChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
