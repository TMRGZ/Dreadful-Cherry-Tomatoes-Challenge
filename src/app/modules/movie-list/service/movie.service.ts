import {Inject, Injectable} from '@angular/core';
import {DatasetControllerServiceInterface, ResultDto} from "../../../../../gen";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(@Inject('DatasetControllerServiceInterface') private datasetControllerService: DatasetControllerServiceInterface) {
  }

  getMovies(): Observable<ResultDto> {
    return this.datasetControllerService.getData()
  }
}
