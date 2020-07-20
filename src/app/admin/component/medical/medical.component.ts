import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrls: ['./medical.component.scss']
})
export class MedicalComponent implements OnInit {

  public imageSrc: any = 'assets/images/imageplaceholder.png';
  public categories = [
    {id: 1, category: 'Medical Category'}
  ];
  public services = [
    {id: 1, image: 'assets/images/imageplaceholder.png', category: 'Medical Category',
    name: 'Medical Service', description: 'Medical Service Description'}
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
