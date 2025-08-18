import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EmployeesComponent } from "./employees/employees.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent,
    RouterModule, CommonModule,
    FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HRMS_Angular';

  showNavbar: any = 'true';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const hideNavbarRoutes = ['/login', '/register', '/forgot-password'];
        this.showNavbar = !hideNavbarRoutes.includes(event.url);
      }
    });
  }

}
