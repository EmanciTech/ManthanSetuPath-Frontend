import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';
declare var $: any;

@Component({
  selector: 'app-client-construction',
  templateUrl: './client-construction.component.html',
  styleUrls: ['./client-construction.component.scss']
})
export class ClientConstructionComponent implements OnInit {
  public Category:any = [];
  public CategoryList:any = [];
  public selectedCategory = '';
  public catName: any = {};

  constructor(private router: Router, private service: DataService) { }

  ngOnInit(): void {
    this.getCategoryList();
    this.selectedCategory = decodeURI(this.router.url.slice(14));
    console.log(this.selectedCategory);
    this.categoryClicked(this.selectedCategory);
  }
  getCategoryList() {
    this.service.getconstructionCategory().subscribe(data => {
      this.Category = data['data'];
    },
      error => {
        console.log(error);
      });
  }

  categoryClicked(data) {
    this.catName.category = data;
    this.selectedCategory = data;
    this.service.getconstructionCategoryList(this.catName).subscribe(data => {
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