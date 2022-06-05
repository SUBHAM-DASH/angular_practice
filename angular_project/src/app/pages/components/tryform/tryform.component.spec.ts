import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryformComponent } from './tryform.component';

describe('TryformComponent', () => {
  let component: TryformComponent;
  let fixture: ComponentFixture<TryformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TryformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TryformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
