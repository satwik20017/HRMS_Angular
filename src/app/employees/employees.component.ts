import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HrmsService } from '../hrms.service';
import { EmployeeService } from '../employee.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  imports: [CommonModule, FormsModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {

  constructor(private empService: EmployeeService, private router: Router, hrmsService: HrmsService) {
    this.employees = this.empService.getEmployees();
  }


  employees: any[] = [];
  newEmployee = { name: '', role: '', status: '' }

  showDetails: boolean = false;

  // ngOnInit() {
  //   this.employees = this.hrmsService.getEmployees();
  // }

  // addEmployee(form: any) {
  //   if (form.valid) {
  //     const newId = this.employees.length + 1;
  //     this.hrmsService.addEmployee({ id: newId, ...this.newEmployee });
  //     this.newEmployee = { name: '', role: '', status: '' }; // reset form
  //     form.reset();
  //   }
  // }

  goToAddEmployee() {
    this.router.navigate(['/add-employee'])
  }

}
