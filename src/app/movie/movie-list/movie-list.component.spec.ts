import { TestBed, async, ComponentFixture, tick, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MovieService } from '../movie.service';
import { MockMovieService } from 'src/app/test/mock-services/movie-mock.service';
import { MovieListComponent } from './movie-list.component';
import { MockMovieList } from 'src/app/test/mock-data/movie';
import { By } from '@angular/platform-browser';
import { MovieListItemComponent } from '../movie-list-item/movie-list-item.component';

describe('MovieComponent', () => {

    let component: MovieListComponent;
    let fixture: ComponentFixture<MovieListComponent>;


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                MovieListComponent,
                MovieListItemComponent
            ],
            providers: [
                { provide: MovieService, useClass: MockMovieService },
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MovieListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the movie list', () => {
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });


    it('should render movie list', fakeAsync(() => {
        fixture.detectChanges();

        component.movies = MockMovieList.Search;
        tick();
        fixture.detectChanges();
        const app = fixture.debugElement.componentInstance;
        const childDebugElement = fixture.debugElement.queryAll(By.directive(MovieListItemComponent));

        expect(childDebugElement.length).toEqual(MockMovieList.Search.length, undefined);

    }));
});
