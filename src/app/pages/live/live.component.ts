import { Component, OnInit } from '@angular/core';
import { MatchCardComponent } from '../../match-card/match-card.component';

@Component({
  selector: 'app-live',
  standalone: true,
  imports: [MatchCardComponent],
  templateUrl: './live.component.html',
  styleUrl: './live.component.css'
})
export class LiveComponent{
  
        liveMatches:any

}