import { Component, OnInit } from '@angular/core';

enum Category {
  Rated = 'Most Rated',
  Popular = 'Most Popular',
  Newest = 'Most Newest'
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvaliable: boolean;
  ingredients = ['Aurum', 'Silver', 'Bronze', 'Aluminium'];

  constructor() { }

  ngOnInit() {
    this.name = name || 'Ivan';
    this.description = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget';
    this.price = 300;
    this.category = Category.Newest;
    this.isAvaliable = true;
  }

}
