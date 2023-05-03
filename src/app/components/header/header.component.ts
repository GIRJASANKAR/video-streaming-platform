import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  ViewEncapsulation,
  AfterViewInit,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MoviesService } from '../../services/movies.service';
import { Router } from '@angular/router';
import { MovieSearchResult } from 'src/app/interfaces/movie-list.interface';
import { AuthService } from 'src/app/services/auth.service';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements  AfterViewInit {
  constructor(
    private movieService: MoviesService,
    private route: Router,
    public auth: AuthService
  ) {}

  searchResult!: MovieSearchResult[] | null;
  @ViewChild('searchList') searchboxRef!: ElementRef;
  @ViewChild('searchInput') searchInput!: ElementRef;
  searchForm = new FormGroup({
    movie_name: new FormControl(),
  });

  ngAfterViewInit(): void {
    const searchterm: Observable<string> = fromEvent(
      this.searchInput.nativeElement,
      'keyup'
    ).pipe(
      map((x: any) => x.target.value),
      debounceTime(100),
      distinctUntilChanged()
    );
    searchterm.subscribe((res) => {
      this.submitForm(res);
    });
  }

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

  submitForm(val: String) {
    this.movieService.getSearchMovie(val).subscribe((result: any) => {
      this.searchResult = result.results;
    });
  }

  goToMovieDetails(id: number) {
    this.route.navigate(['/movie', id]);
    this.searchResult = null;
  }
}
