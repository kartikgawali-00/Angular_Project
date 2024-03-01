import { Component } from '@angular/core';

@Component({
  selector: 'app-point-table',
  standalone: true,
  imports: [],
  templateUrl: './point-table.component.html',
  styleUrl: './point-table.component.css'
})
export class PointTableComponent {
  pointTable = [
    { name: 'Team A', matchesPlayed: 5, wins: 3, draws: 1, losses: 1, points: 10 },
    { name: 'Team B', matchesPlayed: 5, wins: 2, draws: 2, losses: 1, points: 8 },
    // Add more teams as needed
  ];
}
