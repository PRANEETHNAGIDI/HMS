import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { Nav } from '../../nav/nav';


@Component({
  selector: 'app-admit-patient',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,Nav],
  templateUrl: './admit-patient.html',
  styleUrls: ['./admit-patient.scss']
})
export class AdmitPatient implements OnInit {
  patientForm!: FormGroup;  
    formError: boolean = false; // Flag to show error message



  constructor(private fb: FormBuilder,private router: Router ) {}

  ngOnInit(): void {
    this.patientForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      contactNo: ['', [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)]],
      disease: ['', Validators.required],
      referredByDoctorID: ['', Validators.required],
      admissionDate: ['', Validators.required]
    });
  }

onSubmit() {
  if (this.patientForm.valid) {
    this.formError = false;
    console.log('Patient admitted:', this.patientForm.value);
    alert('Patient added successfully!');
    this.patientForm.reset();
  } else {
    this.formError = true;

    // Mark all fields as touched to show validation messages
    Object.values(this.patientForm.controls).forEach(control => control.markAsTouched());

    // Scroll to first invalid field
    const firstInvalid = document.querySelector('.ng-invalid');
    if (firstInvalid) {
      (firstInvalid as HTMLElement).scrollIntoView({ behavior: 'smooth' });
    }
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