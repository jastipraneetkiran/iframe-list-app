import { Component,OnInit } from '@angular/core';
import { SelectionMovieData } from './selection-movie-data'
import { NgIf } from '@angular/common';
import { AppMovieHeaderComponent } from './components/app-movie-header/app-movie-header.component'
import { AppMoviePosterComponent } from './components/app-movie-poster/app-movie-poster.component'
import { AppMovieDetailsComponent } from './components/app-movie-details/app-movie-details.component'
import { AppMovieRatingComponent } from './components/app-movie-rating/app-movie-rating.component'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf,AppMovieHeaderComponent,AppMoviePosterComponent,AppMovieDetailsComponent,AppMovieRatingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  data?: SelectionMovieData;

  ngOnInit() {
    window.addEventListener('message', (event) => {
      this.data = event.data;
    });
  }

  isEmpty(obj: any ={}): boolean {
    return Object.keys(obj).length === 0;
  }
}
