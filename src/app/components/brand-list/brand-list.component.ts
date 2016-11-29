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
      new Brand("Patrizia Pepe","ppepe","http://pic.fyvor.com/20161026/20161026000318_57637.jpg"),
      new Brand("Diesel","diesel","http://seeklogo.com/images/D/DIESEL-logo-8196D71AA4-seeklogo.com.gif"),
      new Brand("Gucci","gucci","http://cdn-4.famouslogos.us/images/gucci-logo.jpg"),
      new Brand("Giorgio Armani","garmani","http://www.almrsal.com/wp-content/uploads/2014/12/Armani-150x150.jpg"),
      new Brand("Apple","apple","https://ip.bitcointalk.org/?u=http%3A%2F%2Fwww.decalsplanet.com%2Fimg_b%2Fvinyl-decal-sticker-144.jpg&t=569&c=s-EbL3uiGR9dBA"),
      new Brand("Yoox","yoox","http://4.bp.blogspot.com/-QBXbnRUgxdU/VieBjwoCP9I/AAAAAAAAJ_Q/jSjfNk4IuKA/s1600/yoox_logo.jpeg"),
      new Brand("Patrizia Pepe","ppepe","http://pic.fyvor.com/20161026/20161026000318_57637.jpg"),
      new Brand("Diesel","diesel","http://seeklogo.com/images/D/DIESEL-logo-8196D71AA4-seeklogo.com.gif"),
      new Brand("Gucci","gucci","http://cdn-4.famouslogos.us/images/gucci-logo.jpg"),
      new Brand("Giorgio Armani","garmani","http://www.almrsal.com/wp-content/uploads/2014/12/Armani-150x150.jpg"),
      new Brand("Apple","apple","https://ip.bitcointalk.org/?u=http%3A%2F%2Fwww.decalsplanet.com%2Fimg_b%2Fvinyl-decal-sticker-144.jpg&t=569&c=s-EbL3uiGR9dBA"),
      new Brand("Boutique Moschino","bmoschino","http://barakamall.leadvy.com/wp-content/uploads/sites/137/2015/07/moschino-logo-for-men-women.png")
    ];
  }

  ngOnInit() {
  }

}
