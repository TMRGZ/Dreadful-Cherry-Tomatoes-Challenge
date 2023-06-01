import {fakeAsync, TestBed} from '@angular/core/testing';
import {MovieService} from './movie.service';
import {DatasetControllerService, ResultDto} from '../../../../../gen';
import {ResultMapper} from '../mapper/result-mapper';
import {Result} from '../domain/model/result';
import {of} from "rxjs";
import {HttpResponse} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('MovieService', () => {
  let movieService: MovieService;
  let datasetControllerServiceMock: jasmine.SpyObj<DatasetControllerService>;
  let resultMapperMock: jasmine.SpyObj<ResultMapper>;

  beforeEach(() => {
    datasetControllerServiceMock = jasmine.createSpyObj('DatasetControllerService', ['getData']);
    resultMapperMock = jasmine.createSpyObj('ResultMapper', ['mapDtoToDomain']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        MovieService,
        {provide: 'DatasetControllerService', useValue: datasetControllerServiceMock},
        {provide: ResultMapper, useValue: resultMapperMock}
      ]
    });

    movieService = TestBed.inject(MovieService);
  });

  it('should be created', () => {
    expect(movieService).toBeTruthy();
  });

  it('should return movies and map the result', fakeAsync(() => {
    const resultDto: ResultDto = {
      total: 0,
      entries: []
    };

    const responseResultDto: HttpResponse<ResultDto> = new HttpResponse<ResultDto>({
      body: resultDto
    })

    datasetControllerServiceMock.getData.and.returnValue(of(responseResultDto));

    movieService.getMovies().subscribe((result: Result) => {
      expect(result).toBeDefined();
      expect(datasetControllerServiceMock.getData).toHaveBeenCalled();
      expect(resultMapperMock.mapDtoToDomain).toHaveBeenCalledWith(resultDto);
    });
  }));
});
