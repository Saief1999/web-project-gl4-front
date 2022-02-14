
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CinemaListItem } from 'app/dto/cinemas/cinema-list-item';
import { CinemasService } from 'app/services/cinemas.service';

@Component({
  selector: 'app-cinemas-create',
  templateUrl: './cinemas-create-minimal.component.html',
  styleUrls: ['./cinemas-create.component.css']
})
export class CinemasCreateComponent implements OnInit {

  imgURL: string;
  constructor(
    private router: Router,
    private cinemaService: CinemasService
  ) {
    this.imgURL = 'assets/img/cinema.jpg'
  }

  ngOnInit(): void {
  }

}
