import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSolutionsComponent } from './custom-solutions.component';

describe('CustomSolutionsComponent', () => {
  let component: CustomSolutionsComponent;
  let fixture: ComponentFixture<CustomSolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomSolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
