import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDelDepComponent } from './add-del-dep.component';

describe('AddDelDepComponent', () => {
  let component: AddDelDepComponent;
  let fixture: ComponentFixture<AddDelDepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDelDepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDelDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
