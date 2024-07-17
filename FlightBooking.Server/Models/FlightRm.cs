namespace FlightBooking.Server.Models
{
    public record FlightRm(
        Guid id,
        string Airline,
        string Price,
        TimePlaceRm Departure,
        TimePlaceRm Arrival,
        int RemainingNumberOfSeats
        );

}
