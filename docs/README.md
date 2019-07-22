# Callsign.js Docs

Callsign.js Docs

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

##### asyncGetARCallsignDetailed (browser noly) || getARCallsignDetailed (Node.js noly)

Get the detailed data of the call sign

`asyncGetARCallsignDetailed(callsign,url)`
Url is the address where the full information JSON is stored.
default is [https://unpkg.com/callsign/dist/data/cty.json](https://unpkg.com/callsign/dist/data/cty.json)

`getARCallsignDetailed(callsign)`

You can use the tools in the tools directory to customize your data with CTY.csv.

```js
// browser
callsign.asyncGetARCallsignDetailed('ba1aa').then(res => {
  console.log(res)
})

// Node.js
callsign.getARCallsignDetailed('BA1AA')

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

##### getAircraftRegistInfoByTailCode

Inquire about the registered place of the aircraft based on the aircraft tail number

`getAircraftRegistInfoByTailCode(tailcode)`

You can use the `npm run uploaddata:aircraftDB` command to call the web crawler in the tools folder to update the data.

```js
callsign.getAircraftRegistInfoByTailCode('B-HVP')
callsign.getAircraftRegistInfoByTailCode('RA-12345')

// {
//   area: 'Russian Federation',
//   prefix: 'RA'
// }
```

##### asyncGetAirlineInfoByFlightNumber (browser noly) || getAirlineInfoByFlightNumber (Node.js noly)

Get airline information based on flight number

`asyncGetAirlineInfoByFlightNumber(flightnumber, url)`
Url is the address where the full information JSON is stored.
default is [https://unpkg.com/callsign/dist/data/arelineDB.json](https://unpkg.com/callsign/dist/data/arelineDB.json)

You can call the crawler in the tools folder to update the data and store it on your own server.

`getAirlineInfoByFlightNumber(flightnumber)`

```js
callsign.asyncGetAirlineInfoByFlightNumber('CES7199').then(res => {
  console.log(res)
})

callsign.getAirlineInfoByFlightNumber('NH17')

// {
//   IATA: 'MU',
//   ICAO: 'CES',
//   name: 'China Eastern Airlines',
//   callsign: 'CHINA EASTERN',
//   area: 'China'
// }
```
