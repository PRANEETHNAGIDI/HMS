import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Nav } from '../../nav/nav';
import { Aboutus } from '../aboutus/aboutus';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,Nav],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class Dashboard {
  modules = [
    {
      name: 'Admit Patient',
      route: '/patient',
      icon: 'bi-person-plus',
      description: 'Admit new patients and assign rooms.',
            btn:'Add'

    },
    {
      name: 'Generate Bill',//
      route: '/bill',
      icon: 'bi-receipt',
      description: 'Generate billing details for patients.',
            btn:'Add'

    },
    {
      name: 'Room Shifting',//
      route: '/room-shifting',
      icon: 'bi-arrow-left-right',
      description: 'Shift patients between rooms.',
            btn:'Add'

    },
    {
      name: 'Patient Payment',//
      route: '/payment',
      icon: 'bi-credit-card',
      description: 'Record and manage patient payments.',
            btn:'Add'

    },
    {
      name: 'Discharge Patient',//
      route: '/discharge',
      icon: 'bi-box-arrow-right',
      description: 'Discharge patients and finalize records.',
      btn:'Add'

    }, {
      name: 'Generate Reports',
      route: '/generateReports',
      icon: 'bi bi-folder-plus',
      description: 'Upadate the patients Test records.',
      btn:'Add'

    },
    {
      name: 'View Reports',
      route: '/reports',
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
      name: 'View Patient',//
      route: '/viewPatient',
      icon: 'bi bi-clipboard-heart',
      description: 'View entire Paitient Records.',
      btn:'open'
    },
    //     {
    //   name: 'View History',
    //   route: '/dummy',
    //   icon: 'bi-bar-chart-line',
    //   description: 'View analytics and hospital reports.',
    //   btn:'open'
    // }
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