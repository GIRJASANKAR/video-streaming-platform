import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guard/auth.guard';
import { IsLoginGuard } from '../shared/guard/is-login.guard';
import { ListComponent } from './list/list.component';
import { MoviesComponent } from './movies/movies.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'horror', canActivate: [AuthGuard], component: ListComponent },
  { path: 'tv-shows', canActivate: [AuthGuard], component: ListComponent },
  { path: 'tv/:id', canActivate: [AuthGuard], component: TvDetailsComponent },
  {
    path: 'watchlist',
    canActivate: [AuthGuard],
    component: WatchlistComponent,
  },
  { path: 'movie/:id', canActivate: [AuthGuard], component: MoviesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
