import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Genre } from "app/dto/genres/genre";
import { MovieDetails } from "app/dto/movies/movie-details";
import { MoviesService } from "app/services/movies.service";
import { genres } from "app/utilities/store";
import { TMDB_IMG_URI } from "../../../constants";

@Component({
    selector: "app-movie",
    templateUrl: "./movie-page.component.html",
    styleUrls: ["./movie-page.component.css"]
})
export class MoviePageComponent implements OnInit{
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private moviesService:MoviesService
      ) { }
    
    movie: MovieDetails;
    movieImage():string {
        if (this.movie.poster_path === null)
            return null ;
        return TMDB_IMG_URI + this.movie.poster_path;
      }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            const id:number = params["id"];
            this.moviesService.getMovie(id).subscribe((movie:MovieDetails) => {
                this.movie = movie;
            })
        })
    }

}