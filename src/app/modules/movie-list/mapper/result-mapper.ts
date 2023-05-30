import {ResultDto} from "../../../../../gen";
import {Result} from "../domain/model/result";
import {MovieMapper} from "./movie-mapper";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ResultMapper {


  constructor(private movieMapper: MovieMapper) {
  }

  mapDtoToDomain(dto: ResultDto): Result {
    const entriesDto = dto.entries ?? [];

    return {
      total: dto.total,
      entries: this.movieMapper.mapDtoListToDomain(entriesDto)
    };
  }
}
