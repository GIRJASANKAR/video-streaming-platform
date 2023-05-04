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
export class TvService {

  public moviesData: MoviesData[] = [
    {
      title: 'Crime Tv Shows',
      moviesData: [],
    },
    {
      title: 'Action and Adventure TV Shows',
      moviesData: [],
    },
    {
      title: 'documentary TV Shows',
      moviesData: [],
    },
    {
      title: 'Drama Tv Shows',
      moviesData: [],
    },
    {
      title: 'Family Tv Shows',
      moviesData: [],
    },
    {
      title: 'Kids Tv Shows',
      moviesData: [],
    },
    {
      title: 'Comedy Tv Shows',
      moviesData: [],
    },
  ];

  constructor(private movies: MoviesService) { }


  apis_for_tv(){
    this.crime_tv_shows();
    this.action_adventure_tv_shows();
    this.documentary_tv_shows();
    this.drama_tv_shows();
    this.family_Tv_shows();
    this.Kids_tv_shows();
    this.comedy_tv_shows();
  }

  crime_tv_shows() {
    this.movies.getCrimeTvShows().subscribe({
      next: (result: any) => {
        this.moviesData[0].moviesData = result?.results;
      },
    });
  }

  action_adventure_tv_shows() {
    this.movies.getActionAdventureTvShows().subscribe({
      next: (result: any) => {
        this.moviesData[1].moviesData = result?.results;
      },
    });
  }

  documentary_tv_shows() {
    this.movies.getDocumentaryTvShows().subscribe({
      next: (result: any) => {
        this.moviesData[2].moviesData = result?.results;
      },
    });
  }
  drama_tv_shows() {
    this.movies.getDramaShows().subscribe({
      next: (result: any) => {
        this.moviesData[3].moviesData = result?.results;
      },
    });
  }

  family_Tv_shows() {
    this.movies.getFamilyTvShows().subscribe({
      next: (result: any) => {
        this.moviesData[4].moviesData = result?.results;
      },
    });
  }
  Kids_tv_shows() {
    this.movies.getKidsTvShows().subscribe({
      next: (result: any) => {
        this.moviesData[5].moviesData = result?.results;
      },
    });
  }
  comedy_tv_shows() {
    this.movies.getComedyTvShows().subscribe({
      next: (result: any) => {
        this.moviesData[6].moviesData = result?.results;
      },
    });
  }






}
