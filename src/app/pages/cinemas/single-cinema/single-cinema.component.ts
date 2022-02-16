
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cinema } from 'app/dto/cinemas/cinema';
import {  CinemasService } from "app/services/cinemas.service";

@Component({
  selector: 'app-single-cinema',
  templateUrl: './single-cinema.component.html',
  styleUrls: ['./single-cinema.component.css']
})
export class SingleCinemaComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private CinemasService:CinemasService

  ) { }

  @Input() cinema:Cinema;
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id:number = params["id"];
      this.getCinema(id)
      
  })

  }

  getCinema(id:number) {
    this.CinemasService.getCinema(id).subscribe((cinema:Cinema) => {
        this.cinema= cinema;
    }) 
}

}
