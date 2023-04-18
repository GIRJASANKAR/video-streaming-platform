import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MoviesService } from '../../services/movies.service';
import { Router } from '@angular/router';
import { MovieSearchResult } from 'src/app/interfaces/movie-list.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation : ViewEncapsulation.None,
})
export class HeaderComponent {
  constructor(private movieService: MoviesService, private route: Router) {}
  searchResult!: MovieSearchResult[] | null;
  @ViewChild('searchList') searchboxRef!: ElementRef;

  searchForm = new FormGroup({
    movieName: new FormControl(),
  });

  @HostListener('document:click', ['$event'])
  handleClick(event: MouseEvent) {
    if (!this.searchboxRef) {
      return;
    }
    const searchbox = this.searchboxRef.nativeElement;
    if (!searchbox.contains(event.target)) {
      this.searchResult = null;
    }
  }

  submitForm() {
    this.movieService
      .getSearchMovie(this.searchForm.get('movieName')?.value)
      .subscribe((result: any) => {
        this.searchResult = result.results;
      });
  }

  goToMovieDetails(id: number) {
    this.route.navigate(['/movie', id]);
    this.searchResult = null;
  }
}
