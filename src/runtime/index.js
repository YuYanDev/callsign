import callsign from '../esm'

if (typeof window !== 'undefined') {
    window.callsign = callsign
} else {
console.error(
    '[callsign.js]: This applies to the browser version, please use the Node.js version!'
    )
}