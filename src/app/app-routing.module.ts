import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  { path: '', canActivate:[AuthGuard], component: ListComponent },
  {path:'movie/:id',component:MoviesComponent},
  { path: '**', component:NotFoundComponent  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
