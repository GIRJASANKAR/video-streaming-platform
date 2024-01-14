import { Component } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
})
export class InformationComponent {
  public showContent = false;
  public appIcons = [
    {
      name: 'Voot',
      icon: 'https://www.justwatch.com/images/icon/4233119/s100/icon.webp',
      url: 'https://www.voot.com/',
    },

    {
      name: 'Amazon Prime Video',
      icon: 'https://www.justwatch.com/images/icon/52449861/s100/icon.webp',
      url: 'https://www.primevideo.com/',
    },
    {
      name: 'Netflix',
      icon: 'https://www.justwatch.com/images/icon/207360008/s100/icon.webp',
      url: 'https://www.netflix.com/',
    },

    {
      name: 'Jio',
      icon: 'https://www.justwatch.com/images/icon/85114140/s100/icon.webp',
      url: 'https://www.jiocinema.com/',
    },
    {
      name: 'Zee 5+',
      icon: 'https://www.justwatch.com/images/icon/93795879/s100/icon.webp',
      url: 'https://www.zee5.com/',
    },
    {
      name: 'Hayu',
      icon: 'https://www.justwatch.com/images/icon/301318462/s100/icon.webp',
      url: 'https://www.hayu.com/',
    },
    {
      name: 'Apple tv',
      icon: 'https://images.justwatch.com/icon/152862153/s100/icon.webp',
      url: 'https://www.apple.com/apple-tv-plus/',
    },
    {
      name: 'Eros now',
      icon: 'https://images.justwatch.com/icon/247912837/s100/icon.webp',
      url: 'https://www.primevideo.com/region/eu/storefront/ref=dvm_pds_gen_in_kk_c_g_erosd?jic=20%7CEgxzdWJzY3JpcHRpb24%3D&benefitId=erosnowin&contentType=subscription&contentId=erosnowin',
    },
    {
      name: 'Youtube',
      icon: 'https://images.justwatch.com/icon/59562423/s100/icon.webp',
      url: 'https://www.youtube.com',
    },
    {
      name: 'MX Player',
      icon: 'https://images.justwatch.com/icon/2625277/s100/icon.webp',
      url: 'https://www.mxplayer.in/',
    },
    {
      name: 'alt balaji',
      icon: 'https://images.justwatch.com/icon/141488812/s100/icon.webp',
      url: 'https://altt.co.in/',
    },
    {
      name: 'yupp tv',
      icon: 'https://images.justwatch.com/icon/123324312/s100/icon.webp',
      url: 'https://www.yupptv.com/',
    },
    {
      name: 'hungama Player',
      icon: 'https://images.justwatch.com/icon/201704934/s100/icon.webp',
      url: 'https://www.hungama.com/',
    },
    {
      name: 'kio Max',
      icon: 'https://www.justwatch.com/images/icon/85114140/s100/icon.webp',
      url: 'https://www.jiocinema.com/',
    },
    {
      name: 'Apple TV+',
      icon: 'https://www.justwatch.com/images/icon/93795879/s100/icon.webp',
      url: 'https://www.zee5.com/',
    },
    {
      name: 'Zee5',
      icon: 'https://www.justwatch.com/images/icon/301318462/s100/icon.webp',
      url: 'https://www.hayu.com/',
    },
  ];

  public openAppUrl(url: string) {
    window.open(url, '_blank');
  }
}
