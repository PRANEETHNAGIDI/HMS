import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login implements OnInit {
  loginForm!: FormGroup;
  loginError: boolean = false; // 👈 Add this

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      role: ['', [Validators.required]]
    });
  }
onSubmit() {
  const { email, password, role } = this.loginForm.value;

  type Role = 'Staff' | 'Admin' | 'Patient';

  const credentials: Record<Role, { email: string; password: string }> = {
    Staff: { email: 'staff@gmail.com', password: '123456' },
    Admin: { email: 'admin@gmail.com', password: '123456' },
    Patient: { email: 'pra@gmail.com', password: '123456' }
  };

  if (role in credentials) {
    const user = credentials[role as Role];

    if (email === user.email && password === user.password) {
      this.loginError = false;

      // ✅ Store role and email
      localStorage.setItem('userRole', role);
      localStorage.setItem('userEmail', email);

      // Navigate to respective dashboard
      switch (role) {
        case 'Staff':
          this.router.navigate(['/dashboard']);
          break;
        case 'Admin':
          this.router.navigate(['/adminDashboard']);
          break;
        case 'Patient':
          this.router.navigate(['/patientDashboard']);
          break;
      }
    } else {
      this.loginError = true;
      alert('Email or password does not match the selected role.');
    }
  } else {
    this.loginError = true;
    alert('Invalid role selected.');
  }
}

}
