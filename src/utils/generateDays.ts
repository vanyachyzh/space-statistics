export const generateDays = (): Date[] => {
    const datesArray: Date[] = [];

    const addDate = (): void => {
        const currentDate = new Date();
        const lastDate = datesArray.length > 0 ? datesArray[datesArray.length - 1] : new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        const nextDate = new Date(lastDate.getFullYear(), lastDate.getMonth(), lastDate.getDate() + 1);

        datesArray.push(nextDate);

        if (datesArray.length > 6) {
            datesArray.shift();
        }

        if (nextDate > currentDate) {
            nextDate.setDate(1);
        }

        console.log(datesArray);
        setTimeout(addDate, 3000);
    };

    addDate();

    return datesArray;
};