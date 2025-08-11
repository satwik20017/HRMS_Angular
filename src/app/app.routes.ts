import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';

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
    }
];
