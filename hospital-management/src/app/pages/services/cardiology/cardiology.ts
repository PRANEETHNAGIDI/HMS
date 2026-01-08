import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardiology',
  imports: [CommonModule, RouterModule],
  templateUrl: './cardiology.html',
  styleUrl: './cardiology.scss',
})
export class Cardiology {
    constructor(private router: Router) {}
    navigateTo(route: string) {
    this.router.navigate([route]);
  }

}
