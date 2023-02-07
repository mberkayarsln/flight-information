async function addDataToStorage(data){


    let flights = getDataFromStorage();

    flights.push(data);

    localStorage.setItem("flights",JSON.stringify(flights));
    
    return;

}

function getDataFromStorage(){

    let flights;

    if(localStorage.getItem("flights")===null){
        flights = [];
    }
    else{
        flights = JSON.parse(localStorage.getItem("flights"));
    }

    return flights;

}

function clearStorage(){

    localStorage.removeItem("flights");

}