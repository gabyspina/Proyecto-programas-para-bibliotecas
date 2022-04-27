
class Libro{
    constructor(titulo_carga, autor_carga,genero){
        this.titulo_carga = titulo_carga;
        this.autor_carga = autor_carga;
        this.genero = genero;
        
    }
}

function getLibroName() {
    return this.titulo_carga;
}

function error () {Swal.fire({
    title: 'Error!',
    text: 'Ingresar titulo',
    icon: 'error',
    confirmButtonText: ' =( ',
    timer: 2000
    })}

let libros_en_biblioteca = new Array();
const clave_local_storage = "carga_de_libros";

carga_en_biblioteca();

let botonCarga = document.getElementById("btnCargar");

botonCarga.addEventListener("click", ()=>{

    if(validar_datos()){

        generar_libro();
    }
    else{
        error()
    }

}

)

function validar_datos (){
    let input_titulo_carga = document.getElementById("tiluloCarga").value;
    let input_autor_carga = document.getElementById("autorCarga").value;
    let input_genero = document.getElementById("generoCarga").value;

    
    if(!input_titulo_carga){
        alert("Debe ingresar nombre");
    
        return false;
    }
    
    if(!input_autor_carga){
        error();
    
        return false;
    }
    
    if(!input_genero){
        alert("Debe ingresar genero");
    
        return false;
    }
        

    return true;
}


function generar_libro() {


    let titulo_carga = document.getElementById("tiluloCarga").value;
    let autor_carga = document.getElementById("autorCarga").value;
    let genero = document.getElementById("generoCarga").value;


    let libro = new Libro(titulo_carga, autor_carga, genero);

    libros_en_biblioteca.push(libro);

    localStorage.setItem(clave_local_storage, JSON.stringify(libros_en_biblioteca));

    carga_en_biblioteca(titulo_carga, autor_carga);

}



function opciones() {
 
    let select = document.createElement("select");
 
    let option1 = document.createElement("option");
    option1.setAttribute("value", "value1");
    let option1Texto = document.createTextNode("Disponible");
    option1.appendChild(option1Texto);
 
    let option2 = document.createElement("option");
    option2.setAttribute("value", "value2");
    let option2Texto = document.createTextNode("Prestado");
    option2.appendChild(option2Texto);
 
 
    select.appendChild(option1);
    select.appendChild(option2);

 
     
}


let eleccion = opciones()

function carga_tabla(titulo_carga, autor_carga, genero, eleccion) {


    // Obtener la referencia del elemento body
    let body = document.getElementsByClassName("tabla_biblioteca")[0];

    // Crea un elemento <table> y un elemento <tbody>
    // let tabla = document.createElement("table");
    let tblBody = document.createElement("tbody");

    

    
    // Crea las celdas
    for (let i = 0; i < 1; i++) {

        // Crea las hileras de la tabla
        let hilera = document.createElement("tr");

            // Crea un elemento <td> y un nodo de texto, haz que el nodo de
            // texto sea el contenido de <td>, ubica el elemento <td> al final
            // de la hilera de la tabla
            let celda = document.createElement("td");
            let celda2 = document.createElement("td");
            let celda3 = document.createElement("td");
            let celda4 = document.createElement("td");


            let textoCelda = document.createTextNode(titulo_carga);
            let textoCelda2 = document.createTextNode(autor_carga);
            let textoCelda3 = document.createTextNode(genero);
            let textoCelda4 = document.createTextNode(eleccion);

            

            celda.appendChild(textoCelda);
            celda2.appendChild(textoCelda2);
            celda3.appendChild(textoCelda3);
            celda4.appendChild(textoCelda4);


            hilera.appendChild(celda);
            hilera.appendChild(celda2);
            hilera.appendChild(celda3);
            hilera.appendChild(celda4);


        // agrega la hilera al final de la tabla (al final del elemento tblbody)
        tblBody.appendChild(hilera);
        
    }

    // posiciona el <tbody> debajo del elemento <table>
    // tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tblBody);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    // tblBody.setAttribute("border", "red");
    // tblBody.setAttribute("padding", "10px");
 }


function carga_en_biblioteca() {

    let arreglo = localStorage.getItem(clave_local_storage);
    if (arreglo) {

        arreglo = JSON.parse(arreglo);

        libros_en_biblioteca = arreglo;
        for (let i = 0; i < arreglo.length; i++) {

            let libro = arreglo[i];
            console.log(libro.titulo_carga);
            console.log(libro.autor_carga);
           carga_tabla(libro.titulo_carga, libro.autor_carga, libro.genero);

        }

    }
}




