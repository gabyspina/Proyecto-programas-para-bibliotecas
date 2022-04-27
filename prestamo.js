
let id=0
class Prestamo {
    constructor(nombre_libro, autor, destinatario   ){
    this.id = id++;
    this.nombre_libro = nombre_libro;
    this.autor = autor;
    this.destinatario = destinatario;
    // this.fecha = Date(fecha);

}
}
let prestamo_de_libro =[]

function enviarDatos(e){
    e.preventDefault();
    let datoPrestamo = e.target

    let nombre_libro = document.getElementById("nombreTexto").value;
    let autor = document.getElementById("autorTexto").value;
    let destinatario = document.getElementById("destinatario").value;
    // let fecha = document.getElementById(" fecha");


prestamo_de_libro.push(new Prestamo (nombre_libro,autor,destinatario,))

console.log (prestamo_de_libro )



localStorage.setItem("libro prestado", nombre_libro, JSON.stringify (prestamo_de_libro))





}


let boton = document.getElementById("btn");

boton.addEventListener("click",enviarDatos)   

