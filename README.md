# InsumoVela

Encontrá, comparás y guardá tus proveedores de insumos para velas de soja: ceras, pabilos, fragancias, colorantes, moldes, recipientes y más.

## Cómo publicarla en GitHub Pages

1. Creá un repositorio nuevo en GitHub (o usá uno existente).
2. Subí **todos estos archivos sueltos** (sin carpetas) a la raíz del repositorio: `index.html`, `styles.css`, `app.js`, `manifest.webmanifest`, `service-worker.js`, `proveedores.js`, `tips.js`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`, `favicon-32.png`, `README.md`.
3. Andá a **Settings → Pages**.
4. En "Build and deployment", elegí **Deploy from a branch**.
5. Seleccioná la rama **main** y la carpeta **/(root)**.
6. Guardá. GitHub te va a dar un enlace parecido a `https://tu-usuario.github.io/tu-repositorio/`. Puede tardar 1-2 minutos en estar disponible.

Esta versión **no usa carpetas** — todos los archivos van sueltos, directo en la raíz del repositorio. Así evitamos errores al subir.

## Cómo instalarla en el celular

**iPhone (Safari):** abrí el enlace → tocá el ícono de compartir → "Agregar a la pantalla de inicio".

**Android (Chrome):** abrí el enlace → menú (⋮) → "Agregar a pantalla de inicio" o "Instalar app".

## Cómo actualizar el listado de proveedores

Todo el listado vive en el archivo `proveedores.js`. Para agregar, editar o quitar un proveedor:

1. Abrí `proveedores.js` directamente en GitHub (tocá el archivo → ícono de lápiz para editar).
2. Copiá el bloque de un proveedor existente como plantilla.
3. Completá los campos: `nombre`, `categoria` (una de: `ceras`, `pabilos`, `fragancias`, `colorantes`, `moldes`, `recipientes`, `endurecedores`, `otros`), `precio`, `unidad`, `ubicacion`, `enlace` y `notas`.
4. Actualizá el campo `ultimaActualizacion` a la fecha del día (formato `AAAA-MM-DD`).
5. Tocá "Commit changes". La app publicada se actualiza sola.

## Cómo editar los tips de ahorro

Los tips viven en `tips.js`, con la misma lógica: cada tip tiene un `grupo`, `titulo` y `texto`.

## Alcance de esta versión

Esta primera versión incluye: búsqueda por categoría y texto, filtros avanzados combinables (categoría + precio + zona), comparación de precios, favoritos persistentes, tips de ahorro y fecha de actualización automática del listado.

No incluye (a propósito, para mantenerla simple): pagos dentro de la app, cuentas de usuario, chat con proveedores, reseñas ni panel de administración.

**Aviso:** InsumoVela es una guía informativa de proveedores. No participamos en las transacciones ni garantizamos precios, stock o calidad de los productos de terceros.
