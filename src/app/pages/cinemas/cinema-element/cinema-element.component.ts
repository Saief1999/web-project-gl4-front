
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CinemaListItem } from 'app/dto/cinemas/CinemaListItem';

@Component({
  selector: 'app-cinema-element',
  templateUrl: './cinema-element.component.html',
  styleUrls: ['./cinema-element.component.css']
})
export class CinemaElementComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  @Input() cinema:CinemaListItem;
  
  ngOnInit(): void {
  }

}
