import {
  TestBed,
  async,
  ComponentFixture,
  tick,
  fakeAsync
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MovieListItemComponent } from './movie-list-item.component';
import { MovieService } from '../movie.service';
import {
  MockMovieService,
  MockMovieErrorService
} from 'src/app/test/mock-services/movie-mock.service';

describe('MovieComponent', () => {
  let component: MovieListItemComponent;
  let fixture: ComponentFixture<MovieListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [MovieListItemComponent],
      providers: [{ provide: MovieService, useClass: MockMovieService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the movie details', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should get movie details', fakeAsync(() => {
    fixture.detectChanges();

    component.movieId = 'tt0372784';
    component.ngOnInit();
    tick();
    fixture.detectChanges();

    expect(component.movieDetails.imdbID).toEqual(component.movieId, undefined);
  }));
});

describe('MovieComponent with Error Service', () => {
  let component: MovieListItemComponent;
  let fixture: ComponentFixture<MovieListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [MovieListItemComponent],
      providers: [{ provide: MovieService, useClass: MockMovieErrorService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the movie details', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should get movie details with error', fakeAsync(() => {
    fixture.detectChanges();

    component.movieId = 'tt0372784';
    component.ngOnInit();
    tick();
    fixture.detectChanges();

    expect(component.movieDetails).toEqual(undefined, undefined);
  }));
});
