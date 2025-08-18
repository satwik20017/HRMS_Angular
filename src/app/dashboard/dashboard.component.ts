import { Component, OnInit } from '@angular/core';
import { StatsCardComponent } from "../stats-card/stats-card.component";
import { HrmsService } from '../hrms.service';

@Component({
  selector: 'app-dashboard',
  imports: [StatsCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  totalEmployees = 0;
  totalLeaves = 0;

  constructor(private hrmsService: HrmsService) { }

  ngOnInit() {
    this.totalEmployees = this.hrmsService.getEmployees();
    this.totalLeaves = this.hrmsService.getLeaves().length;
  }

  onCardSelected(cardTitle: string) {
    alert(`You clicked on ${cardTitle}`);
  }
}
