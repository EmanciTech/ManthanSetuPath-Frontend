import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public construction = 0;
  public environmental = 0;
  public medical = 0;
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
          let environmentalArray = data['data']['environmental'];
          environmentalArray.forEach((item) => {
            this.environmental += item['records']
            this.server += item['records']
          })
          let medicalArray = data['data']['medical'];
          medicalArray.forEach((item) => {
            this.medical += item['records']
            this.server += item['records']
          })
        },
        error => {
          console.log(error);
        }
      );
  }

}
