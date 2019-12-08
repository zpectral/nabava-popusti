//const fs = require('fs');
//const Tabulator = require('tabulator-tables'); 

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
var myFiles = [ "https://zpectral.github.io/nabava-popusti/data/monitors.json" ];
// where you want to store the data
var jsonData = [];
// loop through each file
myFiles.forEach(function (file, i) {
    // and call loadFile
    // note how a function is passed as the second parameter
    // that's the callback function
    loadFile(file, function (responseText) {
        // we set jsonData[i] to the parse data since the requests
        // will not necessarily come in order
        // so we can't use JSONdata.push(JSON.parse(responseText));
        // if the order doesn't matter, you can use push
        jsonData[i] = JSON.parse(responseText);
        // or you could choose not to store it in an array.
        // whatever you decide to do with it, it is available as
        // responseText within this scope (unparsed!)
    })
})

console.log(jsonData);

//let JSONold = fs.readFileSync("./monitors.json");
//let monitors = JSON.parse(JSONold);

var monitorsTable = new Tabulator("#example-table", {
    ajaxURL: myFiles[0],
    height:"311px",
    //autoColumns:true,
    columns:[
        {title:"Info", field:"itemInfo", sorter:"string"},
        {title:"Cijena", field:"itemPrice", sorter:"number"},
        {title:"Popust %", field:"percentChange", sorter:"number"},
        {title:"Promjena cijne", field:"priceChange", sorter:"number"},
        {title:"Dodano", field:"dateAdded", sorter:"date", formatter:"datetime", formatterParams:{
            inputFormat:"DD-MM-YYYY",
            outputFormat:"DD/MM/YYYY",
            invalidPlaceholder:"(invalid date)",
        }}
    ],
});

