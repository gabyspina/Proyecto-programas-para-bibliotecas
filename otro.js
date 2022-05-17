

class Libro{
    constructor(titulo_carga, autor_carga,genero){
        this.titulo_carga = titulo_carga;
        this.autor_carga = autor_carga;
        this.genero = genero;
        }
    }



let libros_en_biblioteca = new Array();
const clave_local_storage = "carga_de_libros";

// carga_en_biblioteca();


let botonCarga = document.getElementById("btnCargar");

botonCarga.addEventListener("click", (el)=>{ // le agregue el preventDefault porque se estaba recargando la pagina
 el.preventDefault()
    if(validar_datos()){

        generar_libro();
        mostrar_libros(libros_en_biblioteca, mostrar_libro) 
        

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

       
        Swal.fire({
            title: 'Debe ingresar el titulo del libro',
            icon: 'error',
            timer: 5000,}
        )
        
   
    
        return false;
    }

    
    if(!input_autor_carga){
        
        Swal.fire({
            title: 'Debe ingresar el autor del libro',
            icon: 'error',
            timer: 5000,}
        );
    
        return false;
    }
    
    if(!input_genero){
        Swal.fire({
            title: 'Debe ingresar el genero del libro',
            icon: 'error',
            timer: 5000,}
        );
    
        return false;
    }
        
    return true;
}


function generar_libro() {


    let titulo_carga = document.getElementById("tiluloCarga").value;
    let autor_carga = document.getElementById("autorCarga").value;
    let genero = document.getElementById("generoCarga").value;
    

    let libro = new Libro(titulo_carga, autor_carga, genero);
    carga_tabla(titulo_carga, autor_carga, genero); // Y aca ejecutamos el cargar tabla


    libros_en_biblioteca.push(libro);

    localStorage.setItem(clave_local_storage, JSON.stringify(libros_en_biblioteca));

    // carga_en_biblioteca(titulo_carga, autor_carga);

}


function carga_tabla(titulo_carga, autor_carga, genero, ) {

    let tablaLibros = document.getElementById("table");
    let cuerpoTabla = document.createElement("tbody");
    
    for (let i = 0; i < 1; i++) {
        
            let hilera = document.createElement("tr")

            let celda = document.createElement("td");
            console.log(titulo_carga);
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


function carga_en_biblioteca() {         // esta funcion hacia que se repitan la info de la tabla, me parecio conveniente sacarla

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
        elementos += '<option value="' + arreglo[i].titulo_carga + '">' + arreglo[i].titulo_carga + '</option>' // Aca solo tenias mal el nombre de la propiedad y donde estabas llamando la funcion
    }
lugar.innerHTML = elementos
}

console.log(libros_en_biblioteca)
