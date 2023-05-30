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

  movies: Movie[] = []

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.loadMovies();
  }

  private loadMovies() {
    this.movieService.getMovies().subscribe((result: Result) => {
      this.movies = result.entries ?? [];
    })
  }
}
