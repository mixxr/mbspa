import { Component, OnInit } from '@angular/core';
import {Brand} from '../../model/brand';

@Component({
  selector: 'app-brand-carousel',
  templateUrl: './brand-carousel.component.html',
  styleUrls: ['./brand-carousel.component.css']
})
export class BrandCarouselComponent implements OnInit {

  list:Brand[] = [];
  maxActive: number;
  currentPos:number;
  constructor() { 
    this.maxActive = 7;
    this.currentPos = 0;
    this.list = [
      new Brand("Gucci","gucci","/assets/images/brands/gucci.jpg"),
      new Brand("Cartier","cartier","/assets/images/brands/cartier.jpg"),
      new Brand("hermes_paris","hermes_paris","/assets/images/brands/hermes_paris.jpg"),
      new Brand("louis_vuitton","louis_vuitton","/assets/images/brands/louis_vuitton.jpg"),
      new Brand("prada","prada","/assets/images/brands/prada.jpg"),
      new Brand("Gucci","gucci","/assets/images/brands/gucci.jpg"),
      new Brand("Cartier","cartier","/assets/images/brands/cartier.jpg"),
      new Brand("hermes_paris","hermes_paris","/assets/images/brands/hermes_paris.jpg"),
      new Brand("louis_vuitton","louis_vuitton","/assets/images/brands/louis_vuitton.jpg"),
      new Brand("prada","prada","/assets/images/brands/prada.jpg"),
      new Brand("Gucci","gucci","/assets/images/brands/gucci.jpg"),
      new Brand("Cartier","cartier","/assets/images/brands/cartier.jpg"),
      new Brand("hermes_paris","hermes_paris","/assets/images/brands/hermes_paris.jpg"),
      new Brand("louis_vuitton","louis_vuitton","/assets/images/brands/louis_vuitton.jpg"),
      new Brand("prada","prada","/assets/images/brands/prada.jpg"),
            new Brand("Gucci","gucci","/assets/images/brands/gucci.jpg"),
      new Brand("Cartier","cartier","/assets/images/brands/cartier.jpg"),
      new Brand("hermes_paris","hermes_paris","/assets/images/brands/hermes_paris.jpg"),
      new Brand("louis_vuitton","louis_vuitton","/assets/images/brands/louis_vuitton.jpg"),
      new Brand("prada","prada","/assets/images/brands/prada.jpg")
                ];

    // carousel timer
   //  setInterval(() => { this.moveRight(1); }, 5000);
  }

  ngOnInit() {
  }

  isActive(index: number): boolean{
    return (index>=0 && index<this.maxActive);
  }

  display(index: number):string{
    return this.isActive(index)?"":"none";
  }

  moveRight(steps:number){
    this.list = [...this.list.slice(steps), ...this.list.slice(0,steps)];
  }

}
