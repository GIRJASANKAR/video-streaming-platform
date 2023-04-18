import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private api_key = `1d104f049ed6fd43c3cf12d7b377ff0e`;
  private baseUrl = `https://api.themoviedb.org/3`;
  constructor(private _http: HttpClient) {}

  public getTrendingMoviesAllWeek() {
    const url = `${this.baseUrl}/trending/all/week?api_key=${this.api_key}`;
    return this._http.get(url);
  }

  public getTrendingAllDay() {
    const url = `${this.baseUrl}/trending/movie/day?api_key=${this.api_key}`;
    return this._http.get(url);
  }

  getActionMovies() {
    const url = `${this.baseUrl}/discover/movie?api_key=${this.api_key}&with_genres=28`;
    return this._http.get(url);
  }

  getAdventureMovies() {
    const url = `${this.baseUrl}/discover/movie?api_key=${this.api_key}&with_genres=12`;
    return this._http.get(url);
  }

  public getTopRated() {
    const url = `${this.baseUrl}/movie/top_rated?api_key=${this.api_key}`;
    return this._http.get(url);
  }

  getAnimationMovies() {
    const url = `${this.baseUrl}/discover/movie?api_key=${this.api_key}&with_genres=16`;
    return this._http.get(url);
  }

  getComedyMovies() {
    const url = `${this.baseUrl}/discover/movie?api_key=${this.api_key}&with_genres=35`;
    return this._http.get(url);
  }

  getDocumentaryMovies() {
    const url = `${this.baseUrl}/discover/movie?api_key=${this.api_key}&with_genres=99`;
    return this._http.get(url);
  }

  getScienceFictionMovies() {
    const url = `${this.baseUrl}/discover/movie?api_key=${this.api_key}&with_genres=878`;
    return this._http.get(url);
  }

  getThrillerMovies() {
    const url = `${this.baseUrl}/discover/movie?api_key=${this.api_key}&with_genres=53`;
    return this._http.get(url);
  }

  getSearchMovie(data: any) {
    const url = `${this.baseUrl}/search/movie?api_key=${this.api_key}&query=${data}`;
    return this._http.get(url);
  }

  public getMovieDetails(id: number | null) {
    const url = `${this.baseUrl}/movie/${id}?api_key=${this.api_key}`;
    return this._http.get(url);
  }

  public getMovieVideo(id: number | null) {
    const url = `${this.baseUrl}/movie/${id}/videos?api_key=${this.api_key}`;
    return this._http.get(url);
  }
}
