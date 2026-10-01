//Menu responsivo
var a = window.document.getElementsByClassName('humburguer')[0]
var b = window.document.getElementsByClassName('menu')

a.addEventListener('click', menu)
window.addEventListener('resize', tamanho)

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

var c =window.document.getElementsByClassName('trabalhando')
var p1 = 'Estamos trabalho nessa área.'
var p2 = 'O sistema de compras online ainda não está disponível neste site'
var p3 = 'Para adquirir um produto, entre em contacto connosco através dos nossos canais de atendimento. Teremos todo prazer em ajudar no processo de compra e fornecer as informações necessárias sobre o produto.'

for (var all = 0; all < c.length; all++) {
    c[all].addEventListener('click', aviso)
}

function aviso() {
    alert(p1 + "\n" + p2 + "\n" + p3)
}


/*
// Modo escuro
const botao = document.getElementById('botao-tema');
const body = document.body;

// Persistência do tema
const temasalvo = localStorage.getItem('tema');
temaEscuro(temasalvo === 'escuro');

// Função para alternar entre tema claro e escuro
function temaEscuro(tipo) {
  if (tipo == true) {
    body.classList.add('escuro');
    botao.innerHTML = '<i class="fa-solid fa-sun">sun</i>';
  } else {
    body.classList.remove('escuro');
    botao.innerHTML = '<i class="fa-solid fa-moon">moon</i>';
  }
}

botao.addEventListener('click', () => {
  const isescuro = body.classList.toggle('escuro');
  temaEscuro(isescuro);
  localStorage.setItem('tema', isescuro ? 'escuro' : 'claro');
});
// ----------------------------------------------------------------
*/