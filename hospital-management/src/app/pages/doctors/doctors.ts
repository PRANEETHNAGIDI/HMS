import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Nav } from '../../nav/nav';

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, Nav],
  templateUrl: './doctors.html',
  styleUrls: ['./doctors.scss']
})
export class Doctors implements OnInit {
  doctorForm!: FormGroup;
  formError: boolean = false; // Flag to show error message

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.doctorForm = this.fb.group({
      doctorName: ['', Validators.required],
      doctorSpeciality: ['', Validators.required],
      doctorContactNo: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      department: ['', Validators.required]
    });
  }


onSubmit() {
  if (this.doctorForm.valid) {
    this.formError = false;
    alert('Doctor added successfully!');
    console.log(this.doctorForm.value);
    this.doctorForm.reset();
  } else {
    this.formError = true;

    // Scroll to first invalid control
    const firstInvalidControl = document.querySelector('.ng-invalid');
    if (firstInvalidControl) {
      (firstInvalidControl as HTMLElement).scrollIntoView({ behavior: 'smooth' });
    }

    // Mark all controls as touched to trigger validation messages
    Object.values(this.doctorForm.controls).forEach(control => {
      control.markAsTouched();
    });
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

  onViewDoc() {
    this.router.navigate(['/viewDoctor']);
  }
}