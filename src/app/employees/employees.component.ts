import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HrmsService } from '../hrms.service';

@Component({
  selector: 'app-employees',
  imports: [CommonModule, FormsModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent implements OnInit {

  constructor(private hrmsService: HrmsService) { }


  employees: any[] = [];
  newEmployee = { name: '', role: '', status: '' }

  showDetails: boolean = false;
 
  ngOnInit() {
    this.employees = this.hrmsService.getEmployees();
  }

  addEmployee(form: any) {
    if (form.valid) {
      const newId = this.employees.length + 1;
      this.hrmsService.addEmployee({ id: newId, ...this.newEmployee });
      this.newEmployee = { name: '', role: '', status: '' }; // reset form
      form.reset();
    }
  }

}
