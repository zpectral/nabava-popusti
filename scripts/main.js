// we need a function to load files
// done is a "callback" function
// so you call it once you're finished and pass whatever you want
// in this case, we're passing the `responseText` of the XML request
var loadFile = function (filePath, done) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () { return done(this.responseText) }
    xhr.open("GET", filePath, true);
    xhr.send();
}
// paths to all of your files
var myFiles = { monitori: "https://zpectral.github.io/nabava-popusti/data/monitori.json",
                graficke: "https://zpectral.github.io/nabava-popusti/data/graficke-kartice.json",
                misevi: "https://zpectral.github.io/nabava-popusti/data/misevi.json",
                procesori: "https://zpectral.github.io/nabava-popusti/data/procesori.json" };

// where you want to store the data
var jsonData = [];
// loop through each file
function notNeededAtm(arr) {
    arr.forEach(function (file, i) {
        // and call loadFile
        // note how a function is passed as the second parameter
        // that's the callback function
        loadFile(file, function (responseText) {
            // we set jsonData[i] to the parse data since the requests
            // will not necessarily come in order
            // so we can't use JSONdata.push(JSON.parse(responseText));
            // if the order doesn't matter, you can use push
            console.log(responseText);
            jsonData[i] = JSON.parse(responseText);
            // or you could choose not to store it in an array.
            // whatever you decide to do with it, it is available as
            // responseText within this scope (unparsed!)
        })
    })
}

//notNeededAtm(myFiles);


var monitoriTable= new Tabulator("#monitori", {
    ajaxURL: myFiles["monitori"],
    height:"311px",
    layout:"fitData",
    //autoColumns:true,
    columns:[
        {title:"Info", field:"itemInfo", sorter:"string"},
        {title:"Cijena", field:"itemPrice", align:"right", sorter:"number", formatter:"money", formatterParams:{
            decimal:",",
            thousand:".",
            symbol:" kn",
            symbolAfter:" kn",
            precision:0,
        }},
        {title:"Popust %", field:"percentChange", align:"right", sorter:"number", formatter:"money", formatterParams:{
            decimal:",",
            thousand:".",
            symbol:"%",
            symbolAfter:"%",
            precision:0,
        }},
        {title:"Ukupna promjena", field:"priceChange", align:"right", sorter:"number", formatter:"money", formatterParams:{
            decimal:",",
            thousand:".",
            symbol:" kn",
            symbolAfter:" kn",
            precision:0,
        }},
        {title:"Dodano", field:"dateAdded", align:"right", sorter:"date", formatter:"datetime", formatterParams:{
            inputFormat:"DD-MM-YYYY",
            outputFormat:"DD-MM-YYYY",
            invalidPlaceholder:"(invalid date)",
        }},
        {title:"Link", field:"itemLink", formatter:"link", formatterParams:{
            label:"link",
            urlField:"itemLink",
            target:"_blank",
        }}
    ],
});


var monitoriTable= new Tabulator("#procesori", {
    ajaxURL: myFiles["procesori"],
    height:"311px",
    layout:"fitData",
    //autoColumns:true,
    columns:[
        {title:"Info", field:"itemInfo", sorter:"string"},
        {title:"Cijena", field:"itemPrice", align:"right", sorter:"number", formatter:"money", formatterParams:{
            decimal:",",
            thousand:".",
            symbol:" kn",
            symbolAfter:" kn",
            precision:0,
        }},
        {title:"Popust %", field:"percentChange", align:"right", sorter:"number", formatter:"money", formatterParams:{
            decimal:",",
            thousand:".",
            symbol:"%",
            symbolAfter:"%",
            precision:0,
        }},
        {title:"Ukupna promjena", field:"priceChange", align:"right", sorter:"number", formatter:"money", formatterParams:{
            decimal:",",
            thousand:".",
            symbol:" kn",
            symbolAfter:" kn",
            precision:0,
        }},
        {title:"Dodano", field:"dateAdded", align:"right", sorter:"date", formatter:"datetime", formatterParams:{
            inputFormat:"DD-MM-YYYY",
            outputFormat:"DD-MM-YYYY",
            invalidPlaceholder:"(invalid date)",
        }},
        {title:"Link", field:"itemLink", formatter:"link", formatterParams:{
            label:"link",
            urlField:"itemLink",
            target:"_blank",
        }}
    ],
});


var monitoriTable= new Tabulator("#graficke-kartice", {
    ajaxURL: myFiles["graficke"],
    height:"311px",
    layout:"fitData",
    //autoColumns:true,
    columns:[
        {title:"Info", field:"itemInfo", sorter:"string"},
        {title:"Cijena", field:"itemPrice", align:"right", sorter:"number", formatter:"money", formatterParams:{
            decimal:",",
            thousand:".",
            symbol:" kn",
            symbolAfter:" kn",
            precision:0,
        }},
        {title:"Popust %", field:"percentChange", align:"right", sorter:"number", formatter:"money", formatterParams:{
            decimal:",",
            thousand:".",
            symbol:"%",
            symbolAfter:"%",
            precision:0,
        }},
        {title:"Ukupna promjena", field:"priceChange", align:"right", sorter:"number", formatter:"money", formatterParams:{
            decimal:",",
            thousand:".",
            symbol:" kn",
            symbolAfter:" kn",
            precision:0,
        }},
        {title:"Dodano", field:"dateAdded", align:"right", sorter:"date", formatter:"datetime", formatterParams:{
            inputFormat:"DD-MM-YYYY",
            outputFormat:"DD-MM-YYYY",
            invalidPlaceholder:"(invalid date)",
        }},
        {title:"Link", field:"itemLink", formatter:"link", formatterParams:{
            label:"link",
            urlField:"itemLink",
            target:"_blank",
        }}
    ],
});


var monitoriTable= new Tabulator("#misevi", {
    ajaxURL: myFiles["misevi"],
    height:"311px",
    layout:"fitData",
    //autoColumns:true,
    columns:[
        {title:"Info", field:"itemInfo", sorter:"string"},
        {title:"Cijena", field:"itemPrice", align:"right", sorter:"number", formatter:"money", formatterParams:{
            decimal:",",
            thousand:".",
            symbol:" kn",
            symbolAfter:" kn",
            precision:0,
        }},
        {title:"Popust %", field:"percentChange", align:"right", sorter:"number", formatter:"money", formatterParams:{
            decimal:",",
            thousand:".",
            symbol:"%",
            symbolAfter:"%",
            precision:0,
        }},
        {title:"Ukupna promjena", field:"priceChange", align:"right", sorter:"number", formatter:"money", formatterParams:{
            decimal:",",
            thousand:".",
            symbol:" kn",
            symbolAfter:" kn",
            precision:0,
        }},
        {title:"Dodano", field:"dateAdded", align:"right", sorter:"date", formatter:"datetime", formatterParams:{
            inputFormat:"DD-MM-YYYY",
            outputFormat:"DD-MM-YYYY",
            invalidPlaceholder:"(invalid date)",
        }},
        {title:"Link", field:"itemLink", formatter:"link", formatterParams:{
            label:"link",
            urlField:"itemLink",
            target:"_blank",
        }}
    ],
});