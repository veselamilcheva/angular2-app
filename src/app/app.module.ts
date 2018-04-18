import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './shared/navbar.component';
import { ErrorComponent } from './error/error.component';
import { AppRoutingModule } from './shared/app.routing';



@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ErrorComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
