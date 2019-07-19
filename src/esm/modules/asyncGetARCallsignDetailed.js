import { ajax } from '../utils'

const getARCallsignDetailed = (callsignDB, callsign) => {
  let result1 = callsignDB['1'].find(x => {
    return x.prefix === callsign.substring(0, 1)
  })
  let result2 = callsignDB['2'].find(x => {
    return x.prefix === callsign.substring(0, 2)
  })
  let result3 = callsignDB['3'].find(x => {
    return x.prefix === callsign.substring(0, 3)
  })
  let result4 = callsignDB['4'].find(x => {
    return x.prefix === callsign.substring(0, 4)
  })
  let result
  if (result4 === undefined) {
    if (result3 === undefined) {
      if (result2 === undefined) {
        if (result1 === undefined) {
          result = undefined
        } else {
          result = result1
        }
      } else {
        result = result2
      }
    } else {
      result = result3
    }
  } else {
    result = result4
  }
  return result
}

const asyncGetARCallsignDetailed = (callsign, url) => {
  if (typeof callsign !== 'string') {
    console.error('[callsign.js]: Callsign must be string')
    return
  }
  callsign = callsign.toUpperCase()
  if (url === undefined) {
    url = 'https://unpkg.com/callsign/dist/data/cty.json'
  }
  return new Promise((resolve, reject) => {
    ajax('GET', url)
      .then(res => {
        let getDetail = getARCallsignDetailed(JSON.parse(res), callsign)
        resolve(getDetail)
      })
      .catch(e => {
        reject('[callsign.js]: Network Error')
      })
  })
}

export default asyncGetARCallsignDetailed
