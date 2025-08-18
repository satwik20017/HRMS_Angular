import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { LeavesComponent } from './leaves/leaves.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path:'dashboard',
        component:DashboardComponent
    },
    {
        path:'employees',
        component:EmployeesComponent
    },
    {
        path:'leaves',
        component:LeavesComponent
    },
    {
        path: 'add-employee',
        component: AddemployeeComponent
    }
];
