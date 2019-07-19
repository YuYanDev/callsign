import searchAmateurRadioCallsignModules from './modules/searchAmateurRadioCallsign'
import asyncGetARCallsignDetailedModules from './modules/asyncGetARCallsignDetailed'
import getAircraftRegistInfoByTailCodeModules from './modules/getAircraftRegistInfoByTailCode'
import asyncGetAirlineInfoByFlightNumberModules from './modules/asyncGetAirlineInfoByFlightNumber'

class Callsign{
    constructor(){
    }
    /**
     * Search DXCC information for amateur radio callsign
     * @param {String} callsign HamRadio Callsign
     */
    searchAmateurRadioCallsign(callsign){
        return searchAmateurRadioCallsignModules(callsign)
    }

    asyncGetARCallsignDetailed(callsign,url){
        return asyncGetARCallsignDetailedModules(callsign,url)
    }

    getAircraftRegistInfoByTailCode(tailcode){
        return getAircraftRegistInfoByTailCodeModules(tailcode)
    }

    asyncGetAirlineInfoByFlightNumber(flightnumber,url){
        return asyncGetAirlineInfoByFlightNumberModules(flightnumber,url)
    }
}

export default new Callsign()