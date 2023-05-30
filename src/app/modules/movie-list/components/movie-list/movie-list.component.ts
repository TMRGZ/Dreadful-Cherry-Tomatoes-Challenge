import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../service/movie.service";
import {Result} from "../../domain/model/result";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.movieService.getMovies().subscribe((result: Result) => {
      console.log(result)
    })
  }
}
