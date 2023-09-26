import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { IsLoginGuard } from './shared/guard/is-login.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./movies/movies.module').then((e) => e.MoviesModule),
    canActivate: [],
  },
  { path: 'login', canActivate: [IsLoginGuard], component: LoginComponent },
  {
    path: 'register',
    canActivate: [IsLoginGuard],
    component: RegisterComponent,
  },
  { path: '**', canActivate: [AuthGuard], component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
