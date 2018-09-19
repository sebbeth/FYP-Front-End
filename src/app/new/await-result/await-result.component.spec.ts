import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwaitResultComponent } from './await-result.component';

describe('AwaitResultComponent', () => {
  let component: AwaitResultComponent;
  let fixture: ComponentFixture<AwaitResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwaitResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwaitResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
