import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TokenInterceptor } from './helpers/token.interceptor';
import { RegisterComponent } from './components/register/register.component';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { ProductAllComponent } from './components/product-all/product-all.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { BagComponent } from './components/bag/bag.component';
@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, HomeComponent, NotfoundComponent, ProductListComponent, ProductSearchComponent, ProductAllComponent, ProductDetailComponent, BagComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
