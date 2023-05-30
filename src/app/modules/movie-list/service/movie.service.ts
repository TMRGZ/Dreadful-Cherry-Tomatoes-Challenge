import {Inject, Injectable} from '@angular/core';
import {DatasetControllerServiceInterface, ResultDto} from "../../../../../gen";
import {map, Observable} from "rxjs";
import {ResultMapper} from "../mapper/result-mapper";
import {Result} from "../domain/model/result";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(@Inject('DatasetControllerServiceInterface') private datasetControllerService: DatasetControllerServiceInterface,
              private resultMapper: ResultMapper) {
  }

  getMovies(): Observable<Result> {
    return this.datasetControllerService.getData()
      .pipe(map((dto: ResultDto) => this.resultMapper.mapDtoToDomain(dto)))
  }
}
