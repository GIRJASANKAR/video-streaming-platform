import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  public key!: number;
  constructor(
    private router: ActivatedRoute,
    private movies: MoviesService,
    private route: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe((params: any) => {
      let paramId = params?.params?.id;
      this.showDetails(paramId);
    });
  }


  showDetails(id: number) {
    this.movies.getTvDetails(id).subscribe({
      next: (result: any) => {
        this.tv_show_details = result;
        console.log(this.tv_show_details);
      },
      error: () => {
        this.route.navigate(['/not-found']);
      },
    });
  }




}
