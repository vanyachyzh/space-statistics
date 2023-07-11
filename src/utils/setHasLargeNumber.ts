import { INEO } from "../types/NEO";

export const setHasLargeNumber = (data: INEO[]): INEO[] => {
    const sortedData = [...data].sort((a, b) => b.number - a.number);
    const updatedData = sortedData.map((item, index) => {
        if (index < 2) {
            return {
                ...item,
                hasLargeNumber: true
            };
        } else {
            return item;
        }
    });

    return updatedData;
};