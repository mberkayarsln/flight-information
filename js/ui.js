let flightsBody = document.getElementById("flights-body");
let minDiv = document.querySelector(".min");
let maxDiv = document.querySelector(".max");


function addFlightsToUI() {

    let flights = getFlights();

    let priceArr = [];

    for (i = 0; i < flights.length; i++) {

        priceArr.push(flights[i].pricing_options[0].price.amount);

    }

    let maxPrice = Math.max.apply(Math, priceArr).toFixed(2);
    let minPrice = Math.min.apply(Math, priceArr).toFixed(2);

    minDiv.innerHTML = `<span>Minimum Fiyat &rarr; ${minPrice} ${currencySelect.value}</span>`;
    maxDiv.innerHTML = `<span>Maksimum Fiyat &rarr; ${maxPrice} ${currencySelect.value}</span>`;


    flights.forEach(function (flight) {

        let originName = flight.legs[0].origin.name;
        let destName = flight.legs[0].destination.name;
        let carrierName = flight.legs[0].carriers.marketing[0].name;
        let depDate = flight.legs[0].departure;
        let arrDate = flight.legs[0].arrival;
        let price = flight.pricing_options[0].price.amount.toFixed(2);


        let depTime = (depDate.slice(11, 16))
        let arrTime = (arrDate.slice(11, 16))


        flightsBody.innerHTML += `<tr>
            <td>${carrierName}</td>
            <td>${originName.split(" ")[0]}</td>
            <td>${destName.split(" ")[0]}</td>
            <td>${depTime + "-" + arrTime}</td>
            <td>${price} ${currencySelect.value}</td>
        </tr>`


    })

}


function getFlights() {


    let flightsObj = getDataFromStorage();

    let flights = flightsObj[0].itineraries.results;

    return flights;

}
