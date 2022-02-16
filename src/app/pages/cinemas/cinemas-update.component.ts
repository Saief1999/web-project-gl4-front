
import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CinemaListItem } from 'app/dto/cinemas/cinema-list-item';
import { CinemasService } from 'app/services/cinemas.service';
import {Cinema} from '../../dto/cinemas/cinema';
import {CinemaImage} from '../../dto/cinemas/cinema-image';
import {Route} from '@angular/router';
import {CinemasCreateComponent} from './cinemas-create.component';
import {MovieDetails} from '../../dto/movies/movie-details';

@Component({
  selector: 'app-cinemas-create',
  templateUrl: './cinemas-create-minimal.component.html',
  styleUrls: ['./cinemas-create.component.css']
})
export class CinemasUpdateComponent extends CinemasCreateComponent {

  constructor(
    protected router: Router,
    protected cinemaService: CinemasService,
    private activatedRoute: ActivatedRoute,
  ) {
    super(router,cinemaService);
    this.cinema = new Cinema();
    this.imgURL = this.cinema.imageUrl;
  }

  reset(): void
  {
    this.cinema=new Cinema();
    this.cinema.description='';
    this.imgURL= 'assets/img/cinema.jpg'
    this.termsNotAgree=false;
    this.imgFile=null;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id: number = params['id'];
      this.cinemaService.getCinema(id).subscribe((cinema) => {
        this.cinema = cinema;
      });
      })
  }

  onPublish(): void
  {
    this.cinemaService.updateCinema(this.cinema);
  }

  onFileInput(event):void
  {
      if (event.target.files[0]) {
        this.imgFile = event.target.files[0];
        const imgURLObserver = this.cinemaService.uploadFile(event.target.files[0]);
        imgURLObserver.subscribe( ( cinemaImage: CinemaImage ) => {
          this.cinema.imageUrl = cinemaImage.imageUrl;
          console.log(cinemaImage.imageUrl);
          this.imgURL = cinemaImage.imageUrl;
        });
      }
  }


}
