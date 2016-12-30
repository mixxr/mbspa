import { Component, OnInit } from '@angular/core';
import {Brand} from '../../model/brand';

@Component({
  selector: 'app-brand-carousel',
  templateUrl: './brand-carousel.component.html',
  styleUrls: ['./brand-carousel.component.css']
})
export class BrandCarouselComponent implements OnInit {

  list:Brand[] = [];
  constructor() { 
    this.list = [
      new Brand("Gucci","gucci","/assets/images/brands/gucci.jpg"),
      new Brand("Cartier","cartier","/assets/images/brands/cartier.jpg"),
      new Brand("Gucci","gucci","/assets/images/brands/gucci.jpg"),
      new Brand("Cartier","cartier","/assets/images/brands/cartier.jpg"),
      new Brand("Gucci","gucci","/assets/images/brands/gucci.jpg")
    ];
  }

  ngOnInit() {
  }

}
