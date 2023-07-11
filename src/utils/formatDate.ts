export const formatDateToString = (date: Date) => {
    return `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`
}

export const formatStringToDate = (dateString: string) => {
    const parts = dateString.split("-");
    const year = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1;
    const day = parseInt(parts[2]);
  
    return new Date(year, month, day);
}