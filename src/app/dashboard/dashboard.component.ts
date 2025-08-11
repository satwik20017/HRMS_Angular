import { Component } from '@angular/core';
import { StatsCardComponent } from "../stats-card/stats-card.component";

@Component({
  selector: 'app-dashboard',
  imports: [StatsCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  onCardSelected(cardTitle: string) {
    alert(`You clicked on ${cardTitle}`);
  }
}
