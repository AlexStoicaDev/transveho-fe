import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDispatcherComponent } from './test-dispatcher.component';

describe('TestDispatcherComponent', () => {
  let component: TestDispatcherComponent;
  let fixture: ComponentFixture<TestDispatcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestDispatcherComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDispatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
