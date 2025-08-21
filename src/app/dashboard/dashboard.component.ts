import { Component, OnInit } from '@angular/core';
import { StatsCardComponent } from "../stats-card/stats-card.component";
import { HrmsService } from '../hrms.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  imports: [StatsCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  totalEmployees = 0;
  totalLeaves = 0;

  constructor(private hrmsService: HrmsService, private authService: AuthService) { }

  ngOnInit() {
    this.authService.getAllEmployees().subscribe((response: { data: any[] }) => {
      this.totalEmployees = response.data.length;
    });
    this.totalLeaves = this.hrmsService.getLeaves().length;
  }

  onCardSelected(cardTitle: string) {
    alert(`You clicked on ${cardTitle}`);
  }

}
