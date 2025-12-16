// JavaScript para la página Home

console.log('Home JS cargado');

// Cambiar el texto del hero cada 3 segundos
var titulos = [
    'Hola, soy Juan Pérez',
    'Bienvenido a mi portfolio',
    'Desarrollador Full Stack',
    'Creando experiencias digitales'
];

var indice = 0;

setInterval(function() {
    indice++;
    if (indice >= titulos.length) {
        indice = 0;
    }
    var h1 = document.querySelector('.hero h1');
    h1.innerHTML = titulos[indice];
}, 3000);

// Efecto hover en skills
var skills = document.querySelectorAll('.skill');

for (var i = 0; i < skills.length; i++) {
    skills[i].addEventListener('mouseover', function() {
        this.style.backgroundColor = '#764ba2';
        this.style.transform = 'scale(1.1)';
    });
    
    skills[i].addEventListener('mouseout', function() {
        this.style.backgroundColor = '#667eea';
        this.style.transform = 'scale(1)';
    });
}

// Alert al hacer click en el botón (redundante porque ya tiene onclick)
var boton = document.querySelector('.hero button');
if (boton) {
    boton.addEventListener('click', function() {
        console.log('Navegando a proyectos...');
    });
}