// Menu responsivo
var a = window.document.getElementsByClassName('humburguer')[0]
var b = window.document.getElementsByClassName('menu')

a.addEventListener('click', menu)

function menu() {
    if (b[0].style.display == 'none') {
        b[0].style.display = 'block'
    } else {
        b[0].style.display ='none'
    }
}

function tamanho() {
    if (innerWidth >= 768) {
        b[0].style.display = 'flex'
    } else {
        b[0].style.display ='none'
    }
}
// -----------------------------------------------------------------------------------

window.document.querySelector('.nav-bar').style.display = 'none'