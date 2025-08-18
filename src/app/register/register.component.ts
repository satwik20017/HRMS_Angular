import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  username = '';
  email = '';
  password = '';
  confirmPassword = '';
  errorMessage = '';
  successMessage = '';

  constructor(private router: Router, private authService: AuthService) { }

  register() {
    if (!this.username || !this.email || !this.password) {
      this.errorMessage = 'Invalid credentials';
      return
    }
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    this.authService.register({ username: this.username, email: this.email, password: this.password })
      .subscribe({
        next: (res: any) => {
          if (res.success) {
            this.successMessage = 'Registration successful! Redirecting to login...';
            setTimeout(() => {
              this.router.navigate(['/login']);
            }, 3000);
          }
        },
        error: (err) => {
          this.errorMessage = err.error.message || 'Invalid data';
        }
      })
  }
}
