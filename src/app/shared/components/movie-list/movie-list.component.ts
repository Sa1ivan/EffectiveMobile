import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IMovieShort } from "../../models/movie.model";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieListComponent {
  @Input() movies: IMovieShort[] = [];
  trackById(index: number, item: IMovieShort) { return item.kinopoiskId; }
}
