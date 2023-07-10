const BASE_URL = 'https://api.nasa.gov/neo/rest/v1/feed'

export const getData = async (): Promise<any>  => {
    const response = await fetch(`${BASE_URL}?start_date=2023-07-03&end_date=2023-07-03&api_key=PXjG2k4gTiQT1uLnemaLCDAX3RDa7jRbL69WIROx`);
    const data = response.json();
    return data;
}

