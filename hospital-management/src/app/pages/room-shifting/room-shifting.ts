import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-room-shifting',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './room-shifting.html',
  styleUrls: ['./room-shifting.scss'] // ✅ fixed typo
})
export class RoomShifting implements OnInit {
  roomShiftingForm!: FormGroup; // ✅ corrected name

  constructor(private fb: FormBuilder,  private router: Router) {}
  formError: boolean = false; // Flag to show error message

  ngOnInit(): void {
    this.roomShiftingForm = this.fb.group({
      patient: ['', Validators.required],
      fromRoom: ['', Validators.required],
      toRoom: ['', Validators.required],
      shiftingDate: ['', Validators.required]
    });
  }

onSubmitRoom() {
  if (this.roomShiftingForm.valid) {
    this.formError = false;
    console.log('Room shifting:', this.roomShiftingForm.value);
    alert('Room changed successfully!');
    this.roomShiftingForm.reset();
  } else {
    this.formError = true;
    Object.values(this.roomShiftingForm.controls).forEach(control => control.markAsTouched());
    const firstInvalid = document.querySelector('.ng-invalid');
    if (firstInvalid) (firstInvalid as HTMLElement).scrollIntoView({ behavior: 'smooth' });
  }
}

  
    onCancel() {
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
}