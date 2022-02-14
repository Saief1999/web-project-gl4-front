
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/angular';
import { CinemaListItem } from 'app/dto/cinemas/cinema-list-item';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    themeSystem: "bootstrap",
    events: [
      { title: 'event 1', date: '2022-02-15 05:00' },
      { title: 'event 2', date: '2022-02-16' }
    ]
  };
    
  ngOnInit(): void {
  }

}
