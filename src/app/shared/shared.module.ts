import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieCardComponent} from './components/movie-card/movie-card.component';
import {MovieDetailsComponent} from './components/movie-details/movie-details.component';
import {TruncatePipe} from './pipes/truncate.pipe';
import {MovieListComponent} from './components/movie-list/movie-list.component';
import {LazyImgDirective} from "./utils/lazy-img.directive";


@NgModule({
  declarations: [
    MovieCardComponent,
    MovieDetailsComponent,
    TruncatePipe,
    MovieListComponent,
    LazyImgDirective
  ],
  exports: [
    MovieCardComponent,
    MovieDetailsComponent,
    TruncatePipe,
    MovieListComponent,
    LazyImgDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
