/*
const test = document.querySelector('.test');

const jsonData= require('./GrillaCliente.json');
console.log(jsonData);
*/

const XLSX = require('xlsx');

jsonData = XLSX.readFile('./GrillaCliente.xlsx');

test.innerHTML = "<p>"+jsonData+"</p>";
