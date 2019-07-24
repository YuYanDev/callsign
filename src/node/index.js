;(function(factory) {
  if (typeof module !== 'undefined') {
    module.exports = factory()
  } else {
    factory()
  }
})(function() {
  if (typeof window !== 'undefined') {
    console.error(
      '[callsign.js]: This applies to the Nodejs version, please use the esm or runtime version!'
    )
  } else {
    return new Callsign()
  }
})

/**
 * Callsign Class
 */
function Callsign(){}

/**
 * Search DXCC information for amateur radio callsign
 * @param {String} callsign HamRadio Callsign
 */
Callsign.prototype.getAmateurRadioInfoByCallsign = require('./modules/getAmateurRadioInfoByCallsign')

/**
 * Search DXCC information for amateur radio callsign
 * @param {String} callsign Amateur Callsign
 */
Callsign.prototype.getAmateurRadioDetailedByCallsign = require('./modules/getAmateurRadioDetailedByCallsign')

Callsign.prototype.asyncGetAmateurRadioDetailedByCallsign = function(){
  throw new Error('\n\n[callsign.js]: API Error \n\n "asyncGetAmateurRadioDetailedByCallsign" only supports Browser environment, please use "getAmateurRadioDetailedByCallsign"\n')
}

/**
 * Search attribution based on the Tail code
 * @param {String} tailcode Aircraft Tail Code
 */
Callsign.prototype.getAircraftRegistInfoByTailCode = require('./modules/getAircraftRegistInfoByTailCode')

/**
 * Get airline information by flight number
 * @param {String} flightnumber Flight Number
 */
Callsign.prototype.getAirlineInfoByFlightNumber = require('./modules/getAirlineInfoByFlightNumber')

Callsign.prototype.asyncGetAirlineInfoByFlightNumber = function(){
  throw new Error('\n\n[callsign.js]: API Error \n\n "asyncGetAirlineInfoByFlightNumber" only supports Browser environment, please use "getAirlineInfoByFlightNumber"\n')
}