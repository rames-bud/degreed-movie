import { of } from 'rxjs/internal/observable/of';
import { MockMovieList, MockMovieDetail } from '../mock-data/movie';
import { Observable, throwError } from 'rxjs';

export class MockMovieService {

    getMovies(search: string = 'Batman'): Observable<any> {
        return of(MockMovieList);
    }

    getMovieDetails(id: string): Observable<any> {
        return of(MockMovieDetail);
    }

}


export class MockMovieErrorService {

    getMovies(search: string = 'Batman'): Observable<any> {
        return throwError('Error');

    }

    getMovieDetails(id: string): Observable<any> {
        return throwError('Error');
    }

}
