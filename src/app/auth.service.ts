import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials)
  }

  logout() {
    localStorage.removeItem('token'); // clear session
  }

  register(data: { username: string, email: string, password: string }) {
    return this.http.post(`${this.apiUrl}/register`, data)
  }

  forgotPassword(data: { email: string, otp: number, password: string }) {
    return this.http.post(`${this.apiUrl}/forgot-password`, data);
  }

  addEmployee(employeeData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add-employee`, employeeData);
  }

  getAllEmployees() {
    return this.http.get<{ data: any[] }>(`${this.apiUrl}/employees`)
  }

  getEmployeeById(id: number) {
    return this.http.get(`${this.apiUrl}/employees/${id}`)
  }

  deleteEmployee(id: any) {
    return this.http.delete<any>(`${this.apiUrl}/deleteEmployee/${id}`)
  }

}
