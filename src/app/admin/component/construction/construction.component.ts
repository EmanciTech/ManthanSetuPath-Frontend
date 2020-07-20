import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-construction',
  templateUrl: './construction.component.html',
  styleUrls: ['./construction.component.scss']
})
export class ConstructionComponent implements OnInit {

  public imageSrc: any = 'assets/images/imageplaceholder.png';
  public categories = [
    {id: 1, category: 'Construction Category'}
  ];
  public services = [
    {id: 1, image: 'assets/images/imageplaceholder.png', category: 'Construction Category',
    name: 'Construction Service', description: 'Construction Service Description'}
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
