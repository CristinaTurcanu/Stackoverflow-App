import moment from 'moment';

export function toDateFormat (date) {
    return moment(date).format("MMM Do YYYY");
}

export function toDateFormatWithHours (date) {
    return moment(date).format("MMM Do YYYY, h:mm a");
}

