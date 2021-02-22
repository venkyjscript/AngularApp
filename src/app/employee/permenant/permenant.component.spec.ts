import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermenantComponent } from './permenant.component';

describe('PermenantComponent', () => {
  let component: PermenantComponent;
  let fixture: ComponentFixture<PermenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
