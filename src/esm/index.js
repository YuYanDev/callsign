import searchAmateurRadioCallsignModules from './modules/searchAmateurRadioCallsign'
import asyncGetARCallsignDetailedModules from './modules/asyncGetARCallsignDetailed'

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
}

export default new Callsign()