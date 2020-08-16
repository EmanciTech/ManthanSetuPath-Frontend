import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

$(document).ready(function() {

  $(window).scroll(function() {

      var titleHeight = $('.fadeInBlockLeft').position().top + $('.fadeInBlockLeft').outerHeight();
      var firstSection = $('.fadeInBlockRight').position().top + $('.fadeInBlockRight').outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();


      bottom_of_window = bottom_of_window + 50;

      if (bottom_of_window > titleHeight) {
        $('.fadeInBlockLeft').addClass("animated");
        $('.fadeInBlockLeft').addClass("slideInLeft");
      }
      if (bottom_of_window > firstSection) {
        $('.fadeInBlockRight').addClass("animated");
        $('.fadeInBlockRight').addClass("fadeInRight");
      }
  
  });
});