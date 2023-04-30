export function removeMinutes(date, minutes) {
    date.setMinutes(date.getMinutes() - minutes);

    return date;
}