import { Component, OnInit } from '@angular/core';
import { MsBudget} from '../../model/ms-budget'

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  model:MsBudget;
  constructor() { }

  ngOnInit() {
      this.model = new MsBudget(MsBudget._DEF_BUDGET);
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
