import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRouteModalComponent } from './edit-route-modal.component';

describe('EditRouteModalComponent', () => {
  let component: EditRouteModalComponent;
  let fixture: ComponentFixture<EditRouteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditRouteModalComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRouteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
