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
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { CartCheckoutComponent } from './components/cart-checkout/cart-checkout.component';
import { SearchPageComponent } from './routes/pages/search-page/search-page.component';
import { ChartBarComponent } from './components/chart-bar/chart-bar.component';

// chart (ng2-chart)
import { ChartsModule} from 'ng2-charts/ng2-charts';
import { BrandCarouselComponent } from './components/brand-carousel/brand-carousel.component';
import { SocialLineComponent } from './components/social-line/social-line.component';

@NgModule({
  declarations: [
    AppComponent,
    CartItemListComponent,
    SearchBoxComponent,
    BrandListComponent,
    CartCheckoutComponent,
    SearchPageComponent,
    ChartBarComponent,
    BrandCarouselComponent,
    SocialLineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdInputModule.forRoot(), MdSlideToggleModule.forRoot(),
    ModalModule.forRoot(), BootstrapModalModule,
    ChartsModule
  ],
  providers: [MsSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
