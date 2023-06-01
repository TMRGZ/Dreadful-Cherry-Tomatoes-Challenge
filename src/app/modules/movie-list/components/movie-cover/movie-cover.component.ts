import {Component, Input} from '@angular/core';
import {Movie} from "../../domain/model/movie";

@Component({
  selector: 'app-movie-cover',
  templateUrl: './movie-cover.component.html',
  styleUrls: ['./movie-cover.component.scss']
})
export class MovieCoverComponent {

  @Input() movie!: Movie

}
