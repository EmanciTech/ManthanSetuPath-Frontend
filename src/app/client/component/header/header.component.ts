import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public menu = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.router.url.includes('construction')) {
      this.menu = 'construction';
    } else if (this.router.url.includes('environmental')) {
      this.menu = 'environmental';
    } else if (this.router.url.includes('medical')) {
      this.menu = 'medical';
    } else if (this.router.url.includes('aboutus')) {
      this.menu = 'aboutus';
    }
    else if (this.router.url.includes('aboutus')) {
      this.menu = 'contactus';
    }
 }
  }

  // make navbar top andd fix based on window scroll 
  $(window).scroll(function(){
    var sticky = $('.navbar'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 60) sticky.addClass('sticky');
    else sticky.removeClass('sticky');
  });
