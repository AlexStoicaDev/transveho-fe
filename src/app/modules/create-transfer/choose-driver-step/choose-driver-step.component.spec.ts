import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseDriverStepComponent } from './choose-driver-step.component';

describe('ChooseDriverStepComponent', () => {
  let component: ChooseDriverStepComponent;
  let fixture: ComponentFixture<ChooseDriverStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseDriverStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseDriverStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
