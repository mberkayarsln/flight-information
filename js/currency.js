async function getCurrencies(url){

    let response = await fetch(url);

    let data = await response.json();

    return data;

}