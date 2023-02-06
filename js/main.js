const originCity = document.getElementById("origin");
const destCity = document.getElementById("dest");
const goingDate = document.getElementById("going");
const returnDate = document.getElementById("return");
const passengerNum = document.getElementById("number");
const oneWay = document.getElementById("one-way");
const searchButton = document.getElementById("search-btn");

eventListeners();

function eventListeners() {
    searchButton.addEventListener("click", goFlightsPage);
    document.addEventListener("DOMContentLoaded", clearAll);
    document.addEventListener("DOMContentLoaded", setDates);
}


function goFlightsPage() {

    let url = `https://skyscanner44.p.rapidapi.com/search-extended?adults=${passengerNum.value}&origin=${originCity.value}&destination=${destCity.value}&departureDate=${goingDate.value}&currency=TRY`

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