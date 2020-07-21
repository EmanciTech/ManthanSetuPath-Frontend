import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  tiger: any = ['harsh','sdsdf','sdfsdf'];
  constructor() { }

  ngOnInit(): void {
    console.log(typeof(this.tiger));
  }

}
