import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {
  watchlist: any[]=[];

  constructor() { }

  ngOnInit(): void {
    const movies=localStorage.getItem("movie");
    if(movies){
      this.watchlist=JSON.parse(movies);
    }
  }




}
