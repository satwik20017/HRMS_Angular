import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-addemployee',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './addemployee.component.html',
  styleUrl: './addemployee.component.css'
})
export class AddemployeeComponent implements OnInit {
  employeeForm!: FormGroup;
  successMessage: string | null = null;
  selectedEmployee: any;

  employeeId: number | null = null;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]]
    })

    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.employeeId = +params['id'];
        this.authService.getEmployeeById(this.employeeId).subscribe(
          (emp: any) => {
            if (emp && emp.data) {
              this.employeeForm.patchValue(emp.data);
            }
          }
        )
      }
    })


  }

  get f() {
    return this.employeeForm.controls;
  }

  animationKey = 0;

  onSubmit() {
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      return;
    }

    console.log('✅ Employee Data:', this.employeeForm.value);
    this.authService.addEmployee(this.employeeForm.value).subscribe({
      next: (res) => {
        console.log('Employee added successfully!', res);
        this.successMessage = 'Employee added successfully';
        this.animationKey++;
        this.employeeForm.reset();
        setTimeout(() => (this.successMessage = null), 3000);
      },
      error: (err) => {
        console.error('Failed to add employee:', err);
      }
    });
  }


}
