const superagent = require('superagent');
const cheerio = require('cheerio');
const cheerioTableparser = require('cheerio-tableparser');
const fs = require('fs')

const needProxy = false

const reptileUrl = "https://en.wikipedia.org/wiki/List_of_aircraft_registration_prefixes";

function praseData(html){
    let $ = cheerio.load(html);
    cheerioTableparser($);
    var data = $("#mw-content-text .mw-parser-output table").parsetable(true, true, true);
    var list = {
        "1":[],
        "2":[],
        "3":[],
        "4":[]
    } 
    for(let i = 1; i<data[0].length; i++){
        let area = data[0][i]
        if(data[1][i]){
            data[1][i].replace(/\[.*\]/,'').split(",").forEach(element => {
                if(/[a-z]/.test(element)===false){
                    let obj = {
                        area,
                        prefix:element
                    }
                    switch(element.length){
                        case 1:list["1"].push(obj);break
                        case 2:list["2"].push(obj);break
                        case 3:list["3"].push(obj);break
                        case 4:list["4"].push(obj);break
                        default:break
                    }
                }
            });
        }
    }
    fs.writeFile('./src/lib/aircraftDB.json', JSON.stringify(list, null, 4), 'utf-8', function (err) {
        if (err) {
            console.log(err.stack);
        } else {
            console.log('write "./src/lib/aircraftDB.json" success');
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
