import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPassengerModalComponent } from './edit-passenger-modal.component';

describe('EditPassengerModalComponent', () => {
  let component: EditPassengerModalComponent;
  let fixture: ComponentFixture<EditPassengerModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditPassengerModalComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPassengerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
