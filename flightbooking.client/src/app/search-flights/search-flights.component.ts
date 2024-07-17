import { Time } from '@angular/common';
import { Component } from '@angular/core';
export { FlightService } from './../api/services/flight.service';
import { FlightRm } from '../api/models';
import { FlightService } from '../api/services';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrl: './search-flights.component.css'
})
export class SearchFlightsComponent {

  searchResult: FlightRm[] = []

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {

  }

  search() {
    this.flightService.searchFlight({})
      .subscribe({
        next: response => {
          this.searchResult = response;
        },
        error: err => this.handleError(err),
        complete: () => {
          console.log('Search completed');
        }
      });
  }

  private handleError(err: any) {
    console.error(err); // Changed to console.error for better error logging
  }
}
