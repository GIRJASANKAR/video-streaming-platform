import { Component, Input, OnInit} from '@angular/core';
import { MovieListResult } from 'src/app/shared/interfaces/movie-list.interface';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  constructor() { }
  @Input() title!:string;
  @Input() moviesList!:MovieListResult[];
  @Input() choice!:any;

  ngOnInit(): void {

  }




}
