function addFlightsToUI(data) {

    console.log(document)

    let objToArray = Object.keys(data).map((key) => [Number(key), data[key]]);//json object to array
    let flights = objToArray[0][1];

    flights.forEach(function (flight) {

        flightsBody.innerHTML += `<tr>
            <td>${flight.departure.carrierCode.icao}</td>
            <td>${flight.departure.airport.iata}</td>
            <td>${flight.departure.passengerLocalTime + flight.arrival.passengerLocalTime}</td>
        </tr>`

    })

}

