# InsumoVela

Encontrá, comparás y guardá tus proveedores de insumos para velas de soja: ceras, pabilos, fragancias, colorantes, moldes, recipientes y más.

## Cómo publicarla en GitHub Pages

1. **Descomprimí** el archivo `insumovela-github.zip`. Vas a obtener una carpeta llamada `insumovela` con todos los archivos adentro.
2. Creá un repositorio nuevo en GitHub (o usá uno existente).
3. Subí **el contenido** de la carpeta `insumovela` a la raíz del repositorio — es decir, `index.html` tiene que quedar en la raíz, no dentro de una subcarpeta.
4. Andá a **Settings → Pages**.
5. En "Build and deployment", elegí **Deploy from a branch**.
6. Seleccioná la rama **main** y la carpeta **/(root)**.
7. Guardá. GitHub te va a dar un enlace parecido a `https://tu-usuario.github.io/tu-repositorio/`. Puede tardar 1-2 minutos en estar disponible.

## Cómo instalarla en el celular

**iPhone (Safari):** abrí el enlace → tocá el ícono de compartir → "Agregar a la pantalla de inicio".

**Android (Chrome):** abrí el enlace → menú (⋮) → "Agregar a pantalla de inicio" o "Instalar app".

## Cómo actualizar el listado de proveedores

Todo el listado vive en `data/proveedores.js`. Para agregar, editar o quitar un proveedor:

1. Abrí `data/proveedores.js` con cualquier editor de texto.
2. Copiá el bloque de un proveedor existente como plantilla.
3. Completá los campos: `nombre`, `categoria` (una de: `ceras`, `pabilos`, `fragancias`, `colorantes`, `moldes`, `recipientes`, `endurecedores`, `otros`), `precio`, `unidad`, `ubicacion`, `enlace` y `notas`.
4. Actualizá el campo `ultimaActualizacion` a la fecha del día (formato `AAAA-MM-DD`). La app usa la fecha más reciente de todos los proveedores para mostrar el mensaje "Listado actualizado el...".
5. Volvé a subir el archivo modificado a GitHub (podés editarlo directamente en la web de GitHub, no hace falta ningún programa). La app publicada se actualiza sola.

## Cómo editar los tips de ahorro

Los tips viven en `data/tips.js`, con la misma lógica: cada tip tiene un `grupo`, `titulo` y `texto`. Podés agregar, editar o quitar tips libremente.

## Estructura del proyecto

```
insumovela/
├── index.html
├── styles.css
├── app.js
├── data/
│   ├── proveedores.js
│   └── tips.js
├── manifest.webmanifest
├── service-worker.js
├── README.md
└── icons/
    ├── icon-192.png
    ├── icon-512.png
    ├── apple-touch-icon.png
    └── favicon-32.png
```

## Alcance de esta versión

Esta primera versión incluye: búsqueda por categoría y texto, filtros avanzados combinables (categoría + precio + zona), comparación de precios, favoritos persistentes, tips de ahorro y fecha de actualización automática del listado.

No incluye (a propósito, para mantenerla simple): pagos dentro de la app, cuentas de usuario, chat con proveedores, reseñas ni panel de administración. Los datos se cargan editando directamente los archivos en `data/`.

**Aviso:** InsumoVela es una guía informativa de proveedores. No participamos en las transacciones ni garantizamos precios, stock o calidad de los productos de terceros.
