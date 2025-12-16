// JavaScript para la página About

console.log('About JS cargado');

// Contador de visitas (no persiste)
var visitas = 0;
visitas++;
console.log('Visitas a About: ' + visitas);

// Animación al hacer scroll
window.addEventListener('scroll', function() {
    var scrollPos = window.scrollY;
    console.log('Scroll position: ' + scrollPos);
    
    // Efecto fade in (mal implementado)
    var bio = document.querySelector('.bio');
    var experience = document.querySelector('.experience');
    
    if (scrollPos > 100) {
        bio.style.opacity = '1';
        bio.style.transition = 'opacity 0.5s';
    }
    
    if (scrollPos > 300) {
        experience.style.opacity = '1';
        experience.style.transition = 'opacity 0.5s';
    }
});

// Click en la imagen de perfil
var profileImg = document.querySelector('.profile img');
profileImg.onclick = function() {
    alert('¡Hola! Soy Juan Pérez');
};

// Código que no se usa
function calcularEdad(anio) {
    var actual = new Date().getFullYear();
    return actual - anio;
}

var edad = calcularEdad(1995);
console.log('Edad: ' + edad);