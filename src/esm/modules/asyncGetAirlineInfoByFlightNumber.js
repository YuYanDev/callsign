import { ajax } from '../utils'

const getAirlineInfoByFlightNumber = (arelineDB, flightnumber) => {
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

const asyncGetAirlineInfoByFlightNumber = (flightnumber, url) => {
  if (typeof flightnumber !== 'string') {
    console.error('[callsign.js]: flightnumber must be string')
    return
  }
  flightnumber = flightnumber.toUpperCase()
  if (url === undefined) {
    url = 'https://unpkg.com/callsign/dist/data/arelineDB.json'
  }
  return new Promise((resolve, reject) => {
    ajax('GET', url)
      .then(res => {
        let getDetail = getAirlineInfoByFlightNumber(
          JSON.parse(res),
          flightnumber
        )
        resolve(getDetail)
      })
      .catch(e => {
        reject('[callsign.js]: Network Error')
      })
  })
}

export default asyncGetAirlineInfoByFlightNumber
