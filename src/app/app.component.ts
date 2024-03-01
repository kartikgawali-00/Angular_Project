import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PointTableComponent } from "./pages/point-table/point-table.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterModule, PointTableComponent]
})
export class AppComponent {
  title = 'Cricket_Project';
}
