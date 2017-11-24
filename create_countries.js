var TOOLS = {};
TOOLS.fs = require('fs');
TOOLS.csv = require('csvtojson');
TOOLS.request = require('request');

TOOLS.capitalize = function( str ){
    var str = str.toLowerCase();
    var pieces = str.split(" ");
    for ( var i = 0; i < pieces.length; i++ )
    {
        var j = pieces[i].charAt(0).toUpperCase();
        pieces[i] = j + pieces[i].substr(1);
    }
    return pieces.join(" ");
}
TOOLS.createID = function( str ){
    str = str.replace(/,|\(|\)/g, '');
    str = str.split(' ').join('_').toLowerCase();
    return str
    // return (((str).split(' ').join('_')).replace('/.|,|\(|\)/g', '')).toLowerCase();
}

TOOLS.getFiles = function(dir, files_){
    files_ = files_ || [];
    var files = TOOLS.fs.readdirSync(dir);
    for (var i in files){
        var name = dir + '/' + files[i];
        // console.log(files[i]);
        if (TOOLS.fs.statSync(name).isDirectory()){
            TOOLS.getFiles(name, files_);
        } else {
            if ( !(/.DS_Store/g).test(name)) {
                files_.push(name);
            }
        }
    }
    return files_;
}

TOOLS.writeFile = function(csvData, pathTo, name){
    var string = [];
    var index = 0;
    var stream = TOOLS.fs.createWriteStream(pathTo+"/"+name+".js");

    stream.once('open', function(fd) {
        TOOLS.csv({noheader:true})
        .fromStream(TOOLS.request.get(csvData))
        .on('json',(jsonObj)=>{

            if ( jsonObj['field1'] != "official_name_ar" && jsonObj['field10']) {
                index++;
                string.push({
                    index: index,
                    id : TOOLS.createID(jsonObj['field3']),
                    name : jsonObj['field3'],
                    iso : jsonObj['field7'],
                    data: {
                        iso_2 : jsonObj['field7'],
                        iso_3 : jsonObj['field8'],
                        phone : jsonObj['field33'],
                        currency : jsonObj['field10'],
                        ttl : jsonObj['field54'],
                        capital : jsonObj['field29']
                    }
                })
            }

        })
        .on('done',(error)=>{
            stream.write("(function() {\n");
            stream.write("\t\"use strict\";\n");
            stream.write("\tvar "+name+ " = ");
            stream.write(JSON.stringify(string, null, "\t"))
            stream.write(";\nif (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {\n\tmodule.exports = "+name+"; } \nelse {\n\twindow."+name+" = "+name+";}\n})();");
        });
        // stream.end();
    });

}

TOOLS.init = function(){
    TOOLS.config = {}
    TOOLS.config.csvData = "https://raw.githubusercontent.com/datasets/country-codes/master/data/country-codes.csv";
    TOOLS.config.outputName = "countries";
    TOOLS.config.pathTo = "src/js";
    TOOLS.writeFile(TOOLS.config.csvData, TOOLS.config.pathTo, TOOLS.config.outputName);
}
TOOLS.init();