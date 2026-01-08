import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for *ngFor and ngClass
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-doctor',
  standalone: true,
  imports: [CommonModule], // 👈 Add this line
  templateUrl: './view-doctor.html',
})
export class ViewDoctor {
    constructor( private router: Router) {}

  doctors = [
    {
      DoctorID: 1,
      Name: 'Dr. Pranee',
      Speciality: 'Cardiology',
      ContactNo: '812345678',
      Type: 'Permanent',
      Status: true
    },
    {
      DoctorID: 2,
      Name: 'Dr. Ravi',
      Speciality: 'Orthopedics',
      ContactNo: '812345678',
      Type: 'Visiting',
      Status: true
    },
    {
      DoctorID: 3,
      Name: 'Dr. ssaruyu',
      Speciality: 'Pediatrics',
      ContactNo: '912345678',
      Type: 'Permanent',
      Status: false
    }
  ];
  onDoc() {
        this.router.navigate(['/doctor']);
  }
  onDash() {
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