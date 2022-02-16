import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2'
import {AboutUsService} from '../../../services/about-us.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css',
  '../../../../assets/css/fontAwesome.css',
  '../../../../assets/css/hero-slider.css',
  '../../../../assets/css/owl-carousel.css',
  '../../../../assets/css/templatemo-style.css',
  "../../../../assets/css/lightbox.css"]
})
export class ContactUsComponent implements OnInit {

  constructor(private AboutUsService : AboutUsService) { }

  ngOnInit(): void {
  }

  onSubmit(f :NgForm){
    console.log(f);
    const email=f.value.email;
    const name=f.value.name;
    const message=f.value.message;

    this.AboutUsService.sendMail(email,name,message);
    Swal.fire({
      title: 'Thank you ',
      text: 'Your message is well received !',
      icon: 'success',
   
    })
     

  }
}
