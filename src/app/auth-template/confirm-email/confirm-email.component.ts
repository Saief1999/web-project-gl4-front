import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'app/services/authentication.service';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.css']
})
export class ConfirmEmailComponent implements OnInit {

  constructor(
    private readonly authService : AuthenticationService, 
    private readonly router : Router,
    private readonly activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
      this.activatedRoute.params.subscribe({
        next: (params) => {
          const token = params['token']
          this.authService.confirmEmail(token).subscribe({
            next : message => {
              console.log(message);
              this.router.navigate(['/home']);
            }, 
            error: err => {
              console.error(err);
            }
          })
        },
        error: err => {
          console.error(err);
        } 
      })

  }

}
