import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOnchangesComponent } from './ng-onchanges.component';

describe('NgOnchangesComponent', () => {
  let component: NgOnchangesComponent;
  let fixture: ComponentFixture<NgOnchangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgOnchangesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgOnchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
