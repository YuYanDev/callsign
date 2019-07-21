const superagent = require('superagent');
const cheerio = require('cheerio');
const cheerioTableparser = require('cheerio-tableparser');
const fs = require('fs')

const needProxy = false

const reptileUrl = "https://en.wikipedia.org/wiki/List_of_airline_codes";

function praseData(html){
    let $ = cheerio.load(html);
    cheerioTableparser($);
    var data = $("#mw-content-text .mw-parser-output table").parsetable(true, true, true);
    var list = []
    for(let i = 1; i<data[0].length; i++){
        let IATA = data[0][i]
        let ICAO
        let name
        let callsign
        let area
        if(data[1][i]){
             ICAO =  data[1][i].replace(/\[.*\]/,'')
        }
        if(data[2][i]){
             name =  data[2][i].replace(/\[.*\]/,'')
        }
        if(data[3][i]){
             callsign =  data[3][i].replace(/\[.*\]/,'')
        }
        if(data[4][i]){
             area =  data[4][i].replace(/\[.*\]/,'')
        }
        list.push(
            {
                IATA,
                ICAO,
                name,
                callsign,
                area
            }
        )
    }
    fs.writeFile('./dist/data/airlineDB.json', JSON.stringify(list, null, 4), 'utf-8', function (err) {
        if (err) {
            console.log(err.stack);
        } else {
            console.log('write ./dist/data/airlineDB.json success');
        }
    });

    fs.writeFile('./src/lib/airlineDB.json', JSON.stringify(list, null, 4), 'utf-8', function (err) {
        if (err) {
            console.log(err.stack);
        } else {
            console.log('write ./src/lib/airlineDB.json success');
        }
    });
}

if(needProxy){
    require('superagent-proxy')(superagent)
    const proxy_uri = "http://127.0.0.1:1087"
    superagent.get(reptileUrl).proxy(proxy_uri).end(function (err, res) {
        if(err){
            throw Error(err);
        }
        praseData(res.text)
    });
}else{
    superagent.get(reptileUrl).end(function (err, res) {
        if(err){
            throw Error(err);
        }
        praseData(res.text)
    });
}
