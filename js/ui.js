let flightsBody = document.getElementById("flights-body");
let minDiv = document.querySelector(".min");
let maxDiv = document.querySelector(".max");


function addFlightsToUI() {
    
        let flightsObj = getDataFromStorage();
        
        let flightsArr = Object.keys(flightsObj).map((key) => [Number(key), flightsObj[key]]);
    
        let flights = flightsArr[0][1].itineraries.results;

        let priceArr = [];
    
        for (i = 0; i < flights.length; i++) {
            
             priceArr.push(flights[i].pricing_options[0].price.amount);
    
        }
    
        let maxPrice = Math.max.apply(Math,priceArr);
        let minPrice = Math.min.apply(Math,priceArr);
    
        minDiv.innerHTML = `<span>Minimum Price &rarr; ${minPrice}</span>`;
        maxDiv.innerHTML = `<span>Maximum Price &rarr; ${maxPrice}</span>`;
    
    
        flights.forEach(function (flight) {
    
            let originName = flight.legs[0].origin.name;
            let destName = flight.legs[0].destination.name;
            let carrierName = flight.legs[0].carriers.marketing[0].name;
            let depDate = flight.legs[0].departure;
            let arrDate = flight.legs[0].arrival;
            let price = flight.pricing_options[0].price.amount;

            let depTime = (depDate.slice(11,16))
            let arrTime = (arrDate.slice(11,16))
    
    
            flightsBody.innerHTML += `<tr>
            <td>${carrierName}</td>
            <td>${originName}</td>
            <td>${destName}</td>
            <td>${depTime + "-" + arrTime}</td>
            <td class="price-data">${price} TL</td>
        </tr>`
    
    
        })
    
}