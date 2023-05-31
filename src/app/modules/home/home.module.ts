import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {HomeComponent} from './components/home/home.component';
import {MovieListModule} from "../movie-list/movie-list.module";
import {HomeFooterComponent} from './components/home-footer/home-footer.component';
import {HomeNavbarComponent} from './components/home-navbar/home-navbar.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeFooterComponent,
    HomeNavbarComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    MovieListModule
  ]
})
export class HomeModule {
}
