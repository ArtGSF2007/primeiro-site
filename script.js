const foto = document.getElementsByClassName('change1')
foto.addEventsListener('click', trocaFoto)
let numero = 1

function trocaFoto() {
    if (numero == 1) {
        foto.src = 'assets'
        numero == 2
    } else {
        foto.src = 'assets'
    }

}