import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreTableFilterComponent } from './filter.component';

describe('FilterComponent', () => {
  let component: CoreTableFilterComponent;
  let fixture: ComponentFixture<CoreTableFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreTableFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreTableFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
