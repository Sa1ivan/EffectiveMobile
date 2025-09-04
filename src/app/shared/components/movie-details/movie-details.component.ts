import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {MoviesService} from "../../../core/services/movies.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Observable} from "rxjs";
import {IMovieDetails} from "../../models/movie.model";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailsComponent {
  details$!: Observable<IMovieDetails>;

  constructor(
    private movies: MoviesService,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }
  ) {
    this.details$ = this.movies.getMovieDetails(data.id);
  }
}
