import {
  TestBed,
  async,
  ComponentFixture,
  tick,
  fakeAsync
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MovieComponent } from './movie.component';
import {
  MockMovieService,
  MockMovieErrorService
} from '../test/mock-services/movie-mock.service';
import { MovieService } from './movie.service';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieListItemComponent } from './movie-list-item/movie-list-item.component';

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        MovieComponent,
        MovieListComponent,
        MovieListItemComponent
      ],
      providers: [{ provide: MovieService, useClass: MockMovieService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the movie details', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should get movie list', fakeAsync(() => {
    fixture.detectChanges();

    component.ngOnInit();
    tick();
    fixture.detectChanges();

    expect(component.movieList.length).toEqual(2, undefined);
  }));

  it('should get 1990s movies', fakeAsync(() => {
    fixture.detectChanges();

    component.yearChanged(1990);
    tick();
    fixture.detectChanges();

    expect(component.movieList.length).toEqual(1, undefined);
  }));
});

describe('MovieComponent Service Error', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        MovieComponent,
        MovieListComponent,
        MovieListItemComponent
      ],
      providers: [{ provide: MovieService, useClass: MockMovieErrorService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should get movie list with error', fakeAsync(() => {
    fixture.detectChanges();

    component.ngOnInit();
    tick();
    fixture.detectChanges();

    expect(component.movieList).toBe(undefined);
  }));
});
