import {Movie} from "../domain/model/movie";
import {MovieDto} from "../../../../../gen";
import {MovieImagesMapper} from "./movie-images-mapper";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class MovieMapper {


  constructor(private movieImagesMapper: MovieImagesMapper) {
  }

  mapDtoToDomain(dto: MovieDto): Movie {
    return {
      title: dto.title,
      description: dto.description,
      images: this.movieImagesMapper.mapDtoToDomain(dto.images),
      releaseYear: dto.releaseYear
    };
  }

  mapDtoListToDomain(dtoList: MovieDto[]): Movie[] {
    return dtoList.map((dto: MovieDto) => this.mapDtoToDomain(dto))
  }
}
