import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { Nav } from '../../nav/nav';
import { Aboutus } from '../aboutus/aboutus';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule,Aboutus],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {
  constructor(private router: Router) {}
    navigateTo(route: string) {
    this.router.navigate([route]);
  }
}     