import { Component, Input, OnInit } from '@angular/core';
import { MovieDetails } from 'src/app/model/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.sass']
})
export class MovieListItemComponent implements OnInit {
  @Input()
  movieId: string;

  @Input()
  index: number;

  movieDetails: MovieDetails;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getMovieDetails();
  }

  private getMovieDetails() {
    this.movieService.getMovieDetails(this.movieId).subscribe(
      result => {
        this.movieDetails = result;
      },
      error => {
        console.error(error);
      }
    );
  }
}
