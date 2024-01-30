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
  { path: 'horror', component: ListComponent },
  { path: 'tv-shows', component: ListComponent },
  { path: 'tv/:id', component: TvDetailsComponent },
  {
    path: 'watchlist',
    component: WatchlistComponent,
  },
  { path: 'movie/:id', component: MoviesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }



// //   {
//   path: 'watchlist',
//   canActivate: [AuthGuard],
//   component: WatchlistComponent,
// },
// { path: 'movie/:id', canActivate: [AuthGuard], component: MoviesComponent },

// canActivate: [AuthGuard]
// canActivate: [AuthGuard]
// canActivate: [AuthGuard]