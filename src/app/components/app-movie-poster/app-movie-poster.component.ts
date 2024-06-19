import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-poster',
  standalone: true,
  imports: [],
  templateUrl: './app-movie-poster.component.html',
  styleUrl: './app-movie-poster.component.css'
})
export class AppMoviePosterComponent {
  @Input() posterUrl!: string;
}
