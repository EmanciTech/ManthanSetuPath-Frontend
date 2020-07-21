import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-environmental',
  templateUrl: './environmental.component.html',
  styleUrls: ['./environmental.component.scss']
})
export class EnvironmentalComponent implements OnInit {

  public imageSrc: any = 'assets/images/imageplaceholder.png';
  public categories = [
    {id: 1, category: 'Environmental Category'}
  ];
  public services = [
    {id: 1, image: 'assets/images/imageplaceholder.png', category: 'Environmental Category',
    name: 'Environmental Service', description: 'Environmental Service Description'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSelectImage(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.imageSrc = event.target.result;
      }
    }
  }

}
