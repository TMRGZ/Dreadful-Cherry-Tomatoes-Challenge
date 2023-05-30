import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../service/movie.service";
import {Result} from "../../domain/model/result";
import {Movie} from "../../domain/model/movie";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  searchTerm: string = '';

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.loadMovies();
  }

  private loadMovies() {
    this.movieService.getMovies().subscribe((result: Result) => {
      this.movies = result.entries ?? [];
      this.filteredMovies = this.movies
    })
  }

  applySearchFilter() {
    this.filteredMovies = this.movies.filter((movie: Movie) => movie.title?.toLowerCase().includes(this.searchTerm.toLowerCase()))
  }
}
