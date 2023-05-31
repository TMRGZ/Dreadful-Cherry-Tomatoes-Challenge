import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieListComponent} from './components/movie-list/movie-list.component';
import {DatasetControllerService} from "../../../../gen";
import {MovieCoverComponent} from './components/movie-cover/movie-cover.component';
import {FormsModule} from "@angular/forms";
import {
  NgbPagination,
  NgbPaginationEllipsis,
  NgbPaginationFirst,
  NgbPaginationLast,
  NgbPaginationNext,
  NgbPaginationNumber,
  NgbPaginationPrevious
} from "@ng-bootstrap/ng-bootstrap";


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
    FormsModule,
    NgbPagination,
    NgbPaginationPrevious,
    NgbPaginationNext,
    NgbPaginationFirst,
    NgbPaginationLast,
    NgbPaginationEllipsis,
    NgbPaginationNumber
  ],
  providers: [
    {provide: 'DatasetControllerServiceInterface', useClass: DatasetControllerService}
  ]
})
export class MovieListModule {

}
