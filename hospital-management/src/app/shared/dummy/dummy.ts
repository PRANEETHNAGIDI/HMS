import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Nav } from '../../nav/nav';

@Component({
  selector: 'app-dummy',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="container mt-5"><h3>This module is under construction</h3> </div>`
})
export class Dummy {}