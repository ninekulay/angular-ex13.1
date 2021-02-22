import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from'./home/home.component';
import { CountingComponent } from'./counting/counting.component';
import { NavbarComponent } from'./navbar/navbar.component';
import { SearchBarComponent } from'./searchbar/searchbar.component';
import { TopBannerComponent } from'./topbanner/topbanner.component';
import { Lab4Component } from'./Lab4/Lab4.component';
import { FormsModule } from'@angular/forms';
import { CategoryMenuComponent } from'./categorymenu/categorymenu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountingComponent,
    Lab4Component,
    NavbarComponent,
    SearchBarComponent,
    TopBannerComponent,
    CategoryMenuComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
