async function getFlightData(url){

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b970c36577mshad6cfb3f6c6febbp178d2ajsn663209211ca9',
            'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
        }
    };
    
    const response = await fetch(url,options);

    const data = await response.json();

    return data;
}
