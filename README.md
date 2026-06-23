# Sitio web de Tecnimecanic S.A.S. - Versión animada profesional

Sitio estático para GitHub Pages con diseño corporativo, animaciones profesionales, mapa, fondo dinámico y sistema de temas por fecha.

## Archivos principales

- `index.html`: contenido principal del sitio.
- `styles.css`: diseño visual, animaciones y responsive.
- `script.js`: menú móvil, animaciones al hacer scroll, contador de experiencia, brillo del cursor y temas por fecha.
- `assets/logo-gota.png`: logo.
- `assets/hero-bg.mp4`: archivo opcional. Si se agrega un video con ese nombre, aparecerá como video de fondo del inicio.

## Video de fondo

Para usar un video real en el hero:

1. Comprimir el video en formato MP4.
2. Nombrarlo `hero-bg.mp4`.
3. Subirlo dentro de la carpeta `assets`.
4. GitHub Pages lo cargará automáticamente.

Si no hay video, el sitio usa un fondo animado profesional hecho con CSS.

## Mapa

El mapa usa la dirección `Calle 64C #74A-04, Bogotá, Colombia`. Si cambia la sede, actualizar el enlace de Google Maps en `index.html`.

## Animaciones por fecha

En `script.js` existe la sección `specialDates`. Allí se pueden agregar fechas de partidos, campañas o eventos especiales:

```js
'2026-06-15': { cls: 'theme-colombia', text: 'Modo partido: apoyamos a Colombia y mantenemos sus equipos en operación.' }
```

El sitio también activa automáticamente mensajes para enero, julio y diciembre.
