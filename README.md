# current-time-format

> A tiny javascript package that access current time componets easily (hour, date, month..etc)

[![NPM](https://img.shields.io/npm/v/react-current-time.svg)](https://www.npmjs.com/package/react-current-time) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install current-time-format --save
```

## Usage

### Function Components

```jsx
import React from 'react'
import { Time } from 'react-current-time'

export default const App = () => {
    return (
        <Time />
    )
}
```

### Class Components

```jsx
import React, { Component } from 'react'
import { time } from 'react-current-time'

class Example extends Component {
  render() {
    return <Time />
  }
}
```

## License

MIT © [yang052513](https://github.com/yang052513)
