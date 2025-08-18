import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employees: any[] = [
    { id: 1, name: 'John Doe', role: 'Developer', status: 'Active' },
    { id: 2, name: 'Jane Smith', role: 'HR Manager', status: 'On Leave' },
    { id: 3, name: 'Robert Brown', role: 'Designer', status: 'Resigned' }
  ];

  private leaves = [];

  getEmployees() {
    return this.employees;
  }

  getLeaves() {
    return this.leaves;
  }
  addEmployee(employee: any) {
    employee.id = this.employees.length + 1;
    this.employees.push(employee)
  }

}
