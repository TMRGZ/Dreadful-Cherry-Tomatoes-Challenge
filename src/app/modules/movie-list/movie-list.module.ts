import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieListComponent} from './components/movie-list/movie-list.component';
import {DatasetControllerService} from "../../../../gen";
import {MovieCoverComponent} from './components/movie-cover/movie-cover.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    MovieListComponent,
    MovieCoverComponent
  ],
  exports: [
    MovieListComponent

  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    {provide: 'DatasetControllerServiceInterface', useClass: DatasetControllerService}
  ]
})
export class MovieListModule {

}
