import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';
declare var $: any;

@Component({
  selector: 'app-client-medical',
  templateUrl: './client-medical.component.html',
  styleUrls: ['./client-medical.component.scss']
})
export class ClientMedicalComponent implements OnInit {
  public Category:any = [];
  public CategoryList:any = [];
  public selectedCategory = '';
  public catName: any = {};

  constructor(private router: Router, private service: DataService) { }

  ngOnInit(): void {
    this.getCategoryList();
    this.selectedCategory = decodeURI(this.router.url.slice(9));
    this.categoryClicked(this.selectedCategory);
  }
  getCategoryList() {
    this.service.getMedicalCategory().subscribe(data => {
      this.Category = data['data'];
    },
      error => {
        console.log(error);
      });
  }

  categoryClicked(data) {
    this.catName.category = data;
    this.selectedCategory = data;
    this.service.getMedicalCategoryList(this.catName).subscribe(data => {
      this.CategoryList = data['data'];
    },
      error => {
        console.log(error);
      });
  }
}

$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
  });

});

