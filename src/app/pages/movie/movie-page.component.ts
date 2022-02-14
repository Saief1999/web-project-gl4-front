import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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
        if (!this.movie?.poster_path)
            return null ;
        return TMDB_IMG_URI + this.movie.poster_path;
      }

    ngOnInit(): void {

        this.movie = new MovieDetails();
        this.activatedRoute.params.subscribe(params => {
            const id:number = params["id"];
            this.moviesService.getMovie(id).subscribe((movie:MovieDetails) => {
                this.movie = movie;
            })
        })
    }

    genreName(id:number) {
        const name:String = genres.value.find(genre => genre.id === id)?.name || "";
        return name;
    }

}