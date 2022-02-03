import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {

  @Input() private condition: boolean = false;
  @Input() private text: string
  constructor() { }

  ngOnInit(): void {
  }

}
