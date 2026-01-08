import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPayment } from './patient-payment';

describe('PatientPayment', () => {
  let component: PatientPayment;
  let fixture: ComponentFixture<PatientPayment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientPayment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientPayment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
