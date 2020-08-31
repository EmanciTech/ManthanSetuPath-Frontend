import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public construction = 0;
  public consultancy = 0;
  public otherservices = 0;
  public server = 0;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.getDashboard()
  }

  getDashboard() {
    this.service.getDashboard()
      .subscribe(
        data => {
          let constructionArray = data['data']['construction'];
          constructionArray.forEach((item) => {
            this.construction += item['records']
            this.server += item['records']
          })
          let consultancyArray = data['data']['consultancy'];
          consultancyArray.forEach((item) => {
            this.consultancy += item['records']
            this.server += item['records']
          })
          let otherservicesArray = data['data']['otherservices'];
          otherservicesArray.forEach((item) => {
            this.otherservices += item['records']
            this.server += item['records']
          })
        },
        error => {
          console.log(error);
        }
      );
  }

}
