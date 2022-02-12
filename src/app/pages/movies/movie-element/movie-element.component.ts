
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'app/dto/movies/movie';
import { TMDB_IMG_URI } from '../../../../constants';

@Component({
  selector: 'app-movie-element',
  templateUrl: './movie-element.component.html',
  styleUrls: ['./movie-element.component.css']
})
export class MovieElementComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  @Input() movie:Movie;
  
  movieImage():string {
    return TMDB_IMG_URI+ this.movie.poster_path;
  }

  ngOnInit(): void {
  }

}
