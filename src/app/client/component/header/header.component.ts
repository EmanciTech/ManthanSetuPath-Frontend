import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
 }
   
   
  }

  // make navbar top andd fix based on window scroll 
  $(window).scroll(function(){
    var sticky = $('.navbar'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 30) sticky.addClass('sticky');
    else sticky.removeClass('sticky');
  });
