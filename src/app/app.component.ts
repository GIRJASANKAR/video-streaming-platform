import { Component, OnInit } from '@angular/core';
import { MoviesService } from './services/movies.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'video-streaming-platform';
  constructor(private moviesService: MoviesService) {}

}
