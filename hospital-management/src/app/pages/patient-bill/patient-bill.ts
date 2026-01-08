import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-patient-bill',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './patient-bill.html',
  styleUrl: './patient-bill.scss',
})
export class PatientBill {

    formError: boolean = false; // Flag to show error message

  reportForm!: FormGroup;
  reportData: any = null;

  constructor(private fb: FormBuilder, private router: Router) {}
    userName: string = '';

  ngOnInit(): void {
    this.reportForm = this.fb.group({
      patientName: ['', Validators.required],
      patientId: ['', Validators.required]
    });
      const email = localStorage.getItem('userEmail');
  if (email) {
    this.userName = email.split('@')[0]; // Extract name before @
    this.userName = this.userName.charAt(0).toUpperCase() + this.userName.slice(1);
  }
  }
  

onSubmit() {
  if (this.reportForm.valid) {
    this.formError = false;
    const { patientName, patientId } = this.reportForm.value;
    console.log('Fetching report for:', patientName, patientId);
    this.reportData = { name: patientName, id: patientId };
  } else {
    this.formError = true;
    Object.values(this.reportForm.controls).forEach(control => control.markAsTouched());
    const firstInvalid = document.querySelector('.ng-invalid');
    if (firstInvalid) (firstInvalid as HTMLElement).scrollIntoView({ behavior: 'smooth' });
  }
}

  onClear() {
    this.reportForm.reset();
    this.reportData = null;
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

downloadReport() {
  
  const role = localStorage.getItem('userRole');
  const content = `
    Patient Report
    -------------------------
    Name: ${this.userName}

    Room Charges: ₹5,000
    Medicine Charges: ₹3,000
    Lab Tests: ₹2,500
    Doctor Consultation: ₹2,000
    -------------------------
    Total: ₹12,500

    Room Assignment: Room 203, General Ward
    Admission Date: 15-Oct-2025
    Treatment History: Fever, Antibiotics, Blood Test
  `;

  const blob = new Blob([content], { type: 'text/plain' });
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = `Report_${this.userName}.txt`;

}
}
