import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [],
  templateUrl: './app-movie-details.component.html',
  styleUrl: './app-movie-details.component.css'
})
export class AppMovieDetailsComponent {
  @Input() movie: any;
}
