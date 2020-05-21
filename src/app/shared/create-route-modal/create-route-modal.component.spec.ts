import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRouteModalComponent } from './create-route-modal.component';

describe('CreateRouteModalComponent', () => {
  let component: CreateRouteModalComponent;
  let fixture: ComponentFixture<CreateRouteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateRouteModalComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRouteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
