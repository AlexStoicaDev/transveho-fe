import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCarModalComponent } from './create-car-modal.component';

describe('CreateCarModalComponent', () => {
  let component: CreateCarModalComponent;
  let fixture: ComponentFixture<CreateCarModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCarModalComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
