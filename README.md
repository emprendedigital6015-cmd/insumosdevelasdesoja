# VELAS

"Encontrá, comparé y elegí el mejor proveedor para tus velas."

App simple y rápida para encontrar proveedores de insumos para velas: ceras, pabilos,
fragancias, colorantes, moldes, recipientes y más. Compará precios y guardá tus favoritos.

## Identidad visual

- **Logo:** vela minimalista + llama moderna + destello de creatividad, estilo flat design.
- **Tipografía:** Poppins (con respaldo automático a fuentes del sistema si no hay conexión).
- **Colores principales:** Coral `#FF6B6B`, Turquesa `#2EC4B6`, Mostaza `#FFC857`, Fucsia `#FF4D8D`.

## Cómo publicarla en GitHub Pages

1. Creá un repositorio nuevo en GitHub (o usá uno existente).
2. Subí **todos estos archivos sueltos** (sin carpetas) a la raíz del repositorio:
   `index.html`, `styles.css`, `app.js`, `manifest.webmanifest`, `service-worker.js`,
   `proveedores.js`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`, `favicon-32.png`,
   `README.md`.
3. Andá a **Settings → Pages → Deploy from a branch → main → /(root) → Save**.
4. Esperá 1-2 minutos y abrí el link publicado.

## Cómo actualizar el listado de proveedores

Todo el listado vive en `proveedores.js`. Editalo directo en GitHub (tocá el archivo → lápiz),
completá `nombre`, `categoria`, `precio` (usá `0` si no está confirmado — la app muestra
"Consultar precio" sola), `unidad`, `ubicacion`, `enlace`, `notas` y `ultimaActualizacion`.

## Funciones de esta versión (v1.0)

- Inicio, Buscar (con tarjetas o tabla comparativa), Favoritos, Configuración.
- Filtros: categoría, zona, ordenar por precio.
- Nunca muestra "$0" — dice "Consultar precio".
- Insignia de "Envío nacional", fecha de actualización, favoritos persistentes.

## Qué NO tiene (a propósito, según el roadmap v1.0)

Login, pagos, chat, IA, calculadoras, guías, carrito, panel de administración. Quedan para
una v2.0 futura.

**Aviso:** VELAS es una guía informativa de proveedores. No participamos en las transacciones
ni garantizamos precios, stock o calidad de los productos de terceros.
