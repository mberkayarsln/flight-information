const originCity = document.getElementById("origin");
const destCity = document.getElementById("dest");

const goingDate = document.getElementById("going");
const returnDate = document.getElementById("return");

const travellerNum = document.getElementById("number");
const searchButton = document.getElementById("search-btn");

const oneWay = document.getElementById("one-way");
const roundTrip = document.getElementById("round-trip");

eventListeners();

function eventListeners() {

    document.addEventListener("DOMContentLoaded", setDates);
    searchButton.addEventListener("click", showFlights);

}

function setDates(e) {

    goingDate.valueAsDate = new Date();
    returnDate.valueAsDate = new Date();

    e.preventDefault();
}

function showFlights(e) {


    let url = `https://flight-info-api.p.rapidapi.com/schedules?version=v1&DepartureDate=${goingDate.value}&DepartureAirport=${originCity.value}&ArrivalAirport=${destCity.value}`;

    getFlightData(url)
        .then(data => {
            addFlightsToUI(data);
        });


    e.preventDefault();
}