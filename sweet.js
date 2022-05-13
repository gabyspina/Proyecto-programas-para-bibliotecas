function error(){
    Swal.fire({
        title: '¡ Debe ingresar lo solicitado !',
        icon: 'error',
        timer: 5000,}
    )
}
//error()

function correcto(){
    Swal.fire({
        title: 'Confirmado',
        text: '¡ Ha ingresado la información correctamente !',
        icon: 'success',
        confirmButtonText: 'Cool',
      })
}
