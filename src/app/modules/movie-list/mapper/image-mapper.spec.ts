import {ImageDto} from '../../../../../gen';
import {Image} from '../domain/model/image';
import {ImageMapper} from './image-mapper';
import {TestBed} from "@angular/core/testing";

describe('ImageMapper', () => {
  let imageMapper: ImageMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageMapper]
    });

    imageMapper = TestBed.inject(ImageMapper);
  });

  it('should map DTO to domain', () => {
    const dto: ImageDto = {
      url: 'TEST',
      width: 123,
      height: 123
    };

    const result: Image = imageMapper.mapDtoToDomain(dto);

    expect(result.url).toEqual('TEST');
    expect(result.width).toEqual(123);
    expect(result.height).toEqual(123);
  });

  it('should handle undefined DTO', () => {
    const result: Image = imageMapper.mapDtoToDomain(undefined);

    expect(result.width).toBeUndefined();
    expect(result.height).toBeUndefined();
    expect(result.url).toBeUndefined();
  });
});
