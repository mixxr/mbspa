import { Component, OnInit } from '@angular/core';
import {Brand} from '../../model/brand';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {
  list:Brand[] = [];
  constructor() { 
    this.list = [
      new Brand("Yoox","yoox","http://4.bp.blogspot.com/-QBXbnRUgxdU/VieBjwoCP9I/AAAAAAAAJ_Q/jSjfNk4IuKA/s1600/yoox_logo.jpeg"),
      new Brand("Patrizia Pepe","ppepe","www.patriziapepe.it"),
      new Brand("Diesel","diesel","www.diesel.com"),
      new Brand("Yoox","yoox","www.yoox.com/it"),
      new Brand("Patrizia Pepe","ppepe","www.patriziapepe.it"),
      new Brand("Diesel","diesel","www.diesel.com"),
      new Brand("Yoox","yoox","www.yoox.com/it"),
      new Brand("Patrizia Pepe","ppepe","www.patriziapepe.it"),
      new Brand("Boutique Moschino","bmoschino","http://www.galerieslafayette.co.id/en/marque/boutique-moschino/")
    ];
  }

  ngOnInit() {
  }

}
