import { Component, OnInit } from '@angular/core';
import { MovieListResult } from 'src/app/interfaces/movie-list.interface';
import { AuthService } from 'src/app/services/auth.service';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  bannerResult: MovieListResult[] = [];
  trendingMovieResult: MovieListResult[] = [];
  actionMovieResult: MovieListResult[] = [];
  adventureMovieResult: MovieListResult[] = [];
  topRatedMoviesResult:MovieListResult[]=[];
  animationMovieResult: MovieListResult[] = [];
  comedyMovieResult: MovieListResult[] = [];
  documentaryMovieResult: MovieListResult[] = [];
  sciencefictionMovieResult: MovieListResult[] = [];
  thrillerMovieResult: MovieListResult[] = [];

  constructor(private movies:MoviesService, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.profile().subscribe({
      next:(res)=>{
       console.log(res);
      }
    })
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

  this_week_movies(){
    this.movies.getTrendingMoviesAllWeek().subscribe({
      next:(result:any)=>{
        this.bannerResult=result?.results;
      }
    })
  }


  today_trending_movies(){
    this.movies.getTrendingAllDay().subscribe({
      next:(result:any)=>{
        this.trendingMovieResult=result?.results;
      }
    })
  }

  action_movies(){
    this.movies.getActionMovies().subscribe({
      next:(result:any)=>{
        this.actionMovieResult=result?.results;
      }
    })
  }

  adventure_movie(){
    this.movies.getAdventureMovies().subscribe({
      next:(result:any)=>{
        this.adventureMovieResult=result?.results;
      }
    })
  }

  animation_movie(){
    this.movies.getAnimationMovies().subscribe({
      next:(result:any)=>{
        this.animationMovieResult=result?.results;
      }
    })
  }

  comedy_movie(){
    this.movies.getComedyMovies().subscribe({
      next:(result:any)=>{
        this.comedyMovieResult=result?.results;
      }
    })
  }

  documentary_movie(){
    this.movies.getDocumentaryMovies().subscribe({
      next:(result:any)=>{
        this.documentaryMovieResult=result?.results;
      }
    })
  }

  science_fiction_movie(){
    this.movies.getScienceFictionMovies().subscribe({
      next:(result:any)=>{
        this.sciencefictionMovieResult=result?.results;
      }
    })
  }

  thriller_movie(){
    this.movies.getThrillerMovies().subscribe({
      next:(result:any)=>{
        this.thrillerMovieResult=result?.results;
      }
    })
  }

  top_rated_movie(){
    this.movies.getTopRated().subscribe({
      next:(result:any)=>{
        this.topRatedMoviesResult=result?.results;
      }
    })
  }


}
