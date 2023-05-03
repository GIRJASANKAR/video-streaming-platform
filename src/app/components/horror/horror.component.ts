import { Component, OnInit } from '@angular/core';
import { MovieListResult } from 'src/app/interfaces/movie-list.interface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-horror',
  templateUrl: './horror.component.html',
  styleUrls: ['./horror.component.scss'],
})
export class NewComponent implements OnInit {
  bannerResult: MovieListResult[] = [];
  trendingMovieResult: MovieListResult[] = [];
  latestHorror:any=[];
  upCommmingHrror:any=[];

  constructor(
    private movies: MoviesService,
  ) {}

  ngOnInit(): void {
    this.this_week_movies();
    this.today_trending_movies();
    this.release_after_2000();
    this.up_commming();
  }

  this_week_movies() {
    this.movies.getHorrorMovies().subscribe({
      next: (result: any) => {
        this.bannerResult = result?.results;
      },
    });
  }

  today_trending_movies() {
    this.movies.getTrendingAllDay().subscribe({
      next: (result: any) => {
        this.trendingMovieResult = result?.results;
      },
    });
  }

  release_after_2000(){
    this.movies.getHorrorAfter2000().subscribe({
      next: (result: any) => {
        this.latestHorror = result?.results;
      },
    });
  }


  up_commming(){
    this.movies.getUpcommingHorror().subscribe({
      next: (result: any) => {
        this.upCommmingHrror = result?.results;
      },
    });
  }

}
