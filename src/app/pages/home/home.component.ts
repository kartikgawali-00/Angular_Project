import { Component } from '@angular/core';
import { PointTableComponent } from "../point-table/point-table.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [PointTableComponent]
})
export class HomeComponent {
  loading = true; // Set this value based on your loading condition
  latestMatches = []; // Replace this with your actual array of latest matches
}
