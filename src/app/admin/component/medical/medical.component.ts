import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrls: ['./medical.component.scss']
})
export class MedicalComponent implements OnInit {

  public collection = 'medical';
  public category = '';
  public categoryObj = {};
  public oldCategory = '';
  public mode = 'add';
  public serMode = 'add';
  public imageSrc: any = 'assets/images/imageplaceholder.png';
  public categories = [];
  public services = [];
  public file: any;
  public selectedCategory: any;
  public serviceName = '';
  public serviceDescription = '';
  public serviceObj = {};

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    this.service.getCategory(this.collection)
      .subscribe(
        data => {
          this.categories = data['data']
          if (this.categories.length > 0) {
            this.getServices();
          }
        },
        error => {
          console.log(error);
        }
      );
  }

  addCategory() {
    let data = {
      collection: this.collection,
      category: this.category
    }
    this.service.addCategory(data)
      .subscribe(
        data => {
          this.category = '';
          this.getCategory();
        },
        error => {
          console.log(error);
        }
      );
  }

  editCategory(category) {
    this.category = category['category'];
    this.oldCategory = category['category'];
    this.categoryObj = category;
    this.mode = 'edit';
  }

  updateCategory() {
    let data = {
      collection: this.collection,
      id: this.categoryObj['_id'],
      oldCategory: this.oldCategory,
      newCategory: this.category
    }
    this.service.updateCategory(data)
      .subscribe(
        data => {
          this.category = '';
          this.getCategory();
          this.mode = 'add';
        },
        error => {
          console.log(error);
        }
      );
  }

  removeCategory(category) {
    this.categoryObj = category;
  }

  deleteCategory() {
    let data = {
      collection: this.collection,
      id: this.categoryObj['_id'],
      category: this.categoryObj['category']
    }
    this.service.deleteCategory(data)
      .subscribe(
        data => {
          this.getCategory();
        },
        error => {
          console.log(error);
        }
      );
  }

  getServices() {
    this.service.getServices(this.collection)
      .subscribe(
        data => {
          this.services = data['data'];
        },
        error => {
          console.log(error);
        }
      );
  }

  addServices() {
    const service = {
      name: this.serviceName,
      description: this.serviceDescription
    }
    this.service.addServices(this.file, this.collection, this.selectedCategory, service)
      .subscribe(
        data => {
          this.imageSrc = 'assets/images/imageplaceholder.png'
          this.selectedCategory = '';
          this.serviceName = '';
          this.serviceDescription = '';
          this.getServices();
        },
        error => {
          console.log(error);
        }
      );
  }

  editService(service) {
    this.serviceObj = service;
    this.imageSrc = 'http://127.0.0.1:3000' + service['image'];
    this.selectedCategory = service['category'];
    this.serviceName = service['name'];
    this.serviceDescription = service['description'];
    this.serMode = 'edit';
  }

  updateService() {
    const service = {
      name: this.serviceName,
      description: this.serviceDescription
    }
    this.service.updateService(this.file, this.serviceObj['_id'], this.collection, this.selectedCategory, service)
      .subscribe(
        data => {
          this.imageSrc = 'assets/images/imageplaceholder.png'
          this.selectedCategory = '';
          this.serviceName = '';
          this.serviceDescription = '';
          this.serMode = 'add';
          this.getServices();
        },
        error => {
          console.log(error);
        }
      );
  }

  removeService(service) {
    this.serviceObj = service;
    this.categoryObj = null;
  }

  deleteService() {
    let data = {
      collection: this.collection,
      id: this.serviceObj['_id'],
      category: this.serviceObj['category']
    }
    this.service.deleteService(data)
      .subscribe(
        data => {
          this.getServices();
        },
        error => {
          console.log(error);
        }
      );
  }

  onSelectImage(event) {
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.imageSrc = event.target.result;
      }
    }
  }

}
