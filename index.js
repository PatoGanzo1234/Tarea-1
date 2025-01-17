// Seleccionar el botón
const boton = document.getElementById('cambiarTema');

boton.addEventListener('click', () => {
    document.body.classList.toggle('oscuro');
});
