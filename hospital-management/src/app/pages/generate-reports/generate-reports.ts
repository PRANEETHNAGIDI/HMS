import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generate-reports',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './generate-reports.html',
  styleUrls: ['./generate-reports.scss']
})
export class GenerateReports implements OnInit {
  reportForm!: FormGroup;
  formError = false;
  reportGenerated = false;
  reportData: any;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.reportForm = this.fb.group({
      patientName: ['', Validators.required],
      patientId: ['', Validators.required],
      tests: this.fb.array([this.createTestGroup()])
    });
  }

  get tests(): FormArray {
    return this.reportForm.get('tests') as FormArray;
  }

  createTestGroup(): FormGroup {
    return this.fb.group({
      testName: ['', Validators.required],
      result: ['', Validators.required],
      reference: ['']
    });
  }

  addTest(): void {
    this.tests.push(this.createTestGroup());
  }

  removeTest(index: number): void {
    if (this.tests.length > 1) {
      this.tests.removeAt(index);
    }
  }

  onSubmit(): void {
    if (this.reportForm.valid) {
      this.formError = false;
      this.reportData = this.reportForm.value;
      this.reportGenerated = true;
    } else {
      this.formError = true;
      this.reportForm.markAllAsTouched();
    }
  }

  clearForm(): void {
    this.reportForm.reset();
    this.tests.clear();
    this.tests.push(this.createTestGroup());
    this.reportGenerated = false;
    this.formError = false;
  }

  downloadReport(): void {
    const { patientName, patientId, tests } = this.reportData;
    let content = `Patient Name: ${patientName}\nPatient ID: ${patientId}\n\nTest Results:\n`;

    tests.forEach((test: any, index: number) => {
      content += `\n${index + 1}. ${test.testName}\n   Result: ${test.result}\n   Reference: ${test.reference || 'N/A'}\n`;
    });

    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Report_${patientId}.txt`;
    a.click();
    window.URL.revokeObjectURL(url);
  }

  onCancel(): void {
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