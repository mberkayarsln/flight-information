async function getCurrencies(){

    let response = await fetch("https://api.exchangerate.host/latest?base=TRY");

    let data = await response.json();

    return data;

}

getCurrencies().then(data=>console.log(data))