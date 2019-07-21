const fs = require('fs')
const sc = require('../src/node')

fs.readFile('./tools/cty.csv', function (err, data) {
    if (err) {
        console.log(err.stack);
        return;
    }

    data=data.toString();
    var eachDXCC = data.split("\n");
    var fullsize = {
        "1":[],
        "2":[],
        "3":[],
        "4":[],
        // "special":[]
    }

    for(let i = 0; i<eachDXCC.length-1;i++){
        item = eachDXCC[i].split(',');
        let prefix = item[0]
        let areaname = item[1]
        let cqzone = item[4]
        let ituzone = item[5]
        let timezone = item[8]
        item[9].split(";\r")[0].split(" ").forEach(element => {
            prefix = element.split("/")[0].replace(/=/g,'')
            let cqzonematch = prefix.match(/\((\d+)\)/)
            if(cqzonematch!==null){
                cqzone = cqzonematch.toString().split(',')[1]
            }
            let ituzonematch = prefix.match(/\[(\d+)\]/)
            if(ituzonematch!==null){
                ituzone = ituzonematch.toString().split(',')[1]
            }
            
            prefix = prefix.replace(/\[.*\]/,'').replace(/\(.*\)/,'')
            
            isodb = sc.searchAmateurRadioCallsign(prefix)
            
            let obj = {
                prefix,
                areaname,
                cqzone,
                ituzone,
                timezone,
                areacode: isodb===undefined?'':isodb.areacode,
                areacn: isodb===undefined?areaname:isodb.areacn
            }
           
            switch (prefix.length){
                case 1:fullsize["1"].push(obj);break
                case 2:fullsize["2"].push(obj);break
                case 3:fullsize["3"].push(obj);break
                case 4:fullsize["4"].push(obj);break
                // default:fullsize["special"].push(obj);break
                default:break
            }
            
        });
    }
    fs.writeFile('./dist/data/cty.json', JSON.stringify(fullsize, null, 4), 'utf-8', function (err) {
        if (err) {
            console.log(err.stack);
        } else {
            console.log('write ./dist/data/cty.json success');
        }
    });
    fs.writeFile('./src/lib/HamCallsignDB/cty.json', JSON.stringify(fullsize, null, 4), 'utf-8', function (err) {
        if (err) {
            console.log(err.stack);
        } else {
            console.log('write ./src/lib/HamCallsignDB/cty.json success');
        }
    });
});


