import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pediatrics',
  imports: [CommonModule, RouterModule],
  templateUrl: './pediatrics.html',
  styleUrl: './pediatrics.scss',
})
export class Pediatrics {
      constructor(private router: Router) {}
    navigateTo(route: string) {
    this.router.navigate([route]);
  }

}
