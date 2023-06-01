import {Injectable} from '@angular/core';
import {DatasetControllerService, ResultDto} from "../../../../../gen";
import {map, Observable} from "rxjs";
import {ResultMapper} from "../mapper/result-mapper";
import {Result} from "../domain/model/result";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private datasetControllerService: DatasetControllerService,
              private resultMapper: ResultMapper) {
  }

  getMovies(): Observable<Result> {
    return this.datasetControllerService.getData()
      .pipe(map((dto: ResultDto) => this.resultMapper.mapDtoToDomain(dto)))
  }
}
