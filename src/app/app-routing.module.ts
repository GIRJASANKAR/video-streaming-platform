import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guard/auth.guard';
import { NewComponent } from './components/horror/horror.component';
import { TvShowsComponent } from './components/tv-shows/tv-shows.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { TvDetailsComponent } from './components/tv-details/tv-details.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', canActivate: [AuthGuard], component: ListComponent },
  { path: 'horror', component: NewComponent },
  { path: 'tv-shows', component: TvShowsComponent },
  { path: 'tv/:id', component: TvDetailsComponent },
  { path: 'watchlist', component: WatchlistComponent },
  { path: 'movie/:id', canActivate: [AuthGuard], component: MoviesComponent },
  { path: '**', component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
