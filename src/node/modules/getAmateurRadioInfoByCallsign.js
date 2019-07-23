const FirstLetterIndex = require ('../../lib/HamCallsignDB/callsignindexone.json')
const SecondLetterIndex = require ('../../lib/HamCallsignDB/callsignindextwo.json')
const ThirdLetterIndex = require ('../../lib/HamCallsignDB/callsignindexthree.json')
const FourthLetterIndex = require ('../../lib/HamCallsignDB/callsignindexfour.json')

const getAmateurRadioInfoByCallsign = (callsign) => {
    if(typeof callsign !== 'string'){
        console.error('[callsign.js]: Callsign must be string')
        return;
    }
    callsign = callsign.toUpperCase()
    let result1 = FirstLetterIndex.find((x) => {
        return x.prefix === callsign.substring(0, 1)
    })
    let result2 = SecondLetterIndex.find((x) => {
        return x.prefix === callsign.substring(0, 2)
    })
    let result3 = ThirdLetterIndex.find((x) => {
        return x.prefix === callsign.substring(0, 3)
    })
    let result4 = FourthLetterIndex.find((x) => {
        return x.prefix === callsign.substring(0, 4)
    })
    let result
    if(result4===undefined){
        if(result3===undefined){
            if(result2===undefined){
                if(result1===undefined){
                    result = undefined
                }else{
                    result = result1
                }
            }else{
                result = result2
            }
        }else{
            result = result3    
        }
    }else{
        result = result4  
    }
    return result
}   

module.exports = getAmateurRadioInfoByCallsign