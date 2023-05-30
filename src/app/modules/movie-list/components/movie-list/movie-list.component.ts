import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../service/movie.service";
import {ResultDto} from "../../../../../../gen";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.movieService.getMovies().subscribe((resultDto: ResultDto) => {
      console.log(resultDto)
    })
  }
}
