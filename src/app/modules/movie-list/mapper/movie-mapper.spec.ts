import {MovieDto} from '../../../../../gen';
import {MovieImagesMapper} from './movie-images-mapper';
import {TestBed} from "@angular/core/testing";
import {MovieMapper} from "./movie-mapper";
import {Movie} from "../domain/model/movie";

describe('MovieMapper', () => {
  let movieMapper: MovieMapper;
  let movieImagesMapperMock: jasmine.SpyObj<MovieImagesMapper>;

  beforeEach(() => {
    movieImagesMapperMock = jasmine.createSpyObj('MovieImagesMapper', ['mapDtoToDomain']);

    TestBed.configureTestingModule({
      providers: [
        MovieMapper,
        {provide: MovieImagesMapper, useValue: movieImagesMapperMock}
      ]
    });

    movieMapper = TestBed.inject(MovieMapper);
  });

  it('should map DTO to domain', () => {
    const dto: MovieDto = {
      title: 'TEST',
      description: 'TEST',
      images: {},
      releaseYear: 123
    };

    movieImagesMapperMock.mapDtoToDomain.and.returnValue({});

    const result: Movie = movieMapper.mapDtoToDomain(dto);

    expect(result).toBeDefined();
    expect(result.title).toEqual('TEST');
    expect(result.description).toEqual('TEST');
    expect(result.releaseYear).toEqual(123);
    expect(movieImagesMapperMock.mapDtoToDomain).toHaveBeenCalledWith(dto.images);
  });

  it('should map DTO list to domain list', () => {
    const dtoList: MovieDto[] = [{
      title: 'TEST',
      description: 'TEST',
      images: {},
      releaseYear: 123
    }];

    movieImagesMapperMock.mapDtoToDomain.and.returnValue({});

    const result: Movie[] = movieMapper.mapDtoListToDomain(dtoList);

    result.forEach(movie => {
      expect(movie).toBeDefined();
      expect(movie.title).toBeDefined();
      expect(movie.description).toBeDefined();
      expect(movie.releaseYear).toBeDefined();
    })

    expect(movieImagesMapperMock.mapDtoToDomain).toHaveBeenCalledTimes(result.length);
  });
});
