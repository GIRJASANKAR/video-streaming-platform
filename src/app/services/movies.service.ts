import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private api_key = `1d104f049ed6fd43c3cf12d7b377ff0e`;
  private base_url = `https://api.themoviedb.org/3`;
  public today = new Date().toISOString().slice(0, 10);

  constructor(private _http: HttpClient) {}

  public getTrendingMoviesAllWeek() {
    const url = `${this.base_url}/trending/all/week?api_key=${this.api_key}`;
    return this._http.get(url);
  }

  public getTrendingAllDay() {
    const url = `${this.base_url}/trending/movie/day?api_key=${this.api_key}`;
    return this._http.get(url);
  }

  getActionMovies() {
    const url = `${this.base_url}/discover/movie?api_key=${this.api_key}&with_genres=28`;
    return this._http.get(url);
  }

  getAdventureMovies() {
    const url = `${this.base_url}/discover/movie?api_key=${this.api_key}&with_genres=12`;
    return this._http.get(url);
  }

  public getTopRated() {
    const url = `${this.base_url}/movie/top_rated?api_key=${this.api_key}`;
    return this._http.get(url);
  }

  getAnimationMovies() {
    const url = `${this.base_url}/discover/movie?api_key=${this.api_key}&with_genres=16`;
    return this._http.get(url);
  }

  getComedyMovies() {
    const url = `${this.base_url}/discover/movie?api_key=${this.api_key}&with_genres=35`;
    return this._http.get(url);
  }

  getDocumentaryMovies() {
    const url = `${this.base_url}/discover/movie?api_key=${this.api_key}&with_genres=99`;
    return this._http.get(url);
  }

  getScienceFictionMovies() {
    const url = `${this.base_url}/discover/movie?api_key=${this.api_key}&with_genres=878`;
    return this._http.get(url);
  }

  getThrillerMovies() {
    const url = `${this.base_url}/discover/movie?api_key=${this.api_key}&with_genres=53`;
    return this._http.get(url);
  }

  getSearchMovie(data: any) {
    const url = `${this.base_url}/search/movie?api_key=${this.api_key}&query=${data}`;
    return this._http.get(url);
  }

  public getMovieDetails(id: number | null) {
    const url = `${this.base_url}/movie/${id}?api_key=${this.api_key}`;
    return this._http.get(url);
  }
  public getTvDetails(id: number | null) {
    const url = `${this.base_url}/tv/${id}?api_key=${this.api_key}`;
    return this._http.get(url);
  }
  getHorrorMovies() {
    const url = `${this.base_url}/discover/movie?api_key=${this.api_key}&with_genres=27`;
    return this._http.get(url);
  }

  getHorrorAfter2000() {
    const url = `${this.base_url}/discover/movie?api_key=${this.api_key}&with_genres=27&primary_release_date.gte=2000-01-01&sort_by=popularity.desc`;
    return this._http.get(url);
  }

  getUpcommingHorror() {
    const url = `${this.base_url}/discover/movie?api_key=${this.api_key}&primary_release_date.gte=${this.today}&with_genres=27`;
    return this._http.get(url);
  }

  public getMovieVideo(id: number | null) {
    const url = `${this.base_url}/movie/${id}/videos?api_key=${this.api_key}`;
    return this._http.get(url);
  }
  public getTvShowsVideo(id: number | null) {
    const url = `${this.base_url}/tv/${id}/videos?api_key=${this.api_key}`;
    return this._http.get(url);
  }



  getActionAdventureTvShows() {
    const url = `${this.base_url}/discover/tv?api_key=${this.api_key}&with_genres=10759`;
    return this._http.get(url);
  }
  getCrimeTvShows() {
    const url = `${this.base_url}/discover/tv?api_key=${this.api_key}&with_genres=80`;
    return this._http.get(url);
  }
  getDocumentaryTvShows() {
    const url = `${this.base_url}/discover/tv?api_key=${this.api_key}&with_genres=99`;
    return this._http.get(url);
  }
  getDramaShows() {
    const url = `${this.base_url}/discover/tv?api_key=${this.api_key}&with_genres=18`;
    return this._http.get(url);
  }
  getFamilyTvShows() {
    const url = `${this.base_url}/discover/tv?api_key=${this.api_key}&with_genres=10751`;
    return this._http.get(url);
  }
  getKidsTvShows() {
    const url = `${this.base_url}/discover/tv?api_key=${this.api_key}&with_genres=10762`;
    return this._http.get(url);
  }
  getComedyTvShows() {
    const url = `${this.base_url}/discover/tv?api_key=${this.api_key}&with_genres=35`;
    return this._http.get(url);
  }
}
