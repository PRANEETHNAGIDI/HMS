import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmitPatient } from './admit-patient';

describe('AdmitPatient', () => {
  let component: AdmitPatient;
  let fixture: ComponentFixture<AdmitPatient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmitPatient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmitPatient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
