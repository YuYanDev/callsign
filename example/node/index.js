var callsign = require('../../src/node')

console.log(callsign.searchAmateurRadioCallsign('ab1aa'))
console.log(callsign.searchAmateurRadioCallsign('ba1aa'))
console.log(callsign.searchAmateurRadioCallsign('bs7h').area)
console.log(callsign.searchAmateurRadioCallsign('e2a').areacode)
console.log(callsign.searchAmateurRadioCallsign('bv7aa'))
console.log(callsign.searchAmateurRadioCallsign('k2s').prefix)