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
  public Consultancy:any = {};
  public otherServices = [];
  
  constructor(private router: Router, private service: DataService) { }

  ngOnInit(): void {
   
    this.getMenu();
    console.log(this.router.url);
    if (this.router.url.includes('/construction')) {
      this.menu = 'construction';
    } else if (this.router.url.includes('/Consultancy')) {
      this.menu = 'Consultancy';
    } else if (this.router.url.includes('/otherServices')) {
      this.menu = 'otherServices';
    } else if (this.router.url.includes('/aboutus')) {
    
      this.menu = 'aboutus';
    }
    else if (this.router.url.includes('/contactus')) {
      this.menu = 'contactus';
    }
    else if (this.router.url.includes('/clients')) {
      this.menu = 'clients';
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
          this.otherServices = data['data']['medical'];
          this.Consultancy = data['data']['environmental'];
         
          sessionStorage.setItem('construction', JSON.stringify(this.construction));
          sessionStorage.setItem('otherServices', JSON.stringify(this.otherServices));
          sessionStorage.setItem('Consultancy', JSON.stringify(this.Consultancy));
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
