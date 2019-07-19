# Callsign.js Docs

##### searchAmateurRadioCallsign

Search DXCC information for amateur radio callsign
`searchAmateurRadioCallsign('aa1aa')`

return info

```js
// {
//     "prefix": "4S", //callsign prefix
//     "area": "Sri Lanka", //callsign DXCC name
//     "areacn": "斯里兰卡", //callsign Chinese DXCC name
//     "areacode": "LK" // callsign DXCC ISO3166 code
// },
```

##### asyncGetARCallsignDetailed (now noly support browser)

Get the detailed data of the call sign asynchronously

`asyncGetARCallsignDetailed(callsign,url)`

Url is the address where the full information JSON is stored.
You can use the tools in the tools directory to customize your data with CTY.csv.

``` js
callsign.asyncGetARCallsignDetailed('ba1aa').then(res => {
  console.log(res)
})

// {
//     "prefix": "CE",
//     "areaname": "Chile",
//     "cqzone": "12",
//     "ituzone": "14",
//     "timezone": "4.0",
//     "areacode": "CL",
//     "areacn": "智利"
// },
```
