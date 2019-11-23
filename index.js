let JSONold = fs.readFileSync("./monitors.json");
let monitors = JSON.parse(JSONold);
console.log(monitors);