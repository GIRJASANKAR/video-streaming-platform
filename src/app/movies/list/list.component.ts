import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { HorrorService } from '../../services/horror.service';
import { TvService } from '../../services/tv.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
 public serviceName!: any;
  public pathName:'movies'|'tv'='movies';
  constructor(
    public home: HomeService,
    public horror: HorrorService,
    public tv: TvService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.url.subscribe((params: any) => {
      let path = params[0]?.path;
      if (path === 'horror') {
        this.horror.apis_for_horror();
        this.serviceName = this.horror;
      } else if (path === 'tv-shows') {
        this.pathName='tv';
        this.tv.apis_for_tv();
        this.serviceName = this.tv;
      } else {
        this.home.apis_for_home();
        this.serviceName = this.home;
      }
    });
  }
}
