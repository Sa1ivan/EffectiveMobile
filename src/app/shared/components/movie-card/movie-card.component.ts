import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IMovieShort} from "../../models/movie.model";
import {MatDialog} from "@angular/material/dialog";
import {MovieDetailsComponent} from "../movie-details/movie-details.component";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieCardComponent {
  @Input() movie!: IMovieShort;

  constructor(private dialog: MatDialog) {
  }

  public showModal() {
    this.dialog.open(MovieDetailsComponent, {data: {id: this.movie.kinopoiskId}, width: '92vw', maxWidth: '720px'});
  }
}
