import {ResultMapper} from './result-mapper';
import {TestBed} from "@angular/core/testing";
import {MovieMapper} from "./movie-mapper";
import {ResultDto} from "../../../../../gen";
import {Result} from "../domain/model/result";

describe('ResultMapper', () => {
  let resultMapper: ResultMapper;
  let movieMapperMock: jasmine.SpyObj<MovieMapper>;

  beforeEach(() => {
    movieMapperMock = jasmine.createSpyObj('MovieMapper', ['mapDtoListToDomain']);

    TestBed.configureTestingModule({
      providers: [
        ResultMapper,
        {provide: MovieMapper, useValue: movieMapperMock}
      ]
    });

    resultMapper = TestBed.inject(ResultMapper);
  });

  it('should map DTO to domain', () => {
    const dto: ResultDto = {
      total: 0,
      entries: []
    };

    movieMapperMock.mapDtoListToDomain.and.returnValue([]);

    const result: Result = resultMapper.mapDtoToDomain(dto);

    expect(result).toBeDefined();
    expect(result.total).toEqual(0);
    expect(movieMapperMock.mapDtoListToDomain).toHaveBeenCalledWith(dto.entries);
  });
});
