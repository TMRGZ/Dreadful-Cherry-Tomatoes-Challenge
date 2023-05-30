import {MovieImagesDto} from "../../../../../gen";
import {ImageMapper} from "./image-mapper";
import {MovieImages} from "../domain/model/movieImages";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class MovieImagesMapper {

  constructor(private imageMapper: ImageMapper) {
  }

  mapDtoToDomain(dto?: MovieImagesDto): MovieImages {
    return {
      posterArt: this.imageMapper.mapDtoToDomain(dto?.posterArt!),
    };
  }
}
