async function getFlightData(url){

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9651a94fb6msh7591a056d388f66p1ea105jsnb810bddd76a7',
            'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
        }
    };
    
    const response = await fetch(url,options);

    const data = await response.json();

    return data;
}
