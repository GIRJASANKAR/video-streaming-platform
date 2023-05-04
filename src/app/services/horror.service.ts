import { Injectable } from '@angular/core';
import { MovieListResult } from '../shared/interfaces/movie-list.interface';
import { MoviesService } from './movies.service';

@Injectable({
  providedIn: 'root',
})
export class HorrorService {
  public moviesData: MoviesData[] = [
    {
      title: 'Horror Movies',
      moviesData: [],
    },
    {
      title: 'Latest Horror Movies',
      moviesData: [],
    },
    {
      title: 'Release After 2000 horror Movies by popularity',
      moviesData: [],
    },
    {
      title: 'upcomming Horror',
      moviesData: [],
    },
  ];

  constructor(private movies: MoviesService) {}
   apis_for_horror() {
    this.this_week_movies();
    this.today_trending_movies();
    this.release_after_2000();
    this.up_commming();
  }


  this_week_movies() {
    this.movies.getHorrorMovies().subscribe({
      next: (result: any) => {
        this.moviesData[0].moviesData = result?.results;
      },
    });
  }

  today_trending_movies() {
    this.movies.getTrendingAllDay().subscribe({
      next: (result: any) => {
        this.moviesData[1].moviesData = result?.results;
      },
    });
  }

  release_after_2000() {
    this.movies.getHorrorAfter2000().subscribe({
      next: (result: any) => {
        this.moviesData[2].moviesData = result?.results;
      },
    });
  }

  up_commming() {
    this.movies.getUpcommingHorror().subscribe({
      next: (result: any) => {
        this.moviesData[3].moviesData = result?.results;
      },
    });
  }
}

interface MoviesData {
  title: string;
  moviesData: MovieListResult[];
}
