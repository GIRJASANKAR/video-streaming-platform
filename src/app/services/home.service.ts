import { Injectable } from '@angular/core';
import { MovieListResult } from '../shared/interfaces/movie-list.interface';
import { MoviesService } from './movies.service';

interface MoviesData {
  title: string;
  moviesData: MovieListResult[];
}
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  public moviesData: MoviesData[] = [
     {
      title: 'Trending Movies of Week',
      moviesData: [],
    },
    {
      title: 'Top Rated Movies',
      moviesData: [],
    },
    {
      title: 'Trending Movies of Today',
      moviesData: [],
    },
    {
      title: 'Action Movies',
      moviesData: [],
    },
    {
      title: 'adventure Movies',
      moviesData: [],
    },
    {
      title: 'Animations Movies',
      moviesData: [],
    },
    {
      title: 'Comedy Movies',
      moviesData: [],
    },
    {
      title: 'Documentary Movies',
      moviesData: [],
    },
    {
      title: 'Science Fiction Movies',
      moviesData: [],
    },
    {
      title: 'Thriller Movies',
      moviesData: [],
    },
  ];

  constructor(private movies: MoviesService) { }


  apis_for_home(){
    this.this_week_movies();
    this.today_trending_movies();
    this.action_movies();
    this.adventure_movie();
    this.top_rated_movie();
    this.animation_movie();
    this.comedy_movie();
    this.documentary_movie();
    this.science_fiction_movie();
    this.thriller_movie();
  }


  top_rated_movie() {
    this.movies.getTopRated().subscribe({
      next: (result: any) => {
        this.moviesData[1].moviesData = result?.results;
      },
    });
  }
  this_week_movies() {
    this.movies.getTrendingMoviesAllWeek().subscribe({
      next: (result: any) => {
        this.moviesData[0].moviesData = result?.results;
      },
    });
  }

  today_trending_movies() {
    this.movies.getTrendingAllDay().subscribe({
      next: (result: any) => {
        this.moviesData[2].moviesData = result?.results;
      },
    });
  }

  action_movies() {
    this.movies.getActionMovies().subscribe({
      next: (result: any) => {
        this.moviesData[3].moviesData = result?.results;
      },
    });
  }

  adventure_movie() {
    this.movies.getAdventureMovies().subscribe({
      next: (result: any) => {
        this.moviesData[4].moviesData = result?.results;
      },
    });
  }

  animation_movie() {
    this.movies.getAnimationMovies().subscribe({
      next: (result: any) => {
        this.moviesData[5].moviesData = result?.results;
      },
    });
  }

  comedy_movie() {
    this.movies.getComedyMovies().subscribe({
      next: (result: any) => {
        this.moviesData[6].moviesData = result?.results;
      },
    });
  }

  documentary_movie() {
    this.movies.getDocumentaryMovies().subscribe({
      next: (result: any) => {
        this.moviesData[7].moviesData = result?.results;
      },
    });
  }

  science_fiction_movie() {
    this.movies.getScienceFictionMovies().subscribe({
      next: (result: any) => {
        this.moviesData[8].moviesData = result?.results;
      },
    });
  }

  thriller_movie() {
    this.movies.getThrillerMovies().subscribe({
      next: (result: any) => {
        this.moviesData[9].moviesData = result?.results;
      },
    });
  }
}
