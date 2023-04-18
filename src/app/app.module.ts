import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import {MatInputModule} from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { InformationComponent } from './components/information/information.component';
import { ListComponent } from './components/list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoviesComponent } from './components/movies/movies.component';
import {MatIconModule} from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from './pipes/translate.pipe';
import { MinutesToHourPipe } from './pipes/minutes-to-hour.pipe';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { RegisterComponent } from './components/register/register.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InformationComponent,
    ListComponent,
    MoviesComponent,
    TranslatePipe,
    MinutesToHourPipe,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    RouterModule,
    MatIconModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
