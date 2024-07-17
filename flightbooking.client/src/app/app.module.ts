import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFlightsComponent } from './search-flights/search-flights.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BookFlightComponent } from './book-flight/book-flight.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchFlightsComponent,
    AboutComponent,
    
    ContactComponent,
          NavMenuComponent,
          BookFlightComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    MatToolbarModule, MatButtonModule, MatIconModule

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
