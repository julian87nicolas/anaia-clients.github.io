let table;
let tableArray;
let data = [];


window.addEventListener("load",function(){
    table = document.getElementById('sheet');

    // convert table into array
    const tableToArray = (table) => {
        let rows = table.rows;
        let data = [];
        for (let i = 0; i < rows.length; i++) {
            let row = rows[i];
            let rowData = [];
            for (let j = 0; j < row.cells.length; j++) {
                let cell = row.cells[j];
                rowData.push(cell.innerHTML);
            }
            data.push(rowData);
        }
        return data;
    };

    tableArray = tableToArray(table);
    console.log(table);
    console.log(tableArray);

    // let clients = [];

    for(let i=1; i<tableArray.length; i++){
        data.push(tableArray[i].slice(0,4));
    }
    
console.log("DATA: ", data);


// -----------------------------------

let names = [];
for(let i=0; i<data.length;i++){
    names.push(data[i][1]);
}


const select = document.querySelector('#test');
const optSelect = document.querySelector('.optselected');


for(let i=0; i<names.length; i++){
    //agregar valores option
    let option = document.createElement('option');
    option.value = data[i];
    option.textContent = names[i];
    select.appendChild(option);
}


let info;

function show_client(){
    var selectedOption = select.options[select.selectedIndex];
    console.log("SELECCIONADO: ", selectedOption.value + ': ' + selectedOption.text, "opcion: ", select.selectedIndex);
    info = "Datos de cliente:%0A";
    info += "Razón Social: " + data[select.selectedIndex][1] +"%0A";
    info +="Código: " +  data[select.selectedIndex][0]+"%0A";
    info +="Documento: " +  data[select.selectedIndex][2]+"%0A";
    info +="Esporádico: " +  data[select.selectedIndex][3]+"%0A";
    info +="Direccion de entrega: " + data[select.selectedIndex][4]+"%0A";

    let view_info = "<h2>Datos seleccionados:</h2>"
    view_info += "<ul><li>Razón Social: " + data[select.selectedIndex][1]+"</li>";
    view_info += "<li>Código: " + data[select.selectedIndex][0]+"</li>";
    view_info += "<li>Documento: " + data[select.selectedIndex][2]+"</li>";
    view_info += "<li>Esporádico: " + data[select.selectedIndex][3]+"</li>";
    view_info += "<li>Direccion de entrega: " + data[select.selectedIndex][4]+"</li></ul>";

    optSelect.innerHTML = view_info;
}

show_client();

select.addEventListener('change', () => {show_client();});

let send = document.querySelector(".send");

send.addEventListener('click', ()=>{
    console.log(info);
    let message = `mailto:test@example.com,test2@example.com?subject=Pedido&body=${info}`;
    console.log(info);
    window.open(message);
});

let finder = document.querySelector(".finder");

finder.addEventListener("keyup", () =>{
    console.log(finder.value);
    for(let i=0; i<names.length; i++){
            if(names[i].toLowerCase().includes(finder.value.toLowerCase())){
                console.log(finder.value, names[i]);
                select.selectedIndex = i;
                show_client();
        }
        
    }
})


/*
TODO:
 * Buscar forma de agregar clientes a la lista select [Hacer desde el sheet de drive]
 * Corregir los correos
 * Investigar API Google Drive [LISTO]
*/

})
