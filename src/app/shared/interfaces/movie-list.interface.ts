export interface MovieListResult {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title?: string;
  original_language: OriginalLanguage;
  original_title?: string;
  overview: string;
  poster_path: string;
  media_type: MediaType;
  genre_ids: number[];
  popularity: number;
  release_date?: Date;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  name?: string;
  original_name?: string;
  first_air_date?: Date;
  origin_country?: string[];
}

export interface MovieTrailerLink {
  iso_639_1: ISO639_1;
  iso_3166_1: ISO3166_1;
  name: string;
  key: string;
  site: Site;
  size: number;
  type: string;
  official: boolean;
  published_at: Date;
  id: string;
}



export interface MovieSearchResult {
  adult:             boolean;
  backdrop_path:     null | string;
  genre_ids:         number[];
  id:                number;
  original_language: string;
  original_title:    string;
  overview:          string;
  popularity:        number;
  poster_path:       null | string;
  release_date:      Date;
  title:             string;
  video:             boolean;
  vote_average:      number;
  vote_count:        number;
}


enum ISO3166_1 {
  Us = 'US',
}

enum ISO639_1 {
  En = 'en',
}

enum Site {
  YouTube = 'YouTube',
}

enum MediaType {
  Movie = 'movie',
  Tv = 'tv',
}

enum OriginalLanguage {
  En = 'en',
  Es = 'es',
  Ja = 'ja',
  Ko = 'ko',
}
