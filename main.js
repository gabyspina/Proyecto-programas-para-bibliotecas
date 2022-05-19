

class Libro{
    constructor(titulo_carga, autor_carga,genero){
        this.titulo_carga = titulo_carga;
        this.autor_carga = autor_carga;
        this.genero = genero;
    }
    }


let libros_en_biblioteca = new Array();
const clave_local_storage = "carga_de_libros";

carga_en_biblioteca();


let botonCarga = document.getElementById("btnCargar");

botonCarga.addEventListener("click", (e)=>{
e.preventDefault()
    if(validar_datos()){

        generar_libro();
        mostrar_libros(libros_en_biblioteca,mostrar_libro);

    }
    else{
        Swal.fire({
            title: 'Debe ingresar todos los datos',
            icon: 'error',
            timer: 5000,}
        );
    }
})

function validar_datos (){
    let input_titulo_carga = document.getElementById("tiluloCarga").value;
    let input_autor_carga = document.getElementById("autorCarga").value;
    let input_genero = document.getElementById("generoCarga").value;

    
    if(!input_titulo_carga){

        return false;
    }

    
    if(!input_autor_carga){
        
        return false;
    }
    
    if(!input_genero){
    
        return false;
    }
        
    return true;
}


function generar_libro() {

    let titulo_carga = document.getElementById("tiluloCarga").value;
    let autor_carga = document.getElementById("autorCarga").value;
    let genero = document.getElementById("generoCarga").value;
    
    let libro = new Libro(titulo_carga, autor_carga, genero);
    
    carga_tabla(titulo_carga, autor_carga, genero);

    libros_en_biblioteca.push(libro);

    localStorage.setItem(clave_local_storage, JSON.stringify(libros_en_biblioteca));

}

function carga_tabla(titulo_carga, autor_carga, genero, ) {

    let tablaLibros = document.getElementById("table");
    let cuerpoTabla = document.createElement("tbody");
    
    for (let i = 0; i < 1; i++) {
        
            let hilera = document.createElement("tr")

            let celda = document.createElement("td");
            celda.innerText = titulo_carga;
            hilera.appendChild(celda);
            
            let celda2 = document.createElement("td");
            celda2. innerText= autor_carga
            hilera.appendChild(celda2);

            let celda3 = document.createElement("td");
            celda3. innerText= genero;
            hilera.appendChild(celda3);

            cuerpoTabla.appendChild(hilera);

    }
    
    tablaLibros.appendChild(cuerpoTabla);

}


function carga_en_biblioteca() {

    let arreglo = localStorage.getItem(clave_local_storage);
    if (arreglo) {

        arreglo = JSON.parse(arreglo);

        libros_en_biblioteca = arreglo;

        for (let i = 0; i < arreglo.length; i++) {

            let libro = arreglo[i];
        carga_tabla(libro.titulo_carga, libro.autor_carga, libro.genero);

        }

    }
 }


// Prestamos


Libro.prototype.getNombre = function(){
    return this.titulo_carga
}



let recibe_libro = document.getElementById("tiluloCarga");
let mostrar_libro = document.getElementById("seleccion")

function mostrar_libros(arreglo,lugar){


    let elementos = '<option  selected disables>--Seleccione--</option>'
    
    for(let i=0; i < arreglo.length; i++){
        elementos += '<option value="' + arreglo[i].titulo_carga + '">' + arreglo[i].titulo_carga + '</option>'
    }
lugar.innerHTML = elementos



}

console.log(libros_en_biblioteca)

mostrar_libros(libros_en_biblioteca, mostrar_libro)


class Prestamo{
    constructor(libro_prestado, persona){
        this.libro_prestado = libro_prestado;
        this.persona = persona;
    }
}

let libros_prestamos = new Array()
const clave_local_storage_prestamo = "Libro prestado";
carga_prestamo()

let btn = document.getElementById("btnPrestamo");

btn.addEventListener("click", (el)=>{
    el.preventDefault();

    if(validar_prestamo()){

        add_prestamo();
}

else{
    Swal.fire({
        title: 'Debe ingresar todos los datos',
        icon: 'error',
        timer: 5000,}
    );
}
})


function validar_prestamo(){

    let input_libro_prestado = document.getElementById("seleccion").value;
    let input_persona = document.getElementById("destinatario").value;

    if((!input_libro_prestado)){

        return false;
    }
    if(!input_persona){

        return false;
    }
    return true;
}

function add_prestamo(){

    let libro_prestado = document.getElementById("seleccion");
    let persona = document.getElementById("destinatario");


let prestamo = new Prestamo(libro_prestado.value, persona.value)

carga_tabla_prestamo(libro_prestado.value, persona.value)

libros_prestamos.push(prestamo);

localStorage.setItem(clave_local_storage_prestamo,JSON.stringify(libros_prestamos));

}



function carga_tabla_prestamo(titulos, personas) {


    let tabla_prestamo = document.getElementById("tabla_prestamo");
    let cuerpoTabla = document.createElement("tbody");

    for (let i = 0; i < 1; i++) {
        
            let hilera = document.createElement("tr")

            let celda = document.createElement("td");
            celda.innerText = titulos;
            hilera.appendChild(celda);
            
            let celda2 = document.createElement("td");
            celda2. innerText= personas;
            hilera.appendChild(celda2);

            cuerpoTabla.appendChild(hilera);
    }
    
    tabla_prestamo.appendChild(cuerpoTabla);

    console.log(libros_prestamos)
}

function carga_prestamo() {

    let arrego = localStorage.getItem(clave_local_storage_prestamo);
    if (arrego) {

        arrego = JSON.parse(arrego);

        libros_prestamos = arrego;

        for (let i = 0; i < arrego.length; i++) {

            let entrega = arrego[i];

            carga_tabla_prestamo(entrega.libro_prestado, entrega.persona);

        }

    }
 }