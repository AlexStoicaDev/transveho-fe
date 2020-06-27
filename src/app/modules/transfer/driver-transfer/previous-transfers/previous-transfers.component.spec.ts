import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousTransfersComponent } from './previous-transfers.component';

describe('PreviousTransfersComponent', () => {
  let component: PreviousTransfersComponent;
  let fixture: ComponentFixture<PreviousTransfersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousTransfersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousTransfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
