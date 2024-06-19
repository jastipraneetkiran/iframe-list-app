import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-movie-header',
  standalone: true,
  imports: [],
  templateUrl: './app-movie-header.component.html',
  styleUrl: './app-movie-header.component.css'
})
export class AppMovieHeaderComponent {
  @Input() movie: any;
}
