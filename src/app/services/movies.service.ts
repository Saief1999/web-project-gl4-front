import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { stringify } from "querystring";
import { BACKEND_URL } from "../../constants";

@Injectable({
    providedIn: 'root'
})
export class MoviesService {
    private moviesUri ;
    constructor(private http:HttpClient) {
        this.moviesUri = `${BACKEND_URL}/movies`; 
    }

    listMovies() {
        return this.http.get(this.moviesUri);
    }

    searchMovies(query:string) {
        return this.http.get(`${this.moviesUri}/search`,{
            params: {query}
        })
    }

}