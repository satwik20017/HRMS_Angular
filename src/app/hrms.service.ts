import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HrmsService {

  private employees = [
    { id: 1, name: 'John Doe', role: 'Developer', status: 'Active' },
    { id: 2, name: 'Jane Smith', role: 'HR Manager', status: 'On Leave' },
    { id: 3, name: 'Robert Brown', role: 'Designer', status: 'Resigned' }
  ];

  private leaves: any[] = [];

  getEmployees() {
    return this.employees;
  }

  addEmployee(emp: any) {
    this.employees.push(emp);
  }

  getLeaves() {
    return this.leaves;
  }

  addLeave(leave: any) {
    this.leaves.push(leave);
  }

}
