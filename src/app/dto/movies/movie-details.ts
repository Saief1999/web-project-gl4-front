import { Genre } from "../genres/genre";
import { BasicMovie, Movie } from "./movie";

export class MovieDetails extends BasicMovie {
  genres: Genre[];
  belongs_to_collection: null | object;
  budget: number;
  hompage: string | null;
  imdb_id: string | null; // length: 9 ; pattern: ^tt[0-9]{7}
  production_companies: Company[];
  production_countries: Country[];
  revenue: number;
  runtime: number | null;
  spoken_languages: Language[];
  status: status;
  tagline: string | null;

  constructor() {
    super();
    this.release_date = new Date().getFullYear() + "";
    this.title = "";
    this.overview = "";
    this.vote_average = 0;
    this.poster_path = null;
  }
}

class Company {
  name: string;
  id: number;
  logo_path: string | null;
  origin_country: string;
}

class Country {
  iso_3166_1: string;
  name: string;
}

class Language {
  iso_639_1: string;
  name: string;
}

type status =
  | "Rumored"
  | "Planned"
  | "In Production"
  | "Post Production"
  | "Released"
  | "Canceled";
