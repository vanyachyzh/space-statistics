import { formatDateToString } from "../utils/formatDate";
import { normalizeNEO } from "../utils/normalizeNEO";

export const getData = async (datesArray: Date[]): Promise<any>  => {
    const requests = datesArray.map(date => fetch(`${import.meta.env.VITE_REACT_BASE_URL}?start_date=${formatDateToString(date)}&end_date=${formatDateToString(date)}&api_key=${import.meta.env.VITE_REACT_API_KEY}`));
    const responses = await Promise.all(requests);
    const data = await Promise.all(responses.map(response => response.json()))
    const normilizedData = await Promise.all(data.map((neo, ind) => normalizeNEO(neo, formatDateToString(datesArray[ind]))))

    return normilizedData;
}

