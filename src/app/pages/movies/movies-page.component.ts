import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Genre } from "app/dto/genres/genre";
import { ListResult } from "app/dto/movies/list-result";
import { Movie } from "app/dto/movies/movie";
import { MoviesService } from "app/services/movies.service";
import { genres } from "app/utilities/store";

@Component({
    selector: "app-movies",
    templateUrl: "./movies-page.component.html",
    styleUrls: ["./movies-page.component.css"
    , "../../../../node_modules/angular2-multiselect-dropdown/themes/default.theme.css"
]
})
export class MoviesPageComponent implements OnInit{
    constructor(
        private router: Router,
        private moviesService:MoviesService
      ) { }
    
    page:number = 1;
    movies: Movie[] = [];
    total_pages:number = 1;
    orderOptions = [];
    order = null;
    orderSettings = {};

    ngOnInit(): void {
        // this.moviesService.listMovies().subscribe((movieList:ListResult<Movie>) => {
        //     this.movies = movieList.results;
        //     this.page = movieList.page;
        //     this.total_pages = movieList.total_pages;
        // }) 
        this.orderOptions= [
            {id: "popular", itemName:"Popular"},
            {id: "top_rated", itemName:"Top Rated"}
        ]
        this.order = [{id: "popular", itemName:"Popular"}],
        this.orderSettings = {
            enableSearchFilter: false,
            addNewItemOnFilter: true,singleSelection: true, text:"Select Order"
        };

        this.listPopular();
    }

    listPopular(page=1) {
        this.moviesService.listPopularMovies(page).subscribe((movieList:ListResult<Movie>)=> {
            this.saveMoviesResult(movieList)
        })
    }

    listTopRated(page=1) {
        this.moviesService.listTopRatedMovies(page).subscribe((movieList:ListResult<Movie>)=> {
            this.saveMoviesResult(movieList)
        })
    }

    search(query:string, page=1) {
        this.moviesService.searchMovies(query).subscribe((movieList:ListResult<Movie>) => {
            this.saveMoviesResult(movieList)
        }) 
    }

    saveMoviesResult(movieList:ListResult<Movie>) {
        this.movies = movieList.results;
        this.page = movieList.page;
        this.total_pages = movieList.total_pages;
    }

}