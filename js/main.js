const originCity = document.getElementById("origin");
const destCity = document.getElementById("dest");
const goingDate = document.getElementById("going");
const returnDate = document.getElementById("return");
const passengerNum = document.getElementById("number");
const oneWay = document.getElementById("one-way");
const searchButton = document.getElementById("search-btn");

const cityInput = document.getElementById("city-search");
const citySearch = document.getElementById("city-search-btn");

eventListeners();

function eventListeners() {
    document.addEventListener("DOMContentLoaded", () => {
        clearAll();
        setDates();
    } );

    searchButton.addEventListener("click", goFlightsPage);
    
    citySearch.addEventListener("click",goWiki);
}


function goFlightsPage() {

    let url = `https://skyscanner44.p.rapidapi.com/search-extended?adults=1&origin=${originCity.value}&destination=${destCity.value}&departureDate=${goingDate.value}&currency=TRY`

    getFlightData(url)
        .then(async function (data) {

            await addDataToStorage(data);

            window.location.href = "/html/flights.html";

        }
        ).catch(err => console.error(err));


}

function clearAll() {

    clearStorage();

}


function setDates(){

    goingDate.valueAsDate = new Date();
    returnDate.valueAsDate = new Date();

}

function goWiki(e){

    let url = `https://tr.wikipedia.org/wiki/${cityInput.value}`;

    window.open(url);

    e.preventDefault();
}