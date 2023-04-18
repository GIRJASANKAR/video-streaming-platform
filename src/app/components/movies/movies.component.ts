import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetails } from 'src/app/interfaces/movie-details.interface';
import { MovieTrailerLink } from 'src/app/interfaces/movie-list.interface';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  public movieDetails!: MovieDetails;
  public movieVideo!: MovieTrailerLink[];
  public key!: number;

  constructor(
    private router: ActivatedRoute,
    private movies: MoviesService,
    private route:Router
  ) {}

  ngOnInit() {
    this.router.paramMap.subscribe((params: any) => {
      let param_id = params?.params?.id;
      this.movie_details(param_id);
      this.movie_video(param_id);
    });
  }

  movie_details(id: number) {
    this.movies.getMovieDetails(id).subscribe({
      next: (result: any) => {
        this.movieDetails = result;
      },
      error:()=>{
      this.route.navigate(['/not-found']);
      }
    });
  }

  movie_video(id: number) {
    this.movies.getMovieVideo(id).subscribe({
      next: (result: any) => {
        this.movieVideo = result?.results;
        this.movieVideo.forEach((element: any) => {
          if (element.type == 'Trailer') {
            this.key = element.key;
          }
        });
      },
    });
  }
}
