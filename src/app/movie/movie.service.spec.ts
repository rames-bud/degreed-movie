import { TestBed } from '@angular/core/testing';
import { MovieService } from './movie.service';
import {
  HttpTestingController,
  HttpClientTestingModule
} from '@angular/common/http/testing';
import { MockMovieList, MockMovieDetail } from '../test/mock-data/movie';
import { APIConstant } from '../core/constant/api.constant';

describe('MovieService', () => {
  let service: MovieService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService]
    });
    service = TestBed.get(MovieService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: MovieService = TestBed.get(MovieService);
    expect(service).toBeTruthy();
  });

  it('should return 2 movie list', () => {
    const service: MovieService = TestBed.get(MovieService);
    const search = 'Batman';
    service.getMovies().subscribe(movies => {
      expect(movies.Search.length).toBe(2);
      expect(movies).toEqual(MockMovieList);
    });
    const request = httpMock.expectOne(`${APIConstant.basePath}&s=${search}`);
    expect(request.request.method).toBe('GET');
    request.flush(MockMovieList);
  });

  it('should return  movie details', () => {
    const service: MovieService = TestBed.get(MovieService);
    const id = 'tt0372784';
    service.getMovieDetails(id).subscribe(movies => {
      expect(movies.Title).toBe('Batman Begins');
    });
    const request = httpMock.expectOne(`${APIConstant.basePath}&i=${id}`);
    expect(request.request.method).toBe('GET');
    request.flush(MockMovieDetail);
  });
});
