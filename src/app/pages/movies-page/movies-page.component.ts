import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MoviesService} from '../../core/services/movies.service';
import {ErrorHandlerService} from '../../core/services/error-handler.service';
import {IMovies, IMovieShort} from "../../shared/models/movie.model";
import {FormControl} from "@angular/forms";
import {catchError, debounceTime, distinctUntilChanged, of, startWith} from 'rxjs';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesPageComponent implements OnInit {
  public query = new FormControl('');
  public loading = false;
  public movies: IMovieShort[] = [];

  public pageIndex = 0;
  public pageSize = 20;
  public totalResults = 250;

  private currentQuery = '';

  constructor(
    private moviesService: MoviesService,
    private err: ErrorHandlerService,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.query.valueChanges.pipe(
      startWith(''),
      debounceTime(600),
      distinctUntilChanged()
    ).subscribe(value => {
      this.currentQuery = (value || '').toString().trim();
      this.pageIndex = 0;
      this.loadMovies();
    });
  }

  public onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadMovies();
  }

  private loadMovies() {
    this.loading = true;
    const page = this.pageIndex + 1;

    const obs = this.currentQuery
      ? this.moviesService.searchMovies(this.currentQuery, page)
      : this.moviesService.getTopMovies(page);

    obs.pipe(
      catchError(e => {
        this.err.show(e?.message || 'Ошибка сети');
        return of({} as IMovies);
      })
    ).subscribe(list => {
      this.movies = list?.items ?? list?.films ?? [];
      this.totalResults = list?.total ?? list?.searchFilmsCountResult ?? 0;
      this.loading = false;
      this.cdr.markForCheck();
    });
  }
}
