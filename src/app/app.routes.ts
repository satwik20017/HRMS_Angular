import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { LeavesComponent } from './leaves/leaves.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'employees',
        component: EmployeesComponent
    },
    {
        path: 'leaves',
        component: LeavesComponent
    },
    {
        path: 'add-employee',
        component: AddemployeeComponent
    },
    { path: 'register', component: RegisterComponent },
    { path: 'forgot-password', component: ForgetPasswordComponent },
];
