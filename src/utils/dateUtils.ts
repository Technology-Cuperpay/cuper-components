import moment from "moment";
import "moment-timezone";

const MAX_VALID_YR = 2012;
const MIN_VALID_YR = 1900;

// Returns true if
// given year is valid.
function isLeap(year: number) {

    // Return true if year
    // is a multiple pf 4 and
    // not multiple of 100.
    // OR year is multiple of 400.
    return (((year % 4 == 0) &&
        (year % 100 != 0)) ||
        (year % 400 == 0));
}

// Returns true if given
// year is valid or not.
export function isValidDate(d: number, m: number, y: number) {
    // If year, month and day
    // are not in given range
    if (y > MAX_VALID_YR ||
        y < MIN_VALID_YR)
        return false;

    if (m < 1 || m > 12)
        return false;
    if (d < 1 || d > 31)
        return false;

    // Handle February month
    // with leap year
    if (m == 2) {
        if (isLeap(y))
            return (d <= 29);
        else
            return (d <= 28);
    }

    // Months of April, June,
    // Sept and Nov must have
    // number of days less than
    // or equal to 30.
    if (m == 4 || m == 6 ||
        m == 9 || m == 11)
        return (d <= 30);

    return true;
}

export function translateTimeZone(date: string): string {
    if (date == null || typeof date === "undefined" || date === "") {
        let day = new Date();
        let today = day.toISOString().split('T')[0];
        return moment(translateTimeZone(today)).format("DD/MMM/YYYY");
    }
    var resolvedOptions = Intl.DateTimeFormat().resolvedOptions();
    var dateMoment = moment(date, "YYYY-MM-DD");
    return dateMoment.tz(resolvedOptions.timeZone).format("DD/MMM/YYYY");
}