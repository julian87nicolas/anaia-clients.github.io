const XLSX = require("xlsx");

// Leer tabla

const workbook = XLSX.readFile("../resources/GrillaCliente.xlsx");

// Convert XLSX to JSON


let worksheets = {};

for (const sheetName of workbook.SheetNames){
    worksheets[sheetName] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
    console.log(sheetName)
}

const sheet = worksheets["Hoja 1"];

console.log(sheet.length);
/*
for(let i = 0; i<sheet.length; i++){

    console.log(`Código: ${sheet[i]["Código"]}`);
    console.log(`Razón Social: ${sheet[i]["Razón Social"]}`);
    console.log(`Documento: ${sheet[i]["Documento"]}\n`);
}*/

let names = [];
for(let i = 0; i<sheet.length; i++){
    names.push(sheet[i]["Razón Social"]);
}

console.log(names);

