import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discharge-patient',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './discharge-patient.html',
  styleUrls: ['./discharge-patient.scss']
})
export class DischargePatient implements OnInit {
  dischargeForm!: FormGroup;
  formError: boolean = false;
  dischargeSummary: any = null;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.dischargeForm = this.fb.group({
      patientName: ['', Validators.required],
      patientId: ['', Validators.required],
      finalBillId: ['', Validators.required],
      dischargeDate: ['', Validators.required]
    });
  }

onSubmit() {
  if (this.dischargeForm.valid) {
    this.formError = false;
    const formValues = this.dischargeForm.value;
    this.dischargeSummary = {
      name: formValues.patientName,
      patientId: formValues.patientId,
      finalBillId: formValues.finalBillId,
      dischargeDate: formValues.dischargeDate
    };
  } else {
    this.formError = true;
    Object.values(this.dischargeForm.controls).forEach(control => control.markAsTouched());
    const firstInvalid = document.querySelector('.ng-invalid');
    if (firstInvalid) (firstInvalid as HTMLElement).scrollIntoView({ behavior: 'smooth' });
  }
}

  onCancel() {
    // this.router.navigate(['/dashboard']);
       const role = localStorage.getItem('userRole');
      switch (role) {
        case 'Admin':
          this.router.navigate(['/adminDashboard']);
          break;
        case 'Staff':
          this.router.navigate(['/dashboard']);
          break;
        case 'Patient':
          this.router.navigate(['/patientDashboard']);
          break;
        default:
          this.router.navigate(['/']);
      }
  }

  onPrint() {
    window.print();
  }
}
