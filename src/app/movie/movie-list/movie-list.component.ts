import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/model/movie';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.sass']
})
export class MovieListComponent {
  @Input()
  movies: Movie[];
}
