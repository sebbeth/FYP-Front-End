import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInputSetComponent } from './edit-input-set.component';

describe('EditInputSetComponent', () => {
  let component: EditInputSetComponent;
  let fixture: ComponentFixture<EditInputSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInputSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInputSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
