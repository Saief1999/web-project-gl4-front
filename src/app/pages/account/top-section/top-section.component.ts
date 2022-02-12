import { Component, Input, OnInit } from '@angular/core';
import { User } from 'app/models/user.model';

@Component({
  selector: 'app-top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.css']
})
export class TopSectionComponent implements OnInit {

  constructor() { }
  @Input() user: User = new User();
  ngOnInit(): void {
  }

}
