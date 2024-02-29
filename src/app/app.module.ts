import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PrimengModule } from './shared/primeng/primeng.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, ProductListComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    PrimengModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
