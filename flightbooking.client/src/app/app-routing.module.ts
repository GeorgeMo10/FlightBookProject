import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SearchFlightsComponent } from './search-flights/search-flights.component';
import { ContactComponent } from './contact/contact.component';
import { BookFlightComponent } from './book-flight/book-flight.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: SearchFlightsComponent },
  { path: 'search-flights', component: SearchFlightsComponent } ,
  { path: 'book-flight/:flightId', component: BookFlightComponent } 


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
