import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addemployee',
  imports: [FormsModule, CommonModule],
  templateUrl: './addemployee.component.html',
  styleUrl: './addemployee.component.css'
})
export class AddemployeeComponent {
  employees: any[] = [];
  newEmployee = { name: '', role: '', status: '' }

  showDetails: boolean = false;

  constructor(private empService: EmployeeService, private router: Router) { }

  addEmployee() {
    this.empService.addEmployee({ ...this.newEmployee });
    this.router.navigate(['/employees']);
  }

  goToAddEmployee() {
    this.router.navigate(['/add-employee'])
  }
}
