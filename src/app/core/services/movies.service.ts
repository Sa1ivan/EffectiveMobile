import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {IMovieDetails, IMovies} from "../../shared/models/movie.model";

@Injectable({providedIn: 'root'})

export class MoviesService {
  private readonly API_URL = 'https://kinopoiskapiunofficial.tech/api';

  constructor(private http: HttpClient) {
  }

  public getTopMovies(page: number = 1): Observable<IMovies> {
    const params = new HttpParams().set('page', page);

    return this.http.get<IMovies>(`${this.API_URL}/v2.2/films/collections`, {params})
      .pipe(map(res => res ?? []));
  }

  public searchMovies(keyword: string, page = 1): Observable<IMovies> {
    const params = new HttpParams().set('keyword', keyword).set('page', String(page));
    return this.http.get<any>(`${this.API_URL}/v2.1/films/search-by-keyword`, {params})
      .pipe(map(res => res ?? []));
  }

  public getMovieDetails(id: number) {
    return this.http.get<IMovieDetails>(`${this.API_URL}/v2.2/films/${id}`);
  }
}
