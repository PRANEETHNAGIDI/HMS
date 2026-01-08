import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav.html',
  styleUrls: ['./nav.scss']
})
export class Nav {
  constructor(private router: Router) {}

    logout() {
    // Clear session or token logic here
    console.log('Logging out...');
    this.router.navigate(['/login']); // Redirect to login page
  }
}