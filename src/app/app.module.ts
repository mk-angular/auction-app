import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { StarsComponent } from './components/stars/stars.component';
import NavbarComponent from './components/navbar/navbar.component';
import CarouselComponent from './components/carousel/carousel.component';
import FooterComponent from './components/footer/footer.component';
import SearchComponent from './components/search/search.component';
import { ProductService } from './service/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    StarsComponent,
    NavbarComponent,
    CarouselComponent,
    FooterComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
