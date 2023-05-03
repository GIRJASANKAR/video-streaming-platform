import { Component, OnInit } from '@angular/core';
import { TvShows } from 'src/app/interfaces/tv-shows.interface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss'],
})
export class TvShowsComponent implements OnInit {
  bannerResult: TvShows[] = [];
  crimeTvShows: TvShows[] = [];
  documentaryTvShows: TvShows[] = [];
  dramaTvShows: TvShows[] = [];
  familyTvShows: TvShows[] = [];
  kidsTvShows: TvShows[] = [];
  comedyTvShows: TvShows[] = [];
  actionAdventureTvShows:TvShows[]=[];

  constructor(private movies: MoviesService) {}

  ngOnInit(): void {
    this.action_adventure_tv_shows();
    this.crime_tv_shows();
    this.documentary_tv_shows();
    this.drama_tv_shows();
    this.family_Tv_shows();
    this.Kids_tv_shows();
    this.comedy_tv_shows();
  }
  action_adventure_tv_shows() {
    this.movies.getActionAdventureTvShows().subscribe({
      next: (result: any) => {
        this.actionAdventureTvShows = result?.results;
      },
    });
  }
  crime_tv_shows() {
    this.movies.getCrimeTvShows().subscribe({
      next: (result: any) => {
        this.bannerResult = result?.results;
      },
    });
  }

  documentary_tv_shows() {
    this.movies.getDocumentaryTvShows().subscribe({
      next: (result: any) => {
        this.documentaryTvShows = result?.results;
      },
    });
  }
  drama_tv_shows() {
    this.movies.getDramaShows().subscribe({
      next: (result: any) => {
        this.dramaTvShows = result?.results;
      },
    });
  }

  family_Tv_shows() {
    this.movies.getFamilyTvShows().subscribe({
      next: (result: any) => {
        this.familyTvShows = result?.results;
      },
    });
  }
  Kids_tv_shows() {
    this.movies.getKidsTvShows().subscribe({
      next: (result: any) => {
        this.kidsTvShows = result?.results;
      },
    });
  }
  comedy_tv_shows() {
    this.movies.getComedyTvShows().subscribe({
      next: (result: any) => {
        this.comedyTvShows = result?.results;
      },
    });
  }
}
