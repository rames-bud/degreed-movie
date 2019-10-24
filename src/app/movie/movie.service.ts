import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieList, MovieDetails } from '../model/movie';
import { APIConstant } from '../core/constant/api.constant';

@Injectable()
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovies(search: string = 'Batman'): Observable<MovieList> {
    return this.http.get<MovieList>(`${APIConstant.basePath}&s=${search}`);
  }

  getMovieDetails(id: string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`${APIConstant.basePath}&i=${id}`);
  }
}
