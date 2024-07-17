import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FlightService } from "./../api/services/flight.service"
import { FlightRm } from "../api/models";
import { flightIdGet } from '../api/fn/flight/flight-id-get';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrl: './book-flight.component.css'
})
export class BookFlightComponent implements OnInit{

  constructor(private route: ActivatedRoute) { }


  flightId: string = 'not loaded'

  ngOnInit(): void {
    this.route.paramMap.subscribe(p => this.findFlight(p.get("flightId")))
  }

  private findFlight = (flightId: string | null) => {
    this.flightId = flightId ?? 'not passed';


  }

}
