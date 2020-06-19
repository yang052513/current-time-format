# current-time-format

> A tiny javascript package that access current time componets in your javascript project easily.

[![NPM](https://img.shields.io/npm/v/current-time-format.svg)](https://www.npmjs.com/package/react-current-time) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install current-time-format
```

If you are using yarn

```bash
yarn add current-time-format
```

## Import

```js
const { timeFormat } = require('current-time-format')

import { timeFormat } from 'current-time-format'
```

## Usage

The package returns an object that contains `year`, `monthNum`, `monthStrLong`, `monthStrShort`, `day`, `weekdayLong`, `weekdayShort`, `hours`, and `minutes`。Thus, you could customize your time format with `/`, or `:` or other symbols easily without declare any Date object. Description and return values for each attributes list below.

| Attributes    | Description                                                    | Type   |
| ------------- | -------------------------------------------------------------- | ------ |
| year          | Current year as numeric values. eg. '2020'                     | string |
| monthNum      | Current month as numeric values. eg. '03' for March            | string |
| monthStrLong  | Current month as string format. e.g. 'March' for March         | string |
| monthStrShort | Current month abbv as string format. e.g. 'Mar' for March      | string |
| day           | Current date as two digit string. e.g. '03'                    | string |
| weekdayLong   | Current weekday as string format. e.g. 'Monday'                | string |
| weekdayShort  | Current weekday abbv as string format. e.g. 'Mon' for 'Monday' | string |
| hours         | Current hours in 24 hour format. e.g. '20' for 8pm             | string |
| minutes       | Current minutes from 0-60. e.g. '30'                           | string |

We could access `weekdayShort` by typing `timeFormat.weekdayShort`, which will return `Tue` for Tuesday for example.

Or we could first deconstruct the object the attributes you need then access it like below.

```ts
import { timeFormat } from 'current-time-format'

const {
  year,
  monthNum,
  monthStrLong,
  monthStrShort,
  day,
  weekdayLong,
  weekdayShort,
  hours,
  minutes,
} = timeFormat

console.log(`${year}-${monthStrShort}, ${weekdayShort}`) //e.g. 2020-May, Wed (depends on your current local time)
```

### React

```jsx
import React from 'react'
import { timeFormat } from 'current-time-format'

export default const App = () => {
  const {
    year,
    monthNum,
    monthStrLong,
    monthStrShort,
    day,
    weekdayLong,
    weekdayShort,
    hours,
    minutes,
  } = timeFormat

  // MMM dd hh:mm e.g. Jun 14 15:45
  return <p>{`${monthStrShort} ${day} ${hours}:${minutes}`}</p>
}
```

## Uninstall

In your project directory, run

```bash
npm uninstall current-time-format
```

If you are using yarn

```bash
yarn remove current-time-format
```

## ChangeLog

- 2020/06/18 version 1.0.1 publish
- 2020/06/18 version 1.0.0 publish

## License

MIT © [yang052513](https://github.com/yang052513)
