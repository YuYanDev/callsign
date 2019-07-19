import aircraftDB from '../../lib/aircraftDB.json'

const getAircraftRegistInfoByTailCode = tailcode => {
  if (typeof tailcode !== 'string') {
    console.error('[callsign.js]: Tailcode must be string')
    return
  }
  tailcode = tailcode.toUpperCase()
  let result1 = aircraftDB['1'].find(x => {
    return x.prefix === tailcode.substring(0, 1)
  })
  let result2 = aircraftDB['2'].find(x => {
    return x.prefix === tailcode.substring(0, 2)
  })
  let result3 = aircraftDB['3'].find(x => {
    return x.prefix === tailcode.substring(0, 3)
  })
  let result4 = aircraftDB['4'].find(x => {
    return x.prefix === tailcode.substring(0, 4)
  })
  let result
  if (result4 === undefined) {
    if (result3 === undefined) {
      if (result2 === undefined) {
        if (result1 === undefined) {
          result = undefined
        } else {
            if(tailcode.length === 7 && result1.prefix === 'B'){
                result1.area = "Taiwan"
            }
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

export default getAircraftRegistInfoByTailCode
