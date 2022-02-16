
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CinemaListItem } from 'app/dto/cinemas/cinema-list-item';
import { AuthenticationService } from 'app/services/authentication.service';

@Component({
  selector: 'app-cinema-element',
  templateUrl: './cinema-element.component.html',
  styleUrls: ['./cinema-element.component.css']
})
export class CinemaElementComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) { }

  @Input() cinema:CinemaListItem;
  
  ngOnInit(): void {
  }
  isAdmin() {
    return this.authService.hasRole("admin");
  }

  updateCinema(id:string) {
    this.router.navigate(["cinemas","update",id]);
  }

  removeCinema(id) {
  }
 
}
