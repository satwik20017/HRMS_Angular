import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HrmsService } from '../hrms.service';
import { EmployeeService } from '../employee.service';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NotExpr } from '@angular/compiler';

@Component({
  selector: 'app-employees',
  imports: [CommonModule, FormsModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent implements OnInit {

  constructor(private empService: EmployeeService, private router: Router, hrmsService: HrmsService, private authService: AuthService) {
  }
  employees: any = [];
  loading = true;
  error: string | null = null;

  ngOnInit(): void {
    this.authService.getAllEmployees().subscribe({
      next: (res) => {
        this.employees = res.data;
        this.loading = false
      },
      error: (err) => {
        this.error = `Failed to load employees`;
        this.loading = false;
      }
    });
  }

  goToAddEmployee() {
    this.router.navigate(['/add-employee'])
  }

  deleteEmployee(id: number){
    this.authService.deleteEmployee(id)
    .subscribe({
      next: () => {
        this.employees = this.employees.filter((e: any) => e.id !== id)
      },
      error: (err) => {
        console.log(`Error in deleting employee`, err);
      }
    })
  }

}
