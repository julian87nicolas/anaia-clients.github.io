// seleccionar elemento h1
const h1 = document.querySelector("h1");
// colocar hola mundo en h1
h1.innerHTML = "Hola mundo";


// crear lista seleccionable en select id "clients"
const clients = document.getElementById("clients");
clients.innerHTML = "";
clients.innerHTML = `<option value="">Seleccione un cliente</option>`;

clients.style.height = "100px";
clients.style.width = "100px";
clients.style.backgroundColor = "black";

clients.innerHTML = "<option value='volvo' >Volvo</option>";
clients.innerHTML = "<option value='volvo'>Volvo</option>";