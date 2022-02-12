import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ListResult } from "app/dto/movies/list-result";
import { Movie } from "app/dto/movies/movie";
import { MoviesService } from "app/services/movies.service";

@Component({
    selector: "app-movies",
    templateUrl: "./movies-page.component.html",
    styleUrls: ["./movies-page.component.css"]
})
export class MoviesPageComponent implements OnInit{
    constructor(
        private router: Router,
        private moviesService:MoviesService
      ) { }
    
    page:number = 1;
    movies: Movie[] = [];
    total_pages:number = 1;

    ngOnInit(): void {
        // this.moviesService.listMovies().subscribe((movieList:ListResult<Movie>) => {
        //     this.movies = movieList.results;
        //     this.page = movieList.page;
        //     this.total_pages = movieList.total_pages;
        // }) 

        this.search("Marvel");
    }

    search(query:string) {
        this.moviesService.searchMovies(query).subscribe((movieList:ListResult<Movie>) => {
            this.movies = movieList.results;
            this.page = movieList.page;
            this.total_pages = movieList.total_pages;
        }) 
    }

}