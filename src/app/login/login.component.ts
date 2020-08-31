import { Component, OnInit } from '@angular/core';
import { DataService } from '../admin/service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  email = '';

  constructor(private service: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  signin() {
    let data = {
      username: this.username,
      password: this.password
    }
    this.service.login(data)
    .subscribe(
      data => {
        if (data.status) {
          sessionStorage.setItem('admin', 'true');
          this.router.navigate(['admin']);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  reset() {

  }

}
