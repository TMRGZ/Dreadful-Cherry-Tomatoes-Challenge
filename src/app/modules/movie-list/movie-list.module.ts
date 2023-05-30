import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieListComponent} from './components/movie-list/movie-list.component';
import {DatasetControllerService} from "../../../../gen";
import {MovieCoverComponent} from './components/movie-cover/movie-cover.component';


@NgModule({
  declarations: [
    MovieListComponent,
    MovieCoverComponent
  ],
  exports: [
    MovieListComponent

  ],
  imports: [
    CommonModule
  ],
  providers: [
    {provide: 'DatasetControllerServiceInterface', useClass: DatasetControllerService}
  ]
})
export class MovieListModule {

}
