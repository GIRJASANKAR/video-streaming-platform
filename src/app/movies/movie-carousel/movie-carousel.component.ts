import { Component, Input, OnInit } from '@angular/core';
import { MovieListResult } from 'src/app/shared/interfaces/movie-list.interface';


@Component({
  selector: 'app-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.scss']
})
export class MovieCarouselComponent implements OnInit {
  @Input() dataItem!:MovieListResult[];
  constructor() { }
  ngOnInit(): void {
  }
}
