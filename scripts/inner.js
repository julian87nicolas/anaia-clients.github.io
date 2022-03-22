
const test = document.querySelector('.test');
test.innerHTML = '<h1>Hello World</h1>';

const jsonData= require('./GrillaCliente.json'); 
console.log(jsonData);

test.innerHTML = jsonData;
