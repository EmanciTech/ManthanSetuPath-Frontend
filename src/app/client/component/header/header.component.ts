import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';
declare var $: any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public menu = '';
  public construction = [];
  public medical = [];
  public environmental = [];
  constructor(private router: Router, private service: DataService) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('construction') && !sessionStorage.getItem('construction') && !sessionStorage.getItem('construction')) {
      this.getMenu();
    } else {
      this.construction = JSON.parse(sessionStorage.getItem('construction'));
      this.medical = JSON.parse(sessionStorage.getItem('medical'));
      this.environmental = JSON.parse(sessionStorage.getItem('environmental'));
    }

    if (this.router.url.includes('construction')) {
      this.menu = 'construction';
    } else if (this.router.url.includes('environmental')) {
      this.menu = 'environmental';
    } else if (this.router.url.includes('medical')) {
      this.menu = 'medical';
    } else if (this.router.url.includes('aboutus')) {
      this.menu = 'aboutus';
    }
    else if (this.router.url.includes('contactus')) {
      this.menu = 'contactus';
    }
  }

  getMenu() {
    this.service.getMenu()
      .subscribe(
        data => {
          this.construction = data['data']['construction'];
          this.medical = data['data']['medical'];
          this.environmental = data['data']['environmental'];
          sessionStorage.setItem('construction', JSON.stringify(this.construction));
          sessionStorage.setItem('medical', JSON.stringify(this.medical));
          sessionStorage.setItem('environmental', JSON.stringify(this.environmental));
        },
        error => {
          console.log(error);
        }
      );
  }
}

// make navbar top andd fix based on window scroll 
$(window).scroll(function () {
  var sticky = $('.navbar'),
    scroll = $(window).scrollTop();

  if (scroll >= 60) sticky.addClass('sticky');
  else sticky.removeClass('sticky');
});
