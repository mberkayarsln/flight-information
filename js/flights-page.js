const currencySelect = document.querySelector(".currency-select");

let flights = getDataFromStorage();
let length = flights[0].itineraries.results.length
let tryPrices = [];

eventListeners();

function eventListeners() {

    document.addEventListener("DOMContentLoaded", showFlights);
    currencySelect.addEventListener("change", setPrices);
    flightsBody.addEventListener("click",goLink);

}


function showFlights(e) {

    addFlightsToUI();

    getTryPrices();

    changeTitle();

    e.preventDefault();
}

function changeTitle() {

    let originName = flights[0].itineraries.results[0].legs[0].origin.name;
    let destName = flights[0].itineraries.results[0].legs[0].destination.name;

    document.title = originName.split(" ")[0] + " - " + destName.split(" ")[0];
}

function getTryPrices() {

    for (i = 0; i < length; i++) {

        tryPrices.push(flights[0].itineraries.results[i].pricing_options[0].price.amount);

    }

}

function setPrices(e) {

    let url = `https://api.exchangerate.host/convert?from=TRY&to=${currencySelect.value}`;

    getCurrencies(url)
        .then(data => {

            let currency = data.result;

            for (i = 0; i < length; i++) {

                flights[0].itineraries.results[i].pricing_options[0].price.amount = tryPrices[i];
                flights[0].itineraries.results[i].pricing_options[0].price.amount = flights[0].itineraries.results[i].pricing_options[0].price.amount * currency;

            }

            flightsBody.innerHTML = "";
            localStorage.removeItem("flights");
            localStorage.setItem("flights", JSON.stringify(flights));
            addFlightsToUI();

        })
        .catch(err => console.error(err));

    e.preventDefault();
}

function goLink(e){

    let link = e.target.parentElement.lastElementChild.firstElementChild.href

    window.open(link);
    
}