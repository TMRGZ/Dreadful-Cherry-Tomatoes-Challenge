import {MovieImagesDto} from '../../../../../gen';
import {MovieImages} from '../domain/model/movieImages';
import {MovieImagesMapper} from './movie-images-mapper';
import {ImageMapper} from './image-mapper';
import {TestBed} from "@angular/core/testing";

describe('MovieImagesMapper', () => {
  let movieImagesMapper: MovieImagesMapper;
  let imageMapperMock: jasmine.SpyObj<ImageMapper>;

  beforeEach(() => {
    imageMapperMock = jasmine.createSpyObj('ImageMapper', ['mapDtoToDomain']);

    TestBed.configureTestingModule({
      providers: [
        MovieImagesMapper,
        {provide: ImageMapper, useValue: imageMapperMock}
      ]
    });

    movieImagesMapper = TestBed.inject(MovieImagesMapper);
  });

  it('should map DTO to domain', () => {
    const dto: MovieImagesDto = {posterArt: {}};

    imageMapperMock.mapDtoToDomain.and.returnValue({});

    const result: MovieImages = movieImagesMapper.mapDtoToDomain(dto);

    expect(result).toBeDefined();
    expect(imageMapperMock.mapDtoToDomain).toHaveBeenCalledWith(dto.posterArt);
  });

  it('should handle undefined DTO', () => {
    const result: MovieImages = movieImagesMapper.mapDtoToDomain(undefined);

    expect(result.posterArt).toBeUndefined();
    expect(imageMapperMock.mapDtoToDomain).toHaveBeenCalledWith(undefined);
  });
});
