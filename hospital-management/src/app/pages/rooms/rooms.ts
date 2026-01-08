import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Nav } from '../../nav/nav';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, Nav],
  templateUrl: './rooms.html',
  styleUrls: ['./rooms.scss']
})
export class Rooms implements OnInit {
  formError: boolean = false;

  roomForm!: FormGroup;
  assignmentForm!: FormGroup;

  availableRooms = [
    { id: 101, type: 'A.C Room', isAvailable: true },
    { id: 102, type: 'A.C Room', isAvailable: true },
    { id: 103, type: 'A.C Room', isAvailable: true },
    { id: 201, type: 'Special Room', isAvailable: true },
    { id: 202, type: 'Special Room', isAvailable: true },
    { id: 203, type: 'Special Room', isAvailable: true },
    { id: 204, type: 'Super Deluxe Room', isAvailable: true },
    { id: 301, type: 'Super Deluxe Room', isAvailable: true },
    { id: 302, type: 'Super Deluxe Room', isAvailable: true },
    { id: 401, type: 'I.C.U', isAvailable: true },
    { id: 402, type: 'I.C.U', isAvailable: true },
    { id: 403, type: 'I.C.U', isAvailable: true },
  ];

  filteredRooms: any[] = [];

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.roomForm = this.fb.group({
      roomType: ['', Validators.required],
      roomRate: ['', [Validators.required, Validators.min(0)]],
      isAvailable: [true]
    });

    this.assignmentForm = this.fb.group({
      patientId: ['', Validators.required],
      roomType: ['', Validators.required],
      roomId: ['', Validators.required],
      assignedDate: ['', Validators.required],
      dischargeDate: ['']
    });

    this.assignmentForm.get('roomType')?.valueChanges.subscribe(selectedType => {
      this.filteredRooms = this.availableRooms.filter(
        room => room.type === selectedType && room.isAvailable
      );
      this.assignmentForm.get('roomId')?.setValue('');
    });
  }

onSubmitRoom() {
  if (this.roomForm.valid) {
    this.formError = false;
    alert('Room added successfully!');
    this.roomForm.reset({ isAvailable: true });
  } else {
    this.formError = true;
    Object.values(this.roomForm.controls).forEach(control => control.markAsTouched());
    const firstInvalid = document.querySelector('.ng-invalid');
    if (firstInvalid) (firstInvalid as HTMLElement).scrollIntoView({ behavior: 'smooth' });
  }
}

onSubmitAssignment() {
  if (this.assignmentForm.valid) {
    this.formError = false;
    alert('Patient assigned to room successfully!');
    this.assignmentForm.reset();
  } else {
    this.formError = true;
    Object.values(this.assignmentForm.controls).forEach(control => control.markAsTouched());
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