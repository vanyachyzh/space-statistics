import { INEO } from "../types/NEO";
import { formatStringToDate } from "./formatDate";

const getLargestDiameter = (NEOsList: any[]): number => {
    const sortedList = NEOsList.sort((a, b) => {
        const diameterA = a.estimated_diameter.kilometers.estimated_diameter_max;
        const diameterB = b.estimated_diameter.kilometers.estimated_diameter_max;

        if (diameterA < diameterB) {
            return 1;
        } else if (diameterA > diameterB) {
            return -1;
        } else {
            return 0;
        }
    });

    return (sortedList[0].estimated_diameter.kilometers.estimated_diameter_max).toFixed(2);
};

const getClosestDistance = (NEOsList: any[]): number => {
    const sortedList = NEOsList.sort((a, b) => {
        const diameterA = +a.close_approach_data[0].miss_distance.kilometers;
        const diameterB = +b.close_approach_data[0].miss_distance.kilometers;

        if (diameterA < diameterB) {
            return 1;
        } else if (diameterA > diameterB) {
            return -1;
        } else {
            return 0;
        }
    });

    return parseInt(sortedList[NEOsList.length - 1].close_approach_data[0].miss_distance.kilometers);
};

const getHighestSpeed = (NEOsList: any[]): number => {
    const sortedList = NEOsList.sort((a, b) => {
        const diameterA = +a.close_approach_data[0].relative_velocity.kilometers_per_hour;
        const diameterB = +b.close_approach_data[0].relative_velocity.kilometers_per_hour;

        if (diameterA < diameterB) {
            return 1;
        } else if (diameterA > diameterB) {
            return -1;
        } else {
            return 0;
        }
    });

    return parseInt(sortedList[0].close_approach_data[0].relative_velocity.kilometers_per_hour);
};

const getHazardousNEOs = (NEOsList: any[]): number => {
    return NEOsList.reduce((acc, item) => {
        if (item.is_potentially_hazardous_asteroid) {
            acc++
        }

        return acc;
    }, 0);
};

export const normalizeNEO = (data: any, date: string): INEO => {
    const NEOs = data.near_earth_objects[date];

    return {
        id: data.near_earth_objects[date][0].id,
        speed: getHighestSpeed(NEOs),
        distance: getClosestDistance(NEOs),
        number: getHazardousNEOs(NEOs),
        hasLargeNumber: false,
        diameter: getLargestDiameter(NEOs),
        date: formatStringToDate(Object.keys(data.near_earth_objects)[0])
    }
}