import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BACKEND_URL } from "../../constants";

@Injectable({
    providedIn: 'root'
})
export class CinemasService {
    private cinemasUrl ;
    constructor(private http: HttpClient) {
        this.cinemasUrl = `${BACKEND_URL}/cinemas`;
    }

    listCinemas() {
        return this.http.get(this.cinemasUrl);
    }

    getCinema(id:number) {
        return this.http.get(`${this.cinemasUrl}/${id}`)
    }
}
