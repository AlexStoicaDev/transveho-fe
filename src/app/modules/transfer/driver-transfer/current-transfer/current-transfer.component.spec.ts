import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTransferComponent } from './current-transfer.component';

describe('CurrentTransferComponent', () => {
  let component: CurrentTransferComponent;
  let fixture: ComponentFixture<CurrentTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentTransferComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
