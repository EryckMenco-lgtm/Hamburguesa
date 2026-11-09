const btnHamburguesa = document.getElementById('btn-hamburguesa');
const btnCerrar = document.getElementById('btn-cerrar');
const panel = document.getElementById('panel-lateral');
const overlay = document.getElementById('overlay');

function abrirMenu() {
    panel.classList.add('activo');
    overlay.classList.add('activo');
    btnHamburguesa.classList.add('activo');
}

function cerrarMenu() {
    panel.classList.remove('activo');
    overlay.classList.remove('activo');
    btnHamburguesa.classList.remove('activo');
}

btnHamburguesa.addEventListener('click', abrirMenu);
btnCerrar.addEventListener('click', cerrarMenu);
overlay.addEventListener('click', cerrarMenu);

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', cerrarMenu);
});