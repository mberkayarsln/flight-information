async function getFlightData(url){

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '872c19ef26mshd1bae4015a399b9p195e94jsn805c0de8e305',
            'X-RapidAPI-Host': 'flight-info-api.p.rapidapi.com'
        }
    };
    
    

    const response = await fetch(url,options);

    const data = await response.json();

    return data;
}