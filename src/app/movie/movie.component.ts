import { Component, OnInit } from '@angular/core';
import { MovieList, Movie } from '../model/movie';
import { MovieService } from './movie.service';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.sass']
})
export class MovieComponent implements OnInit {
  movieList: Movie[];
  currentYear: number = 0;
  tempList: Movie[];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getMovieList();
  }

  private getMovieList() {
    this.movieService.getMovies().subscribe(
      result => {
        this.tempList = [...result.Search];
        this.yearChanged(this.currentYear);
        console.log(this.movieList);
      },
      error => {
        console.error(error);
      }
    );
  }

  yearChanged(year: number) {
    this.currentYear = year;
    this.movieList = this.tempList.filter(
      x => year === 0 || (+x.Year > year && +x.Year < year + 10)
    );
  }
}
