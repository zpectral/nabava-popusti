//const fs = require('fs');
//const Tabulator = require('tabulator-tables'); 

function loadJSON(callback) {   
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        // Replace 'my_data' with the path to your file
        xobj.open('GET', 'https://zpectral.github.io/nabava-popusti/data/monitors.json', true); 
        xobj.onreadystatechange = function () {
                if (xobj.readyState == 4 && xobj.status == "200") {
                        callback(xobj.responseText);
                }
        };
        xobj.send(null);  
 }


 let loaded = loadJSON(JSON.parse);

//let JSONold = fs.readFileSync("./monitors.json");
//let monitors = JSON.parse(JSONold);
console.log(loaded);