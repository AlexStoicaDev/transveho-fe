import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyPassengersStepComponent } from './verify-passengers-step.component';

describe('VerifyPassengersStepComponent', () => {
  let component: VerifyPassengersStepComponent;
  let fixture: ComponentFixture<VerifyPassengersStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VerifyPassengersStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyPassengersStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
