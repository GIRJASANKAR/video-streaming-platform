import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { CardListComponent } from './card-list/card-list.component';
import { MovieCarouselComponent } from './movie-carousel/movie-carousel.component';
import { HeaderComponent } from './header/header.component';
import { InformationComponent } from './information/information.component';
import { ListComponent } from './list/list.component';
import { MoviesComponent } from './movies/movies.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { TranslatePipe } from '../shared/pipes/translate.pipe';
import { MinutesToHourPipe } from '../shared/pipes/minutes-to-hour.pipe';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [CardListComponent,MovieCarouselComponent, HeaderComponent,
    InformationComponent,
    ListComponent,
    MoviesComponent,
    WatchlistComponent,
    TvDetailsComponent,
    CardListComponent,
    TranslatePipe,
    MinutesToHourPipe,
    ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MatInputModule,
    RouterModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSnackBarModule,
    NgbModule,
  ]
})
export class MoviesModule { }
