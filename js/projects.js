// JavaScript para la página Projects

console.log('Projects JS cargado');

// Array de proyectos (duplica info del HTML)
var proyectos = [
    { nombre: 'E-commerce Platform', techs: ['React', 'Node.js', 'MongoDB'] },
    { nombre: 'Task Manager App', techs: ['Vue.js', 'Firebase'] },
    { nombre: 'Weather Dashboard', techs: ['JavaScript', 'API'] },
    { nombre: 'Portfolio Website', techs: ['HTML', 'CSS'] }
];

console.log('Total proyectos: ' + proyectos.length);

// Filtro de proyectos (no funcional)
function filtrarProyectos(tech) {
    var resultado = [];
    for (var i = 0; i < proyectos.length; i++) {
        if (proyectos[i].techs.includes(tech)) {
            resultado.push(proyectos[i]);
        }
    }
    return resultado;
}

// Event listener en cada proyecto (ineficiente)
var projectCards = document.querySelectorAll('.project');

for (var i = 0; i < projectCards.length; i++) {
    projectCards[i].addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#f9fafb';
    });
    
    projectCards[i].addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#fff';
    });
}

// Función que nunca se llama
function mostrarDetalles(id) {
    console.log('Mostrando detalles del proyecto ' + id);
    alert('Función no implementada');
}

// Variable global innecesaria
var contadorClicks = 0;

// Log innecesarios
console.log('Proyectos cargados correctamente');
console.log(proyectos);