import searchAmateurRadioCallsignModules from './modules/searchAmateurRadioCallsign'

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
}

export default new Callsign()