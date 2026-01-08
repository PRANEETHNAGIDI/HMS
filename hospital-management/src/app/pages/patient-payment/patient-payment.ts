import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-patient-payment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './patient-payment.html',
  styleUrls: ['./patient-payment.scss']
})
export class PatientPayment implements OnInit {
  paymentForm!: FormGroup;
    formError: boolean = false; // Flag to show error message


  constructor(private fb: FormBuilder,  private router: Router) {}
  

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      opdPatientId: ['', Validators.required],
      opdBillId: ['', Validators.required],
      amountPaid: ['', [Validators.required, Validators.min(0)]],
      paymentType: ['', Validators.required],
      paymentDate: ['', Validators.required]
    });
  }

onSubmit() {
  if (this.paymentForm.valid) {
    this.formError = false;
    console.log('Payment submitted:', this.paymentForm.value);
    alert('Payment saved successfully!');
    this.paymentForm.reset();
  } else {
    this.formError = true;
    Object.values(this.paymentForm.controls).forEach(control => control.markAsTouched());
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
}