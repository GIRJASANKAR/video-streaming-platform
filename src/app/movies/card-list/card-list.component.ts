import { Component, Input, OnInit} from '@angular/core';
import { MovieListResult } from 'src/app/shared/interfaces/movie-list.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  constructor(private router: Router) { }
  @Input() title!:string;
  @Input() moviesList!:MovieListResult[];
  @Input() choice!:any;

  ngOnInit(): void {

  }

  navigateToMovie(choice: string, movieId: number): void {
    const route = choice === 'movies' ? ['/movie', movieId] : ['/tv', movieId];
    this.router.navigate(route);
  }

}
