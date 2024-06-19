import { Component, Input } from '@angular/core';
import {NgFor} from '@angular/common'
@Component({
  selector: 'app-movie-rating',
  standalone: true,
  imports: [NgFor],
  templateUrl: './app-movie-rating.component.html',
  styleUrl: './app-movie-rating.component.css'
})
export class AppMovieRatingComponent {
  @Input() ratings?: any[];
}
