import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CartItemListComponent } from './components/cart-item-list/cart-item-list.component';
import { MsSearchService} from './svcs/ms-search.service'

//import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material";
import { MdInputModule} from '@angular2-material/input';
import { MdSlideToggleModule} from '@angular2-material/slide-toggle';

// modal
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CartItemListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdInputModule.forRoot(), MdSlideToggleModule.forRoot(),
    ModalModule.forRoot(), BootstrapModalModule
  ],
  providers: [MsSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
