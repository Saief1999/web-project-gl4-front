import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BACKEND_URL } from '../../constants';
import {Observable} from 'rxjs';
import {MovieImageUrl} from '../dto/movies/image-url';
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

    uploadFile(file: File): Observable<MovieImageUrl> {
        const formData = new FormData();
        formData.set('image', file, file.name);
        console.log(file.name);
        return this.http.post<MovieImageUrl>(this.cinemasUrl + '/upload', formData);
    }

    createCinema(cinema: Cinema): void {
        const formData = new FormData();
        for (const k in cinema)
            formData.set(k, cinema[k]);
        this.http.post(this.cinemasUrl, formData);
    }
}
