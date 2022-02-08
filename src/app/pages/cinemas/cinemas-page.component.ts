
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas-page.component.html',
  styleUrls: ['./cinemas-page.component.css']
})
export class CinemasPageComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
