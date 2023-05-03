import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  public movie_details!: MovieDetails;
  public movie_video!: MovieTrailerLink[];
  public key!: number;
  public added_to_watchlist: any;
  public is_added=false;

  constructor(
    private router: ActivatedRoute,
    private movies: MoviesService,
    private route: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.router.paramMap.subscribe((params: any) => {
      let paramId = params?.params?.id;
      this.movieDetails(paramId);
      this.movieVideo(paramId);
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 3000,
    });
  }

  movieDetails(id: number) {
    this.movies.getMovieDetails(id).subscribe({
      next: (result: any) => {
        this.movie_details = result;
        this.checkDuplicateEntry();
      },
      error: () => {
        this.route.navigate(['/not-found']);
      },
    });
  }

  movieVideo(id: number) {
    this.movies.getMovieVideo(id).subscribe({
      next: (result: any) => {
        this.movie_video = result?.results;
        this.movie_video.forEach((element: any) => {
          if (element.type == 'Trailer') {
            this.key = element.key;
          }
        });
      },
    });
  }

  checkDuplicateEntry() {
    const watchlist_data = localStorage.getItem('movie');
    if (watchlist_data) {
      const data = JSON.parse(watchlist_data);
      this.added_to_watchlist = data.find(
        (movie: any) => movie.id === this.movie_details.id
      );
    }
  }

  addToLocalStorage() {
    this.is_added=true;
    const watchlist_data = localStorage.getItem('movie');
    if (!watchlist_data) {
      return localStorage.setItem(
        'movie',
        JSON.stringify([this.movie_details])
      );
    }
    const watchlist_movies_array = JSON.parse(watchlist_data);
    watchlist_movies_array.push(this.movie_details);
    localStorage.setItem('movie', JSON.stringify(watchlist_movies_array));
    return this.openSnackBar('Added to watchList', 'Enjoy');
  }
}
