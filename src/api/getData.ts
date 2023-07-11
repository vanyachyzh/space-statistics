import { formatDateToString } from "../utils/formatDate";
import { normalizeNEO } from "../utils/normalizeNEO";

const BASE_URL = 'https://api.nasa.gov/neo/rest/v1/feed'

export const getData = async (datesArray: Date[]): Promise<any>  => {
    const requests = datesArray.map(date => fetch(`${BASE_URL}?start_date=${formatDateToString(date)}&end_date=${formatDateToString(date)}&api_key=PXjG2k4gTiQT1uLnemaLCDAX3RDa7jRbL69WIROx`));
    const responses = await Promise.all(requests);
    const data = await Promise.all(responses.map(response => response.json()))
    const normilizedData = await Promise.all(data.map((neo, ind) => normalizeNEO(neo, formatDateToString(datesArray[ind]))))

    return normilizedData;
}

