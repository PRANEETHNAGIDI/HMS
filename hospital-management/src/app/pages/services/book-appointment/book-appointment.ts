import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-appointment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './book-appointment.html',
})
export class BookAppointment implements OnInit {
  appointmentForm!: FormGroup;

  constructor(private fb: FormBuilder,private router: Router) {}

  ngOnInit(): void {
    this.appointmentForm = this.fb.group({
      patientName: ['', Validators.required],
      doctor: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      reason: ['']
    });
  }

  onSubmit() {
    if (this.appointmentForm.valid) {
      console.log('Appointment booked:', this.appointmentForm.value);
      alert('Appointment booked successfully!');
      this.appointmentForm.reset();
    }
  }
  onCancel() {
  this.appointmentForm.reset();
      // this.router.navigate(['/']);
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