import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  imports: [CommonModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {
  employees = [
    { id: 1, name: 'John Doe', role: 'Developer', status: 'Active' },
    { id: 2, name: 'Jane Smith', role: 'HR Manager', status: 'On Leave' },
    { id: 3, name: 'Robert Brown', role: 'Designer', status: 'Resigned' }
  ];

  showDetails: boolean = false;
}
