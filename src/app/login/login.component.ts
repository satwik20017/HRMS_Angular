import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  year = 2025;
  
  constructor(private router: Router, private authService: AuthService) { }

  onLogin() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Invalid crendentials';
      return
    }

    this.authService.login({ email: this.email, password: this.password }).subscribe({
      next: (res) => {
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.errorMessage = err.error.message || 'Invalid crendentials';
      }
    })
  }
}
