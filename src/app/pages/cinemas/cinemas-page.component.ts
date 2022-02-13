
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CinemaListItem } from 'app/dto/cinemas/cinema-list-item';
import { CinemasService } from 'app/services/cinemas.service';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas-page.component.html',
  styleUrls: ['./cinemas-page.component.css']
})
export class CinemasPageComponent implements OnInit {

  constructor(
    private router: Router,
    private cinemaService:CinemasService
  ) { }


  cinemas:CinemaListItem[] = [];

  ngOnInit(): void {
    this.cinemaService.listCinemas().subscribe( (cinemas:CinemaListItem[]) => {
      this.cinemas = cinemas 
    })
  }

}
