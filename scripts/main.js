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
                procesori: "https://zpectral.github.io/nabava-popusti/data/procesori.json",
                tipkovnice: "https://zpectral.github.io/nabava-popusti/data/tipkovnice.json",
                sisaci: "https://zpectral.github.io/nabava-popusti/data/sisaci-i-trimeri.json",
                slusalice: "https://zpectral.github.io/nabava-popusti/data/gaming-slusalice.json" 
            };

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

// tab code
function openTab(evt, targetid) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(targetid).style.display = "block";
    evt.currentTarget.className += " active";

    switch (targetid) {
        case 'procParent':
            procesoriTable.redraw();
            break;
        case 'monParent':
            monitoriTable.redraw();
            break;
        case 'grafParent':
            grafickeTable.redraw();
            break;
        case 'misParent':
            miseviTable.redraw();
            break;
        case 'tipParent':
            tipkovniceTable.redraw();
            break;
        case 'slusParent':
            slusaliceTable.redraw();
            break;
        case 'sisParent':
            sisaciTable.redraw();
            break;
        default:
            console.log("default? why?");
    }
} 


var monitoriTable= new Tabulator("#monitori", {
    ajaxURL: myFiles["monitori"],
    height:"800px",
    layout:"fitColumns",
    responsiveLayout:true,
    columns:[
        {title:"Info", field:"itemInfo", minWidth:300, sorter:"string", headerFilter:"input", responsive:0},
        {title:"Cijena", field:"itemPrice", align:"right", width:90, responsive:0, sorter:"number", formatter:"money", formatterParams:{
            decimal:",",
            thousand:".",
            symbol:" kn",
            symbolAfter:" kn",
            precision:0,
        }},
        {title:"Promjena", field:"percentChange", align:"right", width:90, responsive:0, sorter:"number", formatter:"money", formatterParams:{
            decimal:",",
            thousand:".",
            symbol:"%",
            symbolAfter:"%",
            precision:0,
        }},
        {title:"Razlika", field:"priceChange", align:"right", width:90, responsive:2, sorter:"number", formatter:"money", formatterParams:{
            decimal:",",
            thousand:".",
            symbol:" kn",
            symbolAfter:" kn",
            precision:0,
        }},
        {title:"Update", field:"dateUpdated", align:"right", width:90, responsive:1, sorter:"date", formatter:"datetime", formatterParams:{
            inputFormat:"DD-MM-YYYY",
            outputFormat:"DD-MM-YYYY",
            invalidPlaceholder:"(invalid date)",
        }},
        {title:"Dodano", field:"dateAdded", align:"right", width:90, responsive:1, sorter:"date", formatter:"datetime", formatterParams:{
            inputFormat:"DD-MM-YYYY",
            outputFormat:"DD-MM-YYYY",
            invalidPlaceholder:"(invalid date)",
        }},
        {title:"Link", field:"itemLink", width:70, responsive:0, formatter:"link", formatterParams:{
            label:"link",
            urlField:"itemLink",
            target:"_blank",
        }}
    ],
});


var procesoriTable = new Tabulator("#procesori", {
    ajaxURL: myFiles["procesori"],
    height:"800px",
    layout:"fitColumns",
    responsiveLayout:true,
    columns:[
        {title:"Info", field:"itemInfo", minWidth:300, sorter:"string", headerFilter:"input", responsive:0},
        {title:"Cijena", field:"itemPrice", align:"right", width:90, responsive:0, sorter:"number", formatter:"money", formatterParams:{
            decimal:",",
            thousand:".",
            symbol:" kn",
            symbolAfter:" kn",
            precision:0,
        }},
        {title:"Promjena", field:"percentChange", align:"right", width:90, responsive:0, sorter:"number", formatter:"money", formatterParams:{
            decimal:",",
            thousand:".",
            symbol:"%",
            symbolAfter:"%",
            precision:0,
        }},
        {title:"Razlika", field:"priceChange", align:"right", width:90, responsive:2, sorter:"number", formatter:"money", formatterParams:{
            decimal:",",
            thousand:".",
            symbol:" kn",
            symbolAfter:" kn",
            precision:0,
        }},
        {title:"Update", field:"dateUpdated", align:"right", width:90, responsive:1, sorter:"date", formatter:"datetime", formatterParams:{
            inputFormat:"DD-MM-YYYY",
            outputFormat:"DD-MM-YYYY",
            invalidPlaceholder:"(invalid date)",
        }},
        {title:"Dodano", field:"dateAdded", align:"right", width:90, responsive:1, sorter:"date", formatter:"datetime", formatterParams:{
            inputFormat:"DD-MM-YYYY",
            outputFormat:"DD-MM-YYYY",
            invalidPlaceholder:"(invalid date)",
        }},
        {title:"Link", field:"itemLink", width:70, responsive:0, formatter:"link", formatterParams:{
            label:"link",
            urlField:"itemLink",
            target:"_blank",
        }}
    ],
});


var grafickeTable = new Tabulator("#graficke-kartice", {
    ajaxURL: myFiles["graficke"],
    height:"800px",
    layout:"fitColumns",
    responsiveLayout:true,
    columns:[
        {title:"Info", field:"itemInfo", minWidth:300, sorter:"string", headerFilter:"input", responsive:0},
        {title:"Cijena", field:"itemPrice", align:"right", width:90, responsive:0, sorter:"number", formatter:"money", formatterParams:{
            decimal:",",
            thousand:".",
            symbol:" kn",
            symbolAfter:" kn",
            precision:0,
        }},
        {title:"Promjena", field:"percentChange", align:"right", width:90, responsive:0, sorter:"number", formatter:"money", formatterParams:{
            decimal:",",
            thousand:".",
            symbol:"%",
            symbolAfter:"%",
            precision:0,
        }},
        {title:"Razlika", field:"priceChange", align:"right", width:90, responsive:2, sorter:"number", formatter:"money", formatterParams:{
            decimal:",",
            thousand:".",
            symbol:" kn",
            symbolAfter:" kn",
            precision:0,
        }},
        {title:"Update", field:"dateUpdated", align:"right", width:90, responsive:1, sorter:"date", formatter:"datetime", formatterParams:{
            inputFormat:"DD-MM-YYYY",
            outputFormat:"DD-MM-YYYY",
            invalidPlaceholder:"(invalid date)",
        }},
        {title:"Dodano", field:"dateAdded", align:"right", width:90, responsive:1, sorter:"date", formatter:"datetime", formatterParams:{
            inputFormat:"DD-MM-YYYY",
            outputFormat:"DD-MM-YYYY",
            invalidPlaceholder:"(invalid date)",
        }},
        {title:"Link", field:"itemLink", width:70, responsive:0, formatter:"link", formatterParams:{
            label:"link",
            urlField:"itemLink",
            target:"_blank",
        }}
    ],
});


var miseviTable = new Tabulator("#misevi", {
    ajaxURL: myFiles["misevi"],
    height:"800px",
    layout:"fitColumns",
    responsiveLayout:true,
    columns:[
        {title:"Info", field:"itemInfo", minWidth:300, sorter:"string", headerFilter:"input", responsive:0},
        {title:"Cijena", field:"itemPrice", align:"right", width:90, responsive:0, sorter:"number", formatter:"money", formatterParams:{
            decimal:",",
            thousand:".",
            symbol:" kn",
            symbolAfter:" kn",
            precision:0,
        }},
        {title:"Promjena", field:"percentChange", align:"right", width:90, responsive:0, sorter:"number", formatter:"money", formatterParams:{
            decimal:",",
            thousand:".",
            symbol:"%",
            symbolAfter:"%",
            precision:0,
        }},
        {title:"Razlika", field:"priceChange", align:"right", width:90, responsive:2, sorter:"number", formatter:"money", formatterParams:{
            decimal:",",
            thousand:".",
            symbol:" kn",
            symbolAfter:" kn",
            precision:0,
        }},
        {title:"Update", field:"dateUpdated", align:"right", width:90, responsive:1, sorter:"date", formatter:"datetime", formatterParams:{
            inputFormat:"DD-MM-YYYY",
            outputFormat:"DD-MM-YYYY",
            invalidPlaceholder:"(invalid date)",
        }},
        {title:"Dodano", field:"dateAdded", align:"right", width:90, responsive:1, sorter:"date", formatter:"datetime", formatterParams:{
            inputFormat:"DD-MM-YYYY",
            outputFormat:"DD-MM-YYYY",
            invalidPlaceholder:"(invalid date)",
        }},
        {title:"Link", field:"itemLink", width:70, responsive:0, formatter:"link", formatterParams:{
            label:"link",
            urlField:"itemLink",
            target:"_blank",
        }}
    ],
});


var tipkovniceTable = new Tabulator("#tipkovnice", {
    ajaxURL: myFiles["tipkovnice"],
    height:"800px",
    layout:"fitColumns",
    responsiveLayout:true,
    columns:[
        {title:"Info", field:"itemInfo", minWidth:300, sorter:"string", headerFilter:"input", responsive:0},
        {title:"Cijena", field:"itemPrice", align:"right", width:90, responsive:0, sorter:"number", formatter:"money", formatterParams:{
            decimal:",",
            thousand:".",
            symbol:" kn",
            symbolAfter:" kn",
            precision:0,
        }},
        {title:"Promjena", field:"percentChange", align:"right", width:90, responsive:0, sorter:"number", formatter:"money", formatterParams:{
            decimal:",",
            thousand:".",
            symbol:"%",
            symbolAfter:"%",
            precision:0,
        }},
        {title:"Razlika", field:"priceChange", align:"right", width:90, responsive:2, sorter:"number", formatter:"money", formatterParams:{
            decimal:",",
            thousand:".",
            symbol:" kn",
            symbolAfter:" kn",
            precision:0,
        }},
        {title:"Update", field:"dateUpdated", align:"right", width:90, responsive:1, sorter:"date", formatter:"datetime", formatterParams:{
            inputFormat:"DD-MM-YYYY",
            outputFormat:"DD-MM-YYYY",
            invalidPlaceholder:"(invalid date)",
        }},
        {title:"Dodano", field:"dateAdded", align:"right", width:90, responsive:1, sorter:"date", formatter:"datetime", formatterParams:{
            inputFormat:"DD-MM-YYYY",
            outputFormat:"DD-MM-YYYY",
            invalidPlaceholder:"(invalid date)",
        }},
        {title:"Link", field:"itemLink", width:70, responsive:0, formatter:"link", formatterParams:{
            label:"link",
            urlField:"itemLink",
            target:"_blank",
        }}
    ],
});


var slusaliceTable = new Tabulator("#slusalice", {
    ajaxURL: myFiles["slusalice"],
    height:"800px",
    layout:"fitColumns",
    responsiveLayout:true,
    columns:[
        {title:"Info", field:"itemInfo", minWidth:300, sorter:"string", headerFilter:"input", responsive:0},
        {title:"Cijena", field:"itemPrice", align:"right", width:90, responsive:0, sorter:"number", formatter:"money", formatterParams:{
            decimal:",",
            thousand:".",
            symbol:" kn",
            symbolAfter:" kn",
            precision:0,
        }},
        {title:"Promjena", field:"percentChange", align:"right", width:90, responsive:0, sorter:"number", formatter:"money", formatterParams:{
            decimal:",",
            thousand:".",
            symbol:"%",
            symbolAfter:"%",
            precision:0,
        }},
        {title:"Razlika", field:"priceChange", align:"right", width:90, responsive:2, sorter:"number", formatter:"money", formatterParams:{
            decimal:",",
            thousand:".",
            symbol:" kn",
            symbolAfter:" kn",
            precision:0,
        }},
        {title:"Update", field:"dateUpdated", align:"right", width:90, responsive:1, sorter:"date", formatter:"datetime", formatterParams:{
            inputFormat:"DD-MM-YYYY",
            outputFormat:"DD-MM-YYYY",
            invalidPlaceholder:"(invalid date)",
        }},
        {title:"Dodano", field:"dateAdded", align:"right", width:90, responsive:1, sorter:"date", formatter:"datetime", formatterParams:{
            inputFormat:"DD-MM-YYYY",
            outputFormat:"DD-MM-YYYY",
            invalidPlaceholder:"(invalid date)",
        }},
        {title:"Link", field:"itemLink", width:70, responsive:0, formatter:"link", formatterParams:{
            label:"link",
            urlField:"itemLink",
            target:"_blank",
        }}
    ],
});


var sisaciTable = new Tabulator("#sisaci", {
    ajaxURL: myFiles["sisaci"],
    height:"800px",
    layout:"fitColumns",
    responsiveLayout:true,
    columns:[
        {title:"Info", field:"itemInfo", minWidth:300, sorter:"string", headerFilter:"input", responsive:0},
        {title:"Cijena", field:"itemPrice", align:"right", width:90, responsive:0, sorter:"number", formatter:"money", formatterParams:{
            decimal:",",
            thousand:".",
            symbol:" kn",
            symbolAfter:" kn",
            precision:0,
        }},
        {title:"Promjena", field:"percentChange", align:"right", width:90, responsive:0, sorter:"number", formatter:"money", formatterParams:{
            decimal:",",
            thousand:".",
            symbol:"%",
            symbolAfter:"%",
            precision:0,
        }},
        {title:"Razlika", field:"priceChange", align:"right", width:90, responsive:2, sorter:"number", formatter:"money", formatterParams:{
            decimal:",",
            thousand:".",
            symbol:" kn",
            symbolAfter:" kn",
            precision:0,
        }},
        {title:"Update", field:"dateUpdated", align:"right", width:90, responsive:1, sorter:"date", formatter:"datetime", formatterParams:{
            inputFormat:"DD-MM-YYYY",
            outputFormat:"DD-MM-YYYY",
            invalidPlaceholder:"(invalid date)",
        }},
        {title:"Dodano", field:"dateAdded", align:"right", width:90, responsive:1, sorter:"date", formatter:"datetime", formatterParams:{
            inputFormat:"DD-MM-YYYY",
            outputFormat:"DD-MM-YYYY",
            invalidPlaceholder:"(invalid date)",
        }},
        {title:"Link", field:"itemLink", width:70, responsive:0, formatter:"link", formatterParams:{
            label:"link",
            urlField:"itemLink",
            target:"_blank",
        }}
    ],
});