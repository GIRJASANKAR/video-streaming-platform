import { Component } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent {
  showNavigationArrows = true;
	showNavigationIndicators = false;
   appIcons = [
    {
      name: 'Netflix',
      icon: 'https://www.justwatch.com/images/icon/207360008/s100/icon.webp'
    },
    {
      name: 'Amazon Prime Video',
      icon: 'https://www.justwatch.com/images/icon/52449861/s100/icon.webp'
    },
    {
      name: 'Hulu',
      icon: 'https://www.justwatch.com/images/icon/4233119/s100/icon.webp'
    },
    {
      name: 'HBO Max',
      icon: 'https://www.justwatch.com/images/icon/85114140/s100/icon.webp'
    },
    {
      name: 'Apple TV+',
      icon: 'https://www.justwatch.com/images/icon/93795879/s100/icon.webp'
    },
    {
      name: 'Zee5',
      icon: 'https://www.justwatch.com/images/icon/301318462/s100/icon.webp'
    },
    {
      name: 'Hotstar',
      icon: 'https://images.justwatch.com/icon/152862153/s100/icon.webp'
    },
    {
      name: 'Voot',
      icon: 'https://images.justwatch.com/icon/247912837/s100/icon.webp'
    },
    {
      name: 'Voot',
      icon: 'https://images.justwatch.com/icon/59562423/s100/icon.webp'
    },
    {
      name: 'MX Player',
      icon: 'https://images.justwatch.com/icon/2625277/s100/icon.webp'
    },
    {
      name: 'Voot',
      icon: 'https://images.justwatch.com/icon/141488812/s100/icon.webp'
    },
    {
      name: 'MX Player',
      icon: 'https://images.justwatch.com/icon/123324312/s100/icon.webp'
    }
    ,
    {
      name: 'Voot',
      icon: 'https://images.justwatch.com/icon/123324312/s100/icon.webp'
    },
    {
      name: 'MX Player',
      icon: 'https://images.justwatch.com/icon/201704934/s100/icon.webp'
    },
    {
      name: 'HBO Max',
      icon: 'https://www.justwatch.com/images/icon/85114140/s100/icon.webp'
    },
    {
      name: 'Apple TV+',
      icon: 'https://www.justwatch.com/images/icon/93795879/s100/icon.webp'
    },
    {
      name: 'Zee5',
      icon: 'https://www.justwatch.com/images/icon/301318462/s100/icon.webp'
    },

  ];
  public  show_content=false;

}
