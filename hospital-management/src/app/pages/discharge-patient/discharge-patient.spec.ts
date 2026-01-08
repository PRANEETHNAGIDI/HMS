import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DischargePatient } from './discharge-patient';

describe('DischargePatient', () => {
  let component: DischargePatient;
  let fixture: ComponentFixture<DischargePatient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DischargePatient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DischargePatient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
