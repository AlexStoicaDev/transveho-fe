import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePassengerModalComponent } from './create-passenger-modal.component';

describe('CreatePassengerModalComponent', () => {
  let component: CreatePassengerModalComponent;
  let fixture: ComponentFixture<CreatePassengerModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePassengerModalComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePassengerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
