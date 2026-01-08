import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  imports: [CommonModule, RouterModule],
  templateUrl: './aboutus.html',
  styleUrl: './aboutus.scss',
})
export class Aboutus {
    constructor(private router: Router) {}


}
