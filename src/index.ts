/**
 * Obejct Declaration
 */
const date = new Date()

const monthList = [
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
]

const weekdayList = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

/**
 * Date formate: if number < 10 add 0 at the beginning
 */
const initialZeroFormat = (date: any) => {
  if (date < 10) {
    date = '0' + date
  }
  return date
}

/**
 * Variable Declaration
 */

//Year: string
const yyyy = date.getFullYear()

//Month:number e.g. 03
const mmNumeric =
  date.getMonth() < 10
    ? '0' + `${date.getMonth() + 1}`
    : `${date.getMonth() + 1}`

//Month:string e.g. January or Jan
const mmStringFull = monthList[date.getMonth()]
const mmStringShort = monthList.map(month => month.slice(0, 3))[date.getMonth()]

//Date:string
const dd = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()

//Weekday: number
const wwLong = weekdayList[date.getDay()]
const wwShort = weekdayList.map(day => day.slice(0, 3))[date.getDay()]

//Hours
const hh = initialZeroFormat(date.getHours())

//Minutes
const mm = initialZeroFormat(date.getMinutes())

export const timeFormat = {
  year: yyyy,
  monthNum: mmNumeric,
  monthStrLong: mmStringFull,
  monthStrShort: mmStringShort,
  day: dd,
  weekdayLong: wwLong,
  weekdayShort: wwShort,
  hours: hh,
  minutes: mm,
}

console.log(timeFormat)
