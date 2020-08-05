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
  public environmental:any = {};
  constructor(private router: Router, private service: DataService) { }

  ngOnInit(): void {
   
    this.getMenu();
    console.log(this.router.url);
    if (this.router.url.includes('/construction')) {
      this.menu = 'construction';
    } else if (this.router.url.includes('/environmental')) {
      this.menu = 'environmental';
    } else if (this.router.url.includes('/medical')) {
      this.menu = 'medical';
    } else if (this.router.url.includes('/aboutus')) {
    
      this.menu = 'aboutus';
    }
    else if (this.router.url.includes('/contactus')) {
      this.menu = 'contactus';
    }
    else if (this.router.url.includes('/clients')) {
      this.menu = 'clients';
    }
    else if (this.router.url.includes('/otherservice')) {
      this.menu = 'otherservice';
    }
  }

  changeMenu(menu) {
    this.menu = menu;
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

$(document).ready(function () {
  $(window).scroll(function () {
    var sticky = $('.navbar'),
      scroll = $(window).scrollTop();

    if (scroll >= 60) sticky.addClass('sticky');
    else sticky.removeClass('sticky');
  });
  $(".dropdown, .btn-group").hover(function () {
    var dropdownMenu = $(this).children(".dropdown-menu");
    if (dropdownMenu.is(":visible")) {
      dropdownMenu.parent().toggleClass("open");
    }
  });
});
