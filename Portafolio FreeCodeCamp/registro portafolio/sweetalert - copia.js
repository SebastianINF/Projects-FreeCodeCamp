document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.querySelector('.formulario')

  formulario.addEventListener('submit', function (event) {
    event.preventDefault()

    let inputEmail = document.getElementById('correo')
    let email = inputEmail.value
    if (email !== '') {
      let patron = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
      let validacion = patron.test(email)
      if (validacion === true) {
        inputEmail.value = ''
        Swal.fire({
          title: 'Success!',
          text: 'Correo registrado ✔',
          icon: 'success',
          confirmButtonText: 'Accept'
        })
      } else {
        inputEmail.value = ''
        Swal.fire({
          title: 'Error!',
          text: 'Correo no valido ❌',
          icon: 'error',
          confirmButtonText: 'Close'
        })
      }
    } else {
      Swal.fire({
        title: 'Correo?',
        text: 'Correo no ingresado ',
        icon: 'question',
        confirmButtonText: 'Close'
      })
    }
  })
})
