import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for *ngFor and ngClass
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-patient',
  imports: [CommonModule],
  templateUrl: './view-patient.html',
  styleUrl: './view-patient.scss',
})
export class ViewPatient {
 constructor( private router: Router) {}

  patient = [
    {
      patientID: 1,
      Name: ' Suresh',
      Speciality: 'Cardiology',
      ContactNo: '812345678',
      Referred: 'Dr Pranee',
      DOF:'04-11-2025',
      Room:'103 - A C Room',
      Bill:"12000/-",
      Status: true
    },
    {
      patientID: 2,
      Name: ' Ravi',
      Speciality: 'Orthopedics',
      ContactNo: '812345678',
      Referred: 'Dr. Santhosh',
      DOF:'03-11-2025',
      Room:'123 - Delux Room',
      Bill:"19030/-",
      Status: true
    },
    {
      patientID: 3,
      Name: ' ssaruyu',
      Speciality: 'Pediatrics',
      ContactNo: '912345678',
      Referred: 'Dr. Radhika',
      DOF:'02-11-2025',
      Room:'233 - A C Room',
      Bill:"322100/-",
      Status: false
    },
    {
      patientID: 4,
      Name: ' Ravi',
      Speciality: 'Orthopedics',
      ContactNo: '812345678',
      Referred: 'Dr. Santhosh',
      DOF:'03-11-2025',
      Room:'403 - A C Room',
      Bill:"19030/-",
      Status: false
    },
    {
      patientID: 5,
      Name: ' ssaruyu',
      Speciality: 'Pediatrics',
      ContactNo: '912345678',
      Referred: 'Dr. Radhika',
      DOF:'02-11-2025',
      Room:'902 - Delux Room',
      Bill:"322100/-",
      Status: false
    },
    {
      patientID: 6,
      Name: ' Ravi',
      Speciality: 'Orthopedics',
      ContactNo: '812345678',
      Referred: 'Dr. Santhosh',
      DOF:'03-11-2025',
      Room:'603 - ICU Room',
      Bill:"19030/-",
      Status: false
    },
    {
      patientID: 7,
      Name: ' ssaruyu',
      Speciality: 'Pediatrics',
      ContactNo: '912345678',
      Referred: 'Dr. Radhika',
      DOF:'02-11-2025',
      Room:'203 - Delux Room',
      Bill:"322100/-",
      Status: false
    },
    {
      patientID: 8,
      Name: ' Ravi',
      Speciality: 'Orthopedics',
      ContactNo: '812345678',
      Referred: 'Dr. Santhosh',
      DOF:'03-11-2025',
      Room:'203 - A C Room',
      Bill:"19030/-",
      Status: true
    },
    {
      patientID: 9,
      Name: ' ssaruyu',
      Speciality: 'Pediatrics',
      ContactNo: '912345678',
      Referred: 'Dr. Radhika',
      DOF:'02-11-2025',
      Room:'203 - Delux Room',
      Bill:"322100/-",
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
    navigateTo() {
    this.router.navigate(['/reports']);
  }
}

