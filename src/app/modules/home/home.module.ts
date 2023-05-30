import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {HomeComponent} from './components/home/home.component';
import {MovieListModule} from "../movie-list/movie-list.module";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    MovieListModule
  ]
})
export class HomeModule {
}
