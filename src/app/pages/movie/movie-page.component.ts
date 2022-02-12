import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MovieDetails } from "app/dto/movies/movie-details";
import { MoviesService } from "app/services/movies.service";

@Component({
    selector: "app-movie",
    templateUrl: "./movie-page.component.html",
    styleUrls: ["./movie-page.component.css"]
})
export class MoviePageComponent implements OnInit{
    constructor(
        private router: Router,
        private moviesService:MoviesService
      ) { }
    
    movie: MovieDetails;

    ngOnInit(): void {
    }

}