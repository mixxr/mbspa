import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MsBudget} from '../../model/ms-budget'

@Component({
  selector: 'app-search-box',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  model:MsBudget;
  productCounter:number = 52103;

  constructor() { }

  ngOnInit() {
      this.model = new MsBudget(MsBudget._DEF_BUDGET);
      let me = this;
      window.setInterval(function() {
        me.productCounter += (Date.now() % 100);
      }, 3000);
  }

  onSubmit() {
    console.log('on submit:', this.model);
    if (this.model.value <= 1 || this.model.maxItems === 0)
      return;
    //this.model.maxItems = maxItems || this.model.maxItems;
    // routing
    // TODO
  }


}
