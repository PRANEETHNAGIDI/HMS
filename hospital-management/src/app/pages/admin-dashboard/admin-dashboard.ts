import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Nav } from '../../nav/nav';
@Component({
  selector: 'app-admin-dashboard',
  imports: [CommonModule,Nav],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.scss',
})
export class AdminDashboard {
    modules = [
    {
      name: 'Add Doctor',
      route: '/doctor',
      icon: 'bi-person-badge',
      description: 'Manage doctor profiles and schedules.',
      btn:'Add'
    },
    {
      name: 'Add Room',
      route: '/room',
      icon: 'bi-door-open',
      description: 'Create and manage hospital rooms.',
            btn:'Add'

    },
    {
      name: 'Patient Payment',
      route: '/payment',
      icon: 'bi-credit-card',
      description: 'Record and manage patient payments.',
            btn:'Add'

    },
    {
      name: 'Discharge Patient',
      route: '/discharge',
      icon: 'bi-box-arrow-right',
      description: 'Discharge patients and finalize records.',
      btn:'Discharge'

    },
    {
      name: 'View Reports',
      route: '/reports',
      icon: 'bi-bar-chart-line',
      description: 'View analytics and hospital reports.',
      btn:'open'

    },
        {
      name: 'View Doctors',
      route: '/viewDoctor',
      icon: 'bi bi-eye-fill',
      description: 'View Doctors list who are Availible',
      btn:'open'
    },
        {
      name: 'View Rooms',
      route: '/viewrooms',
      icon: 'bi bi-hospital',
      description: 'View Available and Occupied Rooms.',
      btn:'open'
    },
        {
      name: 'View Patient',
      route: '/viewPatient',
      icon: 'bi bi-clipboard-heart',
      description: 'View entire Paitient Records.',
      btn:'open'
    }
  ];

  userName: string = '';

ngOnInit(): void {
  const email = localStorage.getItem('userEmail');
  if (email) {
    this.userName = email.split('@')[0]; // Extract name before @
    this.userName = this.userName.charAt(0).toUpperCase() + this.userName.slice(1);
  }
}

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

}
