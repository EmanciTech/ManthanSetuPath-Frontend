import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public menu = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.router.url.includes('admin:construction')) {
      this.menu = 'construction';
    } else if (this.router.url.includes('admin:environmental')) {
      this.menu = 'environmental';
    } else if (this.router.url.includes('admin:medical')) {
      this.menu = 'medical';
    }
  }

  changeMenu(menu) {
    this.menu = menu;
  }

  logout() {
    sessionStorage.removeItem('admin');
    this.router.navigate(['admin-login']);
  }

}
