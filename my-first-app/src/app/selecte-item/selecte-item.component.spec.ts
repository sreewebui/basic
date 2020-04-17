import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecteItemComponent } from './selecte-item.component';

describe('SelecteItemComponent', () => {
  let component: SelecteItemComponent;
  let fixture: ComponentFixture<SelecteItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecteItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
