import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MovieListComponent} from './movie-list.component';
import {MovieService} from '../../service/movie.service';
import {Result} from '../../domain/model/result';
import {Movie} from '../../domain/model/movie';
import {of} from 'rxjs';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;
  let movieServiceMock: jasmine.SpyObj<MovieService>;

  beforeEach(async () => {
    movieServiceMock = jasmine.createSpyObj('MovieService', ['getMovies']);

    await TestBed.configureTestingModule({
      declarations: [MovieListComponent],
      providers: [{provide: MovieService, useValue: movieServiceMock}]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load movies on initialization', () => {
    const movies: Movie[] = [
      {title: 'Movie 1', releaseYear: 2021},
      {title: 'Movie 2', releaseYear: 2020},
      {title: 'Movie 3', releaseYear: 2019}
    ];
    const result: Result = {entries: movies, total: movies.length};

    movieServiceMock.getMovies.and.returnValue(of(result));

    component.ngOnInit();

    expect(component.movies).toEqual(movies);
    expect(component.filteredMovies).toEqual(movies);
  });

  it('should sort movies by release year in descending order', () => {
    const unsortedMovies: Movie[] = [
      {title: 'Movie 1', releaseYear: 2019},
      {title: 'Movie 2', releaseYear: 2021},
      {title: 'Movie 3', releaseYear: 2020}
    ];

    const sortedMovies = component['sortMovies'](unsortedMovies);

    const movieYears = sortedMovies.map(movie => movie.releaseYear);
    expect(movieYears).toEqual(movieYears.sort().reverse())
  });

  it('should filter movies based on search term', () => {
    let searchTerm: string = 'TEST';

    component.movies = [
      {title: 'Movie 1', releaseYear: 2021},
      {title: 'Movie 2', releaseYear: 2020},
      {title: 'TEST Movie', releaseYear: 2019}
    ];
    component.searchTerm = searchTerm;

    component.applySearchFilter();

    const allContainsSearchTerm: boolean =
      component.filteredMovies.every(movie => movie.title!.toLowerCase().includes(searchTerm.toLowerCase()))

    expect(allContainsSearchTerm).toBeTrue();
  });

  it('should apply pagination to movie list', () => {
    const movieNumber: number = 2;

    const movieList: Movie[] = [
      {title: 'Movie 1', releaseYear: 2021},
      {title: 'Movie 2', releaseYear: 2020},
      {title: 'Movie 3', releaseYear: 2019},
      {title: 'Movie 4', releaseYear: 2018},
      {title: 'Movie 5', releaseYear: 2017}
    ];

    component.pageSize = movieNumber;

    const paginatedMovies = component.applyPagination(movieList);

    expect(paginatedMovies.length).toEqual(movieNumber);
  });
});
