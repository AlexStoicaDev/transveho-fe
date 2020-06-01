import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCarModalComponent } from './edit-car-modal.component';

describe('EditCarModalComponent', () => {
  let component: EditCarModalComponent;
  let fixture: ComponentFixture<EditCarModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditCarModalComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
