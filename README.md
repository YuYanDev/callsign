English | [简体中文](./README.zh-CN.md)

<h1 align="center">Callsign.js</h1>

<div align="center">
    Callsign.js is a library for fuzzy querying amateur radio callsign information
    <br/>
    <br/>
  <a href="https://npmcharts.com/compare/callsign?minimal=true"><img src="https://img.shields.io/npm/dm/callsign.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/callsign"><img src="https://img.shields.io/npm/v/callsign.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/callsign"><img src="https://img.shields.io/npm/l/callsign.svg" alt="License"></a>
  <!-- <a href="https://t.me/"><img src="https://img.shields.io/badge/chat-on%20discord-7289da.svg" alt="Chat"></a> -->
  <!-- <br> -->
</div>

## Quick start

via Browser

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Callsign Demo</title>
    <script src="https://unpkg.com/callsign/dist/callsign.min.js"></script>
    <!-- <script src="https://unpkg.com/callsign/dist/callsign.js"></script> -->
  </head>
  <body>
    <script>
      console.log(callsign.searchAmateurRadioCallsign('ab1aa'))
    </script>
  </body>
</html>
```

via NPM

```shell
> npm install callsign
```

```js
import callsign from 'callsign'
// const callsign = require('callsign/src/node') // via Node.js
console.log(callsign.searchAmateurRadioCallsign('ab1aa'))
```

## Document

[Go to view](./docs/)

## Contribution

Your contribution is very welcome, you can fork and submit your feature branch directly, in the issue, I will process your submission

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2019-present, YuYan (BG6TTI)
