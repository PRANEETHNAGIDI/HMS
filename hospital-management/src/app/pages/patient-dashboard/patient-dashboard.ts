import { Component } from '@angular/core';import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Nav } from '../../nav/nav';


@Component({
  selector: 'app-patient-dashboard',
  imports: [CommonModule,Nav],

  templateUrl: './patient-dashboard.html',
  styleUrl: './patient-dashboard.scss',
})
export class PatientDashboard {
   modules = [
    {
      name: 'View Reports',
      route: '/viewPatientReport',
      icon: 'bi-bar-chart-line',
      description: 'View analytics and hospital reports.',
      btn:'Add'

    },
        {
      name: 'View Doctors',//
      route: '/viewDoctor',
      icon: 'bi bi-eye-fill',
      description: 'View Doctors list who are Availible',
      btn:'open'
    },
        {
      name: 'View Rooms',//
      route: '/viewrooms',
      icon: 'bi bi-hospital',
      description: 'View Available and Occupied Rooms.',
      btn:'open'
    },
    {
      name: 'View Bill',//
      route: '/viewPatientBill',
      icon: 'bi bi-hospital',
      description: 'View Available and Occupied Rooms.',
      btn:'open'
    }, {
      name: 'Book Appointment',
      route: '/book-appointment',
      icon: 'bi bi-bookmark-heart',
      description: 'View Available and Occupied Rooms.',
      btn:'open'
    },
  ];

  constructor(private router: Router) {}
    userName: string = '';

  ngOnInit(): void {
  const email = localStorage.getItem('userEmail');
  if (email) {
    this.userName = email.split('@')[0]; // Extract name before @
    this.userName = this.userName.charAt(0).toUpperCase() + this.userName.slice(1);
  }
}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

}
