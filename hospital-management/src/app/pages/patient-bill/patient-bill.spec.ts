import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientBill } from './patient-bill';

describe('PatientBill', () => {
  let component: PatientBill;
  let fixture: ComponentFixture<PatientBill>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientBill]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientBill);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
