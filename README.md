# Insumos para Velas de Soja

App simple y rápida para encontrar proveedores de insumos para velas de soja: ceras, pabilos,
fragancias, colorantes, moldes, recipientes y más. Compará precios y guardá tus favoritos.

**Nombre corto (ícono del celular):** Insumos Vela

## Cómo publicarla en GitHub Pages

1. Creá un repositorio nuevo en GitHub (o usá uno existente).
2. Subí **todos estos archivos sueltos** (sin carpetas) a la raíz del repositorio:
   `index.html`, `styles.css`, `app.js`, `manifest.webmanifest`, `service-worker.js`,
   `proveedores.js`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`, `favicon-32.png`,
   `README.md`.
3. Andá a **Settings → Pages**.
4. En "Build and deployment", elegí **Deploy from a branch**.
5. Seleccioná la rama **main** y la carpeta **/(root)**.
6. Guardá. GitHub te va a dar un enlace parecido a `https://tu-usuario.github.io/tu-repositorio/`.

Esta versión **no usa carpetas** — todos los archivos van sueltos, directo en la raíz del
repositorio, para evitar errores al subir.

## Cómo instalarla en el celular

**iPhone (Safari):** abrí el enlace → tocá el ícono de compartir → "Agregar a la pantalla de inicio".

**Android (Chrome):** abrí el enlace → menú (⋮) → "Agregar a pantalla de inicio" o "Instalar app".

## Cómo actualizar el listado de proveedores

Todo el listado vive en `proveedores.js`. Para agregar, editar o quitar un proveedor:

1. Abrí `proveedores.js` directamente en GitHub (tocá el archivo → ícono de lápiz para editar).
2. Copiá el bloque de un proveedor existente como plantilla.
3. Completá: `nombre`, `categoria` (una de: `ceras`, `pabilos`, `fragancias`, `colorantes`,
   `moldes`, `recipientes`, `endurecedores`, `otros`), `precio` (usá `0` si no está confirmado,
   la app va a mostrar "Consultar precio" automáticamente), `unidad`, `ubicacion` (una de:
   `Envío nacional`, `CABA`, `GBA`, `Interior`), `enlace`, `notas` y `ultimaActualizacion`
   (formato `AAAA-MM-DD`).
4. Tocá "Commit changes". La app publicada se actualiza sola.

## Qué tiene esta versión (v1.0)

- **Inicio**: saludo, accesos rápidos a categorías, última actualización del listado, favoritos recientes.
- **Buscar**: buscador de texto, filtro por categoría, filtro por zona, ordenar por precio.
- **Favoritos**: proveedores guardados, persisten en el celular.
- **Ajustes**: cambiar nombre, borrar favoritos.

Cada tarjeta de proveedor muestra: nombre, precio, unidad, ubicación, categoría, insignia de
"Envío nacional" cuando corresponde, fecha de última actualización, botón de favorito (♥) y
botón "Ver tienda".

## Qué NO tiene esta versión (a propósito, para mantenerla simple)

Login, registro, pagos, chat, IA, calculadoras, guías, cursos, comentarios, valoraciones,
carrito, panel de administración. Los datos se cargan editando `proveedores.js` a mano.

**Aviso:** Insumos para Velas de Soja es una guía informativa de proveedores. No participamos
en las transacciones ni garantizamos precios, stock o calidad de los productos de terceros.
