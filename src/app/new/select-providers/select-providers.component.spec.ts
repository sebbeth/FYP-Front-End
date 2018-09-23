import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectProvidersComponent } from './select-providers.component';

describe('SelectProvidersComponent', () => {
  let component: SelectProvidersComponent;
  let fixture: ComponentFixture<SelectProvidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectProvidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
