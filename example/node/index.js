var callsign = require('../../src/node')

console.log(callsign.searchAmateurRadioCallsign('ab1aa'))

console.log(callsign.getARCallsignDetailed('BV7RR'))
console.log(callsign.getARCallsignDetailed('BS7H'))

console.log(callsign.getAircraftRegistInfoByTailCode('RA-55956'))
console.log(callsign.getAircraftRegistInfoByTailCode('B-HVP'))
console.log(callsign.getAircraftRegistInfoByTailCode('B-101A'))
console.log(callsign.getAircraftRegistInfoByTailCode('B-10100'))

console.log(callsign.getAirlineInfoByFlightNumber('CES5705'))
console.log(callsign.getAirlineInfoByFlightNumber('CA19'))
console.log(callsign.getAirlineInfoByFlightNumber('AF5597'))
console.log(callsign.getAirlineInfoByFlightNumber('NH17'))