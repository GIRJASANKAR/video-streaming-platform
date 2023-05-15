import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.scss']
})
export class TvDetailsComponent implements OnInit {
  public tv_show_details!: any;
  public tv_series_video!: any;
  public tvShowId!: number;
  public tv_video!:any;
  public trailer_url= "https://www.youtube.com/embed/"
  constructor(
    private router: ActivatedRoute,
    private movies: MoviesService,
    private route: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe((params: any) => {
      let paramId = params?.params?.id;
      this.showDetails(paramId);
      this.tvShowVideo(paramId);
    });
  }
  public getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  showDetails(id: number) {
    this.movies.getTvDetails(id).subscribe({
      next: (result: any) => {
        this.tv_show_details = result;
      },
      error: () => {
        this.route.navigate(['/not-found']);
      },
    });
  }

  tvShowVideo(id: number) {
    this.movies.getTvShowsVideo(id).subscribe({
      next: (result: any) => {
        this.tv_video = result?.results;
        this.tv_video.forEach((element: any) => {
          if (element.type == 'Trailer') {
            this.tvShowId = element.key;
            this.trailer_url="https://www.youtube.com/embed/"+this.tvShowId;
            console.log(this.trailer_url);
          }
        });
      },
    });
  }





}
