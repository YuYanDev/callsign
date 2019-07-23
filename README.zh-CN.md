[English](./README.md) | 简体中文

<h1 align="center">Callsign.js</h1>

<div align="center">
    Callsign.js是用于模糊查询各类呼号信息的库
    <br/>
    <br/>
  <a href="https://npmcharts.com/compare/callsign?minimal=true"><img src="https://img.shields.io/npm/dm/callsign.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/callsign"><img src="https://img.shields.io/npm/v/callsign.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/callsign"><img src="https://img.shields.io/npm/l/callsign.svg" alt="License"></a>
  <!-- <a href="https://t.me/"><img src="https://img.shields.io/badge/chat-on%20discord-7289da.svg" alt="Chat"></a> -->
  <!-- <br> -->
</div>

## 特性

- 📻 **业余电台呼号** 支持查询业余电台呼号归属地
- ✈️ **航空器呼号（机尾码）** 支持查询航空器呼号（通常由机尾码决定）
- 🛫 **航班呼号** 支持查询航班呼号

## 快速开始

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
      console.log(callsign.getAmateurRadioInfoByCallsign('ab1aa'))
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
console.log(callsign.getAmateurRadioInfoByCallsign('ab1aa'))
```

## 文档

[前往查看](./docs/)

## 参与贡献

非常欢迎你的贡献，您可以直接 fork 并提交您的 feature 分支，在 issue 中，我会处理您的提交申请

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2019-present, YuYan (BG6TTI)
