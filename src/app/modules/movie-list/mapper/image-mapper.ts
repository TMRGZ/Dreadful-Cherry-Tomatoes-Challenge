import {ImageDto} from "../../../../../gen";
import {Image} from "../domain/model/image";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ImageMapper {

  mapDtoToDomain(dto?: ImageDto): Image {
    return {
      url: dto?.url,
      width: dto?.width,
      height: dto?.height
    };
  }
}
