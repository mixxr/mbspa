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
      new Brand("hermes_paris","hermes_paris","/assets/images/brands/hermes_paris.jpg"),
      new Brand("louis_vuitton","louis_vuitton","/assets/images/brands/louis_vuitton.jpg"),
      new Brand("prada","prada","/assets/images/brands/prada.jpg")
    ];
  }

  ngOnInit() {
  }

}
