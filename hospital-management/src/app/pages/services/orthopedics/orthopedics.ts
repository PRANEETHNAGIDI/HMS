import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orthopedics',
  imports: [CommonModule, RouterModule],
  templateUrl: './orthopedics.html',
  styleUrl: './orthopedics.scss',
})
export class Orthopedics {
      constructor(private router: Router) {}
    navigateTo(route: string) {
    this.router.navigate([route]);
  }

}
