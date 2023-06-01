import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../service/movie.service";
import {Result} from "../../domain/model/result";
import {Movie} from "../../domain/model/movie";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];
  filteredMovies: Movie[] = [];

  searchTerm: string = '';

  page: number = 1;
  pageSize: number = 10;

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.loadMovies();
  }

  private loadMovies() {
    this.movieService.getMovies().subscribe((result: Result) => {
      this.movies = this.sortMovies(result.entries);
      this.filteredMovies = this.movies
    })
  }

  private sortMovies(unsortedMovies: Movie[]): Movie[] {
    return unsortedMovies.sort((firstMovie, secondMovie) => secondMovie.releaseYear! - firstMovie.releaseYear!);
  }

  applySearchFilter() {
    this.filteredMovies = this.movies.filter((movie: Movie) => movie.title?.toLowerCase().includes(this.searchTerm.toLowerCase()))
  }

  applyPagination(movieList: Movie[]): Movie[] {
    return movieList.slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
  }
}
