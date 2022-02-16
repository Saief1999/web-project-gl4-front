
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenPayloadDto } from 'app/dto/auth/token-payload.dto';
import { CinemaListItem } from 'app/dto/cinemas/cinema-list-item';
import { AuthenticationService } from 'app/services/authentication.service';
import { CinemasService } from 'app/services/cinemas.service';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas-page.component.html',
  styleUrls: ['./cinemas-page.component.css']
})
export class CinemasPageComponent implements OnInit {

  constructor(
    private router: Router,
    private cinemaService:CinemasService,
    private authService: AuthenticationService
  ) { }


  cinemas:CinemaListItem[] = [];

  ngOnInit(): void {
    this.cinemaService.listCinemas().subscribe( (cinemas:CinemaListItem[]) => {
      this.cinemas = cinemas 
    })
  }

  isAdmin() {
    return this.authService.hasRole("admin");
  }

  createCinema() {
    console.log("Hi")
    this.router.navigate(["cinemas","create"]);
  }
}
