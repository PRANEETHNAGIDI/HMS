import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generate-bill',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './generate-bill.html',
  styleUrls: ['./generate-bill.scss']
})
export class GenerateBill implements OnInit {
  billForm!: FormGroup;
  totalAmount: number = 0;
  formError: boolean = false;
  billGenerated: boolean = false; // Flag to show download button
  billData: any;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.billForm = this.fb.group({
      patientId: ['', Validators.required],
      patientName: ['', Validators.required],

      roomCharges: [0, [Validators.required, Validators.min(0)]],
      doctorCharges: [0, [Validators.required, Validators.min(0)]],
      medicineCharges: [0, [Validators.required, Validators.min(0)]],
      billDate: ['', Validators.required]
    });

    this.billForm.valueChanges.subscribe(values => {
      this.totalAmount =
        (values.roomCharges || 0) +
        (values.doctorCharges || 0) +
        (values.medicineCharges || 0);
    });
  }

onSubmit() {
  if (this.billForm.valid) {
    this.formError = false;
    this.billData = {
      ...this.billForm.value,
      totalAmount: this.totalAmount
    };
    this.billGenerated = true;
    console.log('Bill generated:', this.billData);
    alert('Bill Generated');
    this.billForm.reset();
  } else {
    this.formError = true;
    Object.values(this.billForm.controls).forEach(control => control.markAsTouched());
    const firstInvalid = document.querySelector('.ng-invalid');
    if (firstInvalid) (firstInvalid as HTMLElement).scrollIntoView({ behavior: 'smooth' });
  }
}

  downloadBill() {
    const content = `
      Patient Name: ${this.billData.patientName}
      Patient ID: ${this.billData.patientId}
      Room Charges: ₹${this.billData.roomCharges}
      Doctor Charges: ₹${this.billData.doctorCharges}
      Medicine Charges: ₹${this.billData.medicineCharges}
      Bill Date: ${this.billData.billDate}
      -----------------------------
      Total Amount: ₹${this.billData.totalAmount}
    `;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Bill_${this.billData.patientId}.txt`;
    a.click();
    window.URL.revokeObjectURL(url);
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