import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  status = {
    construction: 0,
    environmental: 0,
    medical: 0,
    server: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

}
