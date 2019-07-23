import getAmateurRadioInfoByCallsignModules from './modules/getAmateurRadioInfoByCallsign'
import asyncGetAmateurRadioDetailedByCallsignModules from './modules/asyncGetAmateurRadioDetailedByCallsign'
import getAircraftRegistInfoByTailCodeModules from './modules/getAircraftRegistInfoByTailCode'
import asyncGetAirlineInfoByFlightNumberModules from './modules/asyncGetAirlineInfoByFlightNumber'

class Callsign{
    constructor(){
    }
    /**
     * Search DXCC information for amateur radio callsign
     * @param {String} callsign HamRadio Callsign
     */
    getAmateurRadioInfoByCallsign(callsign){
        return getAmateurRadioInfoByCallsignModules(callsign)
    }

    /**
     * async Search DXCC information for amateur radio callsign
     * Use promise
     * @param {String} callsign Amateur Callsign
     * @param {String} url Amateur Callsign DataBase Network address
     */
    asyncGetAmateurRadioDetailedByCallsign(callsign,url){
        return asyncGetAmateurRadioDetailedByCallsignModules(callsign,url)
    }

    /**
     * Search attribution based on the Tail code
     * @param {String} tailcode Aircraft Tail Code
     */
    getAircraftRegistInfoByTailCode(tailcode){
        return getAircraftRegistInfoByTailCodeModules(tailcode)
    }

    /**
     * Get airline information by flight number
     * @param {String} flightnumber Flight Number
     * @param {String} url Flight Number Database
     */
    asyncGetAirlineInfoByFlightNumber(flightnumber,url){
        return asyncGetAirlineInfoByFlightNumberModules(flightnumber,url)
    }
}

export default new Callsign()