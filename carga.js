
const clave_local_storage = "carga_de_libros";

carga_en_biblioteca();


class Libro{

    constructor( titulo_carga, autor_carga, genero){
        this.titulo_carga = titulo_carga;
        this.autor_carga = autor_carga;
        this.genero= genero;
    }
}

let carga_de_libro = [];



let botonCarga = document.getElementById("btnCargar");

botonCarga.addEventListener("click", ()=>{


if (validar_datos()){

    generar_libro();

}else{

   alert("debe ingresar toda la información")
}
})

function validar_datos (){
    let input_titulo_carga = document.getElementById("tiluloCarga").value;
    let input_autor_carga = document.getElementById("autorCarga").value;
    let input_genero = document.getElementById("generoCarga").value;

    
    if(!input_titulo_carga){
        alert("Debe ingresar nombre");
    
        return false;
    }
    
    if(!input_autor_carga){
        alert("Debe ingresar autor");
    
        return false;
    }
    
    if(!input_genero){
        alert("Debe ingresar genero");
    
        return false;
    }
        

    return true;
}

function generar_libro(e){
    e.preventDefault();
    let datoCarga = e.taget

    let titulo_carga = document.getElementById("tiluloCarga").value;
    let autor_carga = document.getElementById("autorCarga").value;
    let genero = document.getElementById("generoCarga").value;


    let libro = new Libro(titulo_carga,autor_carga,genero);

    carga_de_libro.push(libro);

    localStorage.setItem(clave_local_storage,JSON.stringify(carga_de_libro));

    carga_en_biblioteca(titulo_carga,autor_carga)
}

function carga_en_biblioteca (titulo_carga,autor_carga){

let new_table = document.createElement("table");
let new_tboby = document.createElement("tbody");

new_table.id = "tabla"+titulo_carga+autor_carga;
new_tboby.textContet = titulo_carga;

new_table.appendChild(new_tboby);

let contenedor = document.getElementById("libros_biblioteca");

contenedor.appendChild(new_table);

}