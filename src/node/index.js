const searchAmateurRadioCallsign = require('./modules/searchAmateurRadioCallsign')

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
Callsign.prototype.searchAmateurRadioCallsign = searchAmateurRadioCallsign