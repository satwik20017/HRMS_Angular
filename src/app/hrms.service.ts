import { Injectable } from '@angular/core';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class HrmsService {

  employeesCount = 0;
  leavesCount = 0;
  private employees = [
    { id: 1, name: 'John Doe', role: 'Developer', status: 'Active' },
    { id: 2, name: 'Jane Smith', role: 'HR Manager', status: 'On Leave' },
    { id: 3, name: 'Robert Brown', role: 'Designer', status: 'Resigned' }
  ];

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.updateCounts()
  }

  updateCounts() {
    this.employeesCount = this.empService.getEmployees().length;
    this.leavesCount = this.empService.getLeaves().length;
   
  }
  private leaves: any[] = [];

  getEmployees() {
    return this.employees.length;
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
