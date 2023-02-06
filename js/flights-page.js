const currencySelect = document.querySelector(".currency-select");


eventListeners();

function eventListeners() {
    document.addEventListener("DOMContentLoaded", showFlights);
}


function showFlights(e) {

    addFlightsToUI();

    e.preventDefault();
}
