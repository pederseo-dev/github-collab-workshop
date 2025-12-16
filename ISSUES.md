# 🎯 Issues por Equipo - GitHub Collaboration Challenge

## Instrucciones generales

Cada equipo debe:
1. Leer su issue asignado completamente
2. Crear una rama desde `staging` con el formato: `feature/equipo[N]-descripcion`
3. Trabajar **solo** en los archivos asignados
4. Hacer commits frecuentes con mensajes claros
5. Abrir un Pull Request hacia `staging` cuando terminen

---

## 🏠 EQUIPO 1 - HTML Home

### 📋 Issue: Mejorar estructura y accesibilidad del HTML en Home

**Archivo asignado:** `index.html`

**Problemas a resolver:**

1. **Estructura semántica**
   - Reemplazar `<div class="header">` por `<header>`
   - Reemplazar `<div class="menu">` por `<nav>`
   - Agregar `<main>` envolviendo el contenido principal
   - Usar `<section>` para hero y skills
   - Reemplazar `<div class="footer">` por `<footer>`

2. **Metadatos y configuración**
   - Agregar `lang="es"` al tag `<html>`
   - Agregar `<meta charset="UTF-8">`
   - Agregar `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
   - Agregar `<meta name="description" content="Portfolio de Juan Pérez - Desarrollador Web">`

3. **Accesibilidad**
   - Eliminar el `onclick` del botón y dejar solo el elemento button limpio
   - Agregar `aria-label` descriptivo a los links del menú
   - Agregar estructura de headings correcta (verificar que h1 → h2 sea lógico)

4. **Mejoras adicionales**
   - Agregar comentarios HTML para separar secciones
   - Asegurar que todos los links tengan texto descriptivo

**Ejemplo de código mejorado:**
```html
<header>
    <div class="logo">JP</div>
    <nav aria-label="Navegación principal">
        <a href="index.html" aria-label="Ir a la página de inicio">Home</a>
        <!-- ... -->
    </nav>
</header>
```

**Criterios de aceptación:**
- [ ] Código HTML válido (sin errores en validador W3C)
- [ ] Elementos semánticos usados correctamente
- [ ] Atributos de accesibilidad presentes
- [ ] Sin eventos inline (onclick, etc.)

---

## 🏠 EQUIPO 2 - CSS Home

### 📋 Issue: Mejorar diseño responsive y estilos en Home

**Archivo asignado:** `css/home.css`

**Problemas a resolver:**

1. **Variables CSS**
   - Crear variables para colores repetidos (gradiente, textos)
   - Ejemplo: `--primary-color: #667eea;`

2. **Diseño responsive**
   - Agregar más breakpoints (mobile: 480px, tablet: 768px, desktop: 1024px)
   - Ajustar tamaños de fuente para móvil (hero h1 puede ser muy grande)
   - Mejorar padding en hero para pantallas pequeñas
   - Hacer que skills se vean bien en vertical en móvil

3. **Contraste y accesibilidad**
   - Verificar contraste en `.hero p` (color #eee sobre gradiente)
   - Agregar estado `:focus-visible` al botón con outline visible
   - Asegurar que el botón tenga suficiente contraste

4. **Mejoras de UX**
   - Agregar transición suave al hover del botón
   - Mejorar el espaciado entre elementos
   - Considerar max-width para lectura cómoda en pantallas grandes

**Ejemplo de código mejorado:**
```css
:root {
    --primary-gradient-start: #667eea;
    --primary-gradient-end: #764ba2;
}

.hero button:focus-visible {
    outline: 3px solid #764ba2;
    outline-offset: 2px;
}

@media (max-width: 480px) {
    .hero h1 {
        font-size: 28px;
    }
}
```

**Criterios de aceptación:**
- [ ] Al menos 2 breakpoints adicionales
- [ ] Variables CSS para colores principales
- [ ] Estados de focus visibles
- [ ] Se ve bien en móvil, tablet y desktop

---

## 🏠 EQUIPO 3 - JavaScript Home

### 📋 Issue: Refactorizar y mejorar código JavaScript en Home

**Archivo asignado:** `js/home.js`

**Problemas a resolver:**

1. **Modernizar sintaxis**
   - Cambiar `var` por `const` o `let`
   - Cambiar `for` tradicional por `forEach` o `for...of`
   - Usar arrow functions donde sea apropiado

2. **Problemas de código**
   - Guardar el `setInterval` en una variable para poder detenerlo
   - Remover el event listener duplicado del botón (ya tiene el comportamiento en HTML)
   - Verificar que elementos existan antes de manipularlos

3. **Mejores prácticas**
   - Usar clases CSS en lugar de manipular estilos inline
   - Agregar manejo de errores básico
   - Remover console.logs innecesarios (o comentarlos para debug)

4. **Accesibilidad**
   - Agregar `aria-live="polite"` al h1 que cambia (desde JS)
   - O considerar si el cambio automático de texto es buena UX

**Ejemplo de código mejorado:**
```javascript
const titulos = [
    'Hola, soy Juan Pérez',
    'Bienvenido a mi portfolio',
    'Desarrollador Full Stack',
    'Creando experiencias digitales'
];

let indice = 0;

const intervalo = setInterval(() => {
    indice = (indice + 1) % titulos.length;
    const h1 = document.querySelector('.hero h1');
    if (h1) {
        h1.textContent = titulos[indice];
    }
}, 3000);

// Para skills, usar clases CSS
skills.forEach(skill => {
    skill.addEventListener('mouseover', () => {
        skill.classList.add('skill-hover');
    });
});
```

**Criterios de aceptación:**
- [ ] Sin uso de `var`
- [ ] Sin manipulación de estilos inline
- [ ] Verificación de existencia de elementos
- [ ] Código limpio y comentado

---

## 👤 EQUIPO 4 - HTML About

### 📋 Issue: Mejorar estructura y semántica del HTML en About

**Archivo asignado:** `pages/about.html`

**Problemas a resolver:**

1. **Estructura semántica**
   - Cambiar `<div class="header">` por `<header>`
   - Cambiar navegación a `<nav>`
   - Envolver contenido en `<main>`
   - Usar `<section>` para bio, experience, education
   - Usar `<article>` para cada trabajo en experience
   - Cambiar footer a `<footer>`

2. **Metadatos**
   - Agregar `lang="es"` al `<html>`
   - Agregar meta charset, viewport y description
   - Mejorar el `<title>`

3. **Accesibilidad de la imagen**
   - Agregar `alt` descriptivo a la imagen de perfil
   - Ejemplo: `alt="Foto de perfil de Juan Pérez, desarrollador web"`

4. **Mejoras estructurales**
   - Agregar headings apropiados (h1 para título principal, h2 para secciones)
   - Considerar usar `<time>` para las fechas de experiencia
   - Agregar `aria-label` a links del menú

**Ejemplo de código mejorado:**
```html
<section class="experience">
    <h2>Experiencia</h2>
    <article class="job">
        <h3>Desarrollador Frontend</h3>
        <p>TechCorp - <time datetime="2020">2020</time>-<time datetime="2024">2024</time></p>
    </article>
</section>
```

**Criterios de aceptación:**
- [ ] Elementos semánticos correctos
- [ ] Imagen con alt descriptivo
- [ ] Metadatos completos
- [ ] Estructura de headings lógica

---

## 👤 EQUIPO 5 - CSS About

### 📋 Issue: Mejorar diseño responsive y estilos en About

**Archivo asignado:** `css/about.css`

**Problemas a resolver:**

1. **Diseño responsive**
   - Agregar media queries para mobile (480px) y tablet (768px)
   - Hacer que la imagen de perfil sea responsive (no 200px fijos)
   - Ajustar padding del contenedor para móviles
   - Asegurar que las cards se vean bien en pantallas pequeñas

2. **Reutilización de código**
   - Crear clase `.card` para el estilo repetido de bio/experience/education
   - Evitar duplicación del `box-shadow`

3. **Mejoras visuales**
   - Agregar transiciones suaves a los hover
   - Mejorar el espaciado entre elementos
   - Considerar un max-width más pequeño para mejor lectura

4. **Variables CSS**
   - Usar variables para colores (#667eea, #fff, etc.)
   - Usar variables para espaciados comunes

**Ejemplo de código mejorado:**
```css
:root {
    --primary-color: #667eea;
    --card-padding: 25px;
    --border-radius: 8px;
}

.card {
    background-color: #fff;
    padding: var(--card-padding);
    border-radius: var(--border-radius);
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    margin-bottom: 20px;
}

@media (max-width: 768px) {
    .profile img {
        width: 150px;
        height: 150px;
    }
}
```

**Criterios de aceptación:**
- [ ] Responsive en mobile, tablet y desktop
- [ ] Uso de variables CSS
- [ ] Código sin duplicación
- [ ] Transiciones suaves

---

## 👤 EQUIPO 6 - JavaScript About

### 📋 Issue: Refactorizar y optimizar JavaScript en About

**Archivo asignado:** `js/about.js`

**Problemas a resolver:**

1. **Modernizar código**
   - Cambiar `var` por `const`/`let`
   - Cambiar event listener inline por `addEventListener`
   - Usar arrow functions

2. **Optimización de performance**
   - Agregar **debounce** al scroll listener (muy importante)
   - Evitar console.logs en cada scroll

3. **Remover código inútil**
   - Eliminar el contador de visitas (no persiste)
   - Eliminar función `calcularEdad` si no se usa
   - Eliminar console.logs innecesarios

4. **Mejoras de UX**
   - Reemplazar `alert` por algo menos intrusivo
   - Usar clases CSS para animaciones en lugar de manipular estilos inline
   - Verificar que elementos existan antes de usarlos

**Ejemplo de código mejorado:**
```javascript
// Función debounce
const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
};

// Scroll optimizado
const handleScroll = debounce(() => {
    const scrollPos = window.scrollY;
    
    const bio = document.querySelector('.bio');
    const experience = document.querySelector('.experience');
    
    if (bio && scrollPos > 100) {
        bio.classList.add('fade-in');
    }
    
    if (experience && scrollPos > 300) {
        experience.classList.add('fade-in');
    }
}, 100);

window.addEventListener('scroll', handleScroll);

// Click en imagen (mejorado)
const profileImg = document.querySelector('.profile img');
if (profileImg) {
    profileImg.addEventListener('click', () => {
        // Mejor que alert: agregar clase CSS o mostrar tooltip
        console.log('Imagen clickeada');
    });
}
```

**Criterios de aceptación:**
- [ ] Scroll listener con debounce
- [ ] Sin uso de `var`
- [ ] Sin código muerto
- [ ] Sin alerts intrusivos

---

## 🧩 EQUIPO 7 - HTML Projects

### 📋 Issue: Mejorar estructura y semántica del HTML en Projects

**Archivo asignado:** `pages/projects.html`

**Problemas a resolver:**

1. **Estructura semántica**
   - Cambiar divs por elementos semánticos (`<header>`, `<nav>`, `<main>`, `<footer>`)
   - Usar `<article>` para cada tarjeta de proyecto
   - Envolver el header de proyectos en `<section>`

2. **Metadatos**
   - Agregar `lang="es"`
   - Agregar meta charset, viewport y description apropiada

3. **Accesibilidad**
   - Agregar `alt` descriptivo a cada imagen de proyecto
   - Eliminar `onclick` inline de las tarjetas
   - Convertir tags en una lista `<ul>` con `<li>` (más semántico)
   - Agregar `aria-label` a la navegación

4. **Mejoras estructurales**
   - Considerar agregar un `<h2>` a cada proyecto
   - Asegurar jerarquía de headings correcta

**Ejemplo de código mejorado:**
```html
<main>
    <section class="projects-header">
        <h1>Mis Proyectos</h1>
        <p>Algunos de mis trabajos más recientes</p>
    </section>

    <section class="projects-grid">
        <article class="project">
            <img src="../assets/images/project1.jpg" alt="Captura de pantalla de E-commerce Platform">
            <h2>E-commerce Platform</h2>
            <p>Una plataforma completa de comercio electrónico</p>
            <ul class="tags">
                <li>React</li>
                <li>Node.js</li>
                <li>MongoDB</li>
            </ul>
        </article>
    </section>
</main>
```

**Criterios de aceptación:**
- [ ] Elementos semánticos correctos
- [ ] Imágenes con alt descriptivos
- [ ] Sin onclick inline
- [ ] Tags como lista `<ul>`

---

## 🧩 EQUIPO 8 - CSS Projects

### 📋 Issue: Mejorar diseño responsive y grid en Projects

**Archivo asignado:** `css/projects.css`

**Problemas a resolver:**

1. **Mejorar el Grid**
   - Cambiar `grid-template-columns: repeat(2, 1fr)` por algo más flexible
   - Usar `repeat(auto-fit, minmax(300px, 1fr))` para mejor responsive
   - Agregar más breakpoints (no solo 768px)

2. **Variables CSS**
   - Extraer colores a variables (#667eea, #e0e7ff, etc.)
   - Extraer valores de border-radius, padding comunes

3. **Accesibilidad**
   - Agregar estado `:focus-visible` a las tarjetas
   - Asegurar que la transición funcione también con focus (no solo hover)
   - Verificar contraste de colores en los tags

4. **Mejoras visuales**
   - Considerar agregar skeleton loading state
   - Mejorar sombras y transiciones
   - Asegurar que imágenes no se distorsionen

**Ejemplo de código mejorado:**
```css
:root {
    --primary-color: #667eea;
    --tag-bg: #e0e7ff;
    --card-radius: 8px;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 50px auto;
    padding: 20px;
}

.project:focus-visible {
    outline: 3px solid var(--primary-color);
    outline-offset: 2px;
}

.project img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block; /* evita espacio extra */
}
```

**Criterios de aceptación:**
- [ ] Grid responsive automático
- [ ] Variables CSS implementadas
- [ ] Estados de focus visibles
- [ ] Se ve bien en todas las pantallas

---

## 🧩 EQUIPO 9 - JavaScript Projects

### 📋 Issue: Refactorizar y limpiar JavaScript en Projects

**Archivo asignado:** `js/projects.js`

**Problemas a resolver:**

1. **Eliminar duplicación**
   - El array `proyectos` duplica información del HTML
   - Considerar leer la data directamente del DOM si es necesario
   - O eliminarlo si no se usa realmente

2. **Modernizar código**
   - Cambiar `var` por `const`/`let`
   - Usar `forEach` en lugar de loops tradicionales
   - Usar arrow functions
   - Usar event delegation en lugar de listeners individuales

3. **Limpiar código muerto**
   - Función `filtrarProyectos` que nunca se llama
   - Función `mostrarDetalles` sin implementar
   - Variable `contadorClicks` innecesaria
   - Console.logs de debugging

4. **Mejora de performance**
   - Usar **event delegation** en el contenedor padre en lugar de listeners en cada card
   - Usar clases CSS en lugar de manipular estilos inline

**Ejemplo de código mejorado:**
```javascript
// Event delegation (mucho más eficiente)
const projectsGrid = document.querySelector('.projects-grid');

if (projectsGrid) {
    projectsGrid.addEventListener('click', (e) => {
        const projectCard = e.target.closest('.project');
        if (projectCard) {
            const projectTitle = projectCard.querySelector('h2').textContent;
            console.log(`Proyecto seleccionado: ${projectTitle}`);
            // Aquí podrías abrir un modal, navegar, etc.
        }
    });

    // Hover con clases CSS (más limpio)
    projectsGrid.addEventListener('mouseover', (e) => {
        const projectCard = e.target.closest('.project');
        if (projectCard) {
            projectCard.classList.add('project-hover');
        }
    });

    projectsGrid.addEventListener('mouseout', (e) => {
        const projectCard = e.target.closest('.project');
        if (projectCard) {
            projectCard.classList.remove('project-hover');
        }
    });
}
```

**Criterios de aceptación:**
- [ ] Event delegation implementado
- [ ] Sin código muerto
- [ ] Sin manipulación inline de estilos
- [ ] Código limpio y eficiente

---

## 📝 Template de Pull Request

Cuando abran su PR, usen esta estructura:

```markdown
## 🎯 Descripción
[Explicar brevemente qué problemas se solucionaron]

## 📋 Cambios realizados
- [ ] Cambio 1
- [ ] Cambio 2
- [ ] Cambio 3

## ✅ Checklist
- [ ] Probé los cambios localmente
- [ ] Solo toqué los archivos de mi equipo
- [ ] El código no rompe funcionalidad existente
- [ ] Seguí las convenciones del proyecto

## 📸 Screenshots (opcional)
[Si aplica, antes y después]

## 💬 Notas adicionales
[Cualquier cosa que el revisor deba saber]
```

---

## 🎓 Recursos útiles

- [HTML Semántico - MDN](https://developer.mozilla.org/es/docs/Glossary/Semantics#sem%C3%A1ntica_en_html)
- [CSS Grid - CSS Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [JavaScript Moderno - ES6+](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [Accesibilidad Web - WCAG](https://www.w3.org/WAI/WCAG21/quickref/)

---

## ❓ ¿Atascado?

1. Lee el issue completo nuevamente
2. Revisa los archivos de ejemplo
3. Busca en la documentación
4. Pregunta a tu equipo
5. Como último recurso, pregunta al instructor

¡Buena suerte! 🚀