const arelineDB = require('../../lib/airlineDB.json')

const getAirlineInfoByFlightNumber = flightnumber => {
  if (typeof flightnumber !== 'string') {
    console.error('[callsign.js]: flightnumber must be string')
    return
  }
  flightnumber = flightnumber.toUpperCase()
  let three = flightnumber.substr(2, 1)
  let result
  if (three >= 'A' && three <= 'Z') {
    result = arelineDB.find(x => {
      return x.ICAO === flightnumber.substring(0, 3)
    })
  } else {
    result = arelineDB.find(x => {
      return x.IATA === flightnumber.substring(0, 2)
    })
  }
  return result
}

module.exports = getAirlineInfoByFlightNumber
