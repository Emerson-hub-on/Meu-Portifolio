
document.getElementById('sendWhatsapp').addEventListener('click', function() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;
    const numeroWhatsApp = '+5583986570076';  // substitua pelo número de telefone desejado

    const texto = `Nome: ${nome}%0AEmail: ${email}%0ATelefone: ${telefone}%0AMensagem: ${mensagem}`;
    const url = `https://wa.me/${numeroWhatsApp}?text=${texto}`;

    window.open(url, '_blank');
});

let buttonmenu = document.getElementById('button-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

buttonmenu.addEventListener('click', () =>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', () =>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click',() =>{
    menu.classList.remove('abrir-menu')
})

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav.menu a, .menu-mobile nav a');

    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            window.location.href = link.getAttribute('habilidades.html');
        });
    });
});

