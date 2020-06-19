"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeFormat = void 0;
/**
 * Obejct Declaration
 */
var date = new Date();
var monthList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
var weekdayList = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];
/**
 * Date formate: if number < 10 add 0 at the beginning
 */
var initialZeroFormat = function (date) {
    if (date < 10) {
        date = '0' + date;
    }
    return date;
};
/**
 * Variable Declaration
 */
//Year: string
var yyyy = date.getFullYear();
//Month:number e.g. 03
var mmNumeric = date.getMonth() < 10
    ? '0' + ("" + (date.getMonth() + 1))
    : "" + (date.getMonth() + 1);
//Month:string e.g. January or Jan
var mmStringFull = monthList[date.getMonth()];
var mmStringShort = monthList.map(function (month) { return month.slice(0, 3); })[date.getMonth()];
//Date:string
var dd = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
//Weekday: number
var wwLong = weekdayList[date.getDay()];
var wwShort = weekdayList.map(function (day) { return day.slice(0, 3); })[date.getDay()];
//Hours
var hh = initialZeroFormat(date.getHours());
//Minutes
var mm = initialZeroFormat(date.getMinutes());
exports.timeFormat = {
    year: yyyy,
    monthNum: mmNumeric,
    monthStrLong: mmStringFull,
    monthStrShort: mmStringShort,
    day: dd,
    weekdayLong: wwLong,
    weekdayShort: wwShort,
    hours: hh,
    minutes: mm,
};
console.log(exports.timeFormat);
//# sourceMappingURL=index.js.map