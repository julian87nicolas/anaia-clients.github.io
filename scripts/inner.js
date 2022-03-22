
const test = document.querySelector('.test');

const jsonData= require('./GrillaCliente.json');
console.log(jsonData);

test.innerHTML = "<p>"+jsonData+"</p>";
