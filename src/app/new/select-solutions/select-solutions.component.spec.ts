import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSolutionsComponent } from './select-solutions.component';

describe('SelectSolutionsComponent', () => {
  let component: SelectSolutionsComponent;
  let fixture: ComponentFixture<SelectSolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectSolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
