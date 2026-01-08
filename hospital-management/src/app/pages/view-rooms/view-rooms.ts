import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Required for *ngFor, *ngIf
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-rooms',
  standalone: true,
  imports: [CommonModule], // ✅ Add CommonModule here
  templateUrl: './view-rooms.html',
  styleUrls: ['./view-rooms.scss']
})
export class ViewRooms implements OnInit {
  availableRooms = [
    { id: 101, type: 'A.C Room', rate: 1500, isAvailable: true },
    { id: 102, type: 'A.C Room', rate: 1500, isAvailable: true },
    { id: 103, type: 'Special Room', rate: 2000, isAvailable: false },
    { id: 201, type: 'Special Room', rate: 2000, isAvailable: false },
    { id: 202, type: 'Special Room', rate: 2000, isAvailable: true },
    { id: 203, type: 'Super Deluxe Room', rate: 2000, isAvailable: true },
    { id: 301, type: 'Super Deluxe Room', rate: 3000, isAvailable: true },
    { id: 302, type: 'Super Deluxe Room', rate: 3000, isAvailable: false },
    { id: 401, type: 'I.C.U', rate: 5000, isAvailable: true },

  ];

  constructor( private router: Router) {}
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

  ngOnInit(): void {}
}