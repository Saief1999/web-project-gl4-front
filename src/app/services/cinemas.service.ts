import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BACKEND_URL } from "../../constants";
import {Observable} from 'rxjs';
import {CinemaImage} from '../dto/cinemas/cinema-image';
import {Cinema} from '../dto/cinemas/cinema';

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

    uploadFile(file: File): Observable<CinemaImage> {
        const formData = new FormData();
        formData.set('image', file);
        return this.http.post<CinemaImage>(this.cinemasUrl + '/upload', formData);
    }

    createCinema(cinema: Cinema) {
        return this.http.post<Cinema>(this.cinemasUrl, cinema).subscribe(T=>this.router.navigate(["cinemas"]));
    }

    updateCinema(cinema: Cinema) {
        return this.http.put<Cinema>(this.cinemasUrl, cinema).subscribe(T=>this.router.navigate(["cinemas"]));
    }

    getCinema(id: number) {
        return this.http.get(`${this.cinemasUrl}/${id}`)
    }
}
