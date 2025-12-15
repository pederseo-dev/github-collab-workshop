# 🧪 GitHub Collaboration Challenge

### “Rescatando un Portfolio en Producción”

## 📌 Contexto

Este repositorio contiene un **portfolio web ficticio** que **ya está en producción** (desplegado en Render).

⚠️ El sitio funciona, pero:

* Tiene errores de UI/UX
* Usa malas prácticas
* No es accesible
* El código es mejorable

Tu misión es **mejorarlo sin romper producción**, trabajando de forma colaborativa con Git y GitHub.

---

## 🎯 Objetivo del challenge

Aprender a:

* Trabajar sobre una aplicación **ya desplegada**
* Usar correctamente **ramas, Pull Requests y reviews**
* Colaborar en equipo sin pisar el trabajo de otros
* Identificar y corregir malas prácticas reales
* Mejorar código existente en lugar de crear uno nuevo

---

## 🧠 Reglas importantes

### ❌ Prohibido

* Hacer push directo a `main`
* Trabajar sin rama propia
* Mezclar tareas no relacionadas en un mismo PR

### ✅ Obligatorio

* Crear tu rama desde `staging`
* Hacer cambios pequeños y enfocados
* Abrir un Pull Request hacia `staging`
* Explicar claramente qué problema solucionaste

---

## 🌿 Flujo de trabajo

1. Cambiar a `staging`

   ```bash
   git checkout staging
   git pull
   ```

2. Crear una rama de trabajo

   ```bash
   git checkout -b feature/nombre-del-equipo
   ```

3. Hacer los cambios asignados

4. Commit con mensaje claro

   ```bash
   git commit -m "Mejora accesibilidad en Home"
   ```

5. Push y Pull Request hacia `staging`

---

## 🗂️ Estructura del proyecto

```text
/
├── index.html              → Home
├── pages/
│   ├── about.html          → About
│   └── projects.html       → Projects
│
├── css/
│   ├── global.css          → estilos compartidos
│   ├── home.css            → Home
│   ├── about.css           → About
│   └── projects.css        → Projects
│
├── js/
│   ├── main.js             → JS compartido
│   ├── home.js
│   ├── about.js
│   └── projects.js
│
├── assets/
│   └── images/
└── README.md
```

---

## 👥 Organización de equipos

Cada equipo trabaja **solo sobre los archivos asignados**.

### 🏠 Home (`index.html`)

* Equipo 1 → HTML
* Equipo 2 → CSS (`css/home.css`)
* Equipo 3 → JS (`js/home.js`)

### 👤 About (`about.html`)

* Equipo 4 → HTML
* Equipo 5 → CSS (`css/about.css`)
* Equipo 6 → JS (`js/about.js`)

### 🧩 Projects (`projects.html`)

* Equipo 7 → HTML
* Equipo 8 → CSS (`css/projects.css`)
* Equipo 9 → JS (`js/projects.js`)

---

## 🛠️ Tipos de mejoras esperadas

### 🎨 UI / UX

* Mejor contraste de colores
* Tipografías legibles
* Espaciados coherentes
* Diseño usable en mobile

### ♿ Accesibilidad

* HTML semántico
* Uso correcto de `alt`
* Navegación por teclado
* Labels en formularios (si aplica)

### 🧼 Código

* Eliminar malas prácticas
* Código más legible
* Nombres claros
* Evitar duplicación innecesaria

---

## 🧪 Pull Requests

Todo PR debe incluir:

* Descripción clara del problema
* Qué se mejoró
* (Opcional) screenshots del antes y después

Ejemplo:

> “Se corrigió el bajo contraste en Home y se mejoró la jerarquía visual del header.”

---

## 🚀 Producción

La rama `main` está conectada a Render.

Cuando los cambios en `staging` sean aprobados:

* Se hará merge a `main`
* El sitio se actualizará automáticamente

🎉 Tu código llegará a producción real.

---

## 🧑‍🏫 Rol del docente

* Revisar Pull Requests
* Aprobar o pedir cambios
* Hacer preguntas en los comentarios
* Coordinar el merge final a producción

---

## 📣 Importante

Este challenge no busca “perfección”, sino:

* aprender a trabajar en equipo
* entender el flujo real de desarrollo
* mejorar código existente de forma responsable

---
