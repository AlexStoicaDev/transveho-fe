import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseCarStepComponent } from './choose-car-step.component';

describe('ChooseCarStepComponent', () => {
  let component: ChooseCarStepComponent;
  let fixture: ComponentFixture<ChooseCarStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseCarStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseCarStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
