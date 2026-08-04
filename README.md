# VELAS

"Encontrá, comparé y elegí el mejor proveedor para tus velas."

App para encontrar proveedores de insumos para velas: ceras, pabilos, fragancias, colorantes,
moldes, recipientes y más. Compará precios, guardá favoritos y accedé directo a la tienda de
cada proveedor.

## Diseño (basado en el mockup de identidad visual)

- **Logo:** frasco de vela minimalista con corazón, llama y destellos, en insignia circular con
  degradado coral → turquesa.
- **Header dinámico:** en Inicio muestra menú + logo + acceso a favoritos; en el resto de las
  pantallas muestra flecha de volver + título.
- **Categorías:** círculos de color suave con emoji, en grilla de 4 columnas.
- **Proveedores destacados:** carrusel horizontal en la pantalla de Inicio.
- **Tarjetas de proveedor:** avatar circular con iniciales, insignia "Envío a todo el país",
  botón de favorito (corazón) y botón de carrito que abre la tienda.
- **Filtros:** desplegables tipo píldora (Categoría, Zona, Ordenar por precio) siempre visibles
  arriba de los resultados.
- **Pantalla de detalle:** nueva — al tocar una tarjeta se abre la ficha del proveedor con
  "Sobre el proveedor", contacto (sitio web o Instagram) y botón "Visitar tienda".
- **Favoritos vacío:** ilustración de canasta con destellos.

## Cómo publicarla en GitHub Pages

1. Creá un repositorio nuevo en GitHub (o usá uno existente).
2. Subí **todos estos archivos sueltos** (sin carpetas) a la raíz del repositorio:
   `index.html`, `styles.css`, `app.js`, `manifest.webmanifest`, `service-worker.js`,
   `proveedores.js`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`, `favicon-32.png`,
   `README.md`.
3. **Settings → Pages → Deploy from a branch → main → /(root) → Save.**
4. Esperá 1-2 minutos y abrí el link publicado.

## Cómo actualizar el listado de proveedores

Todo el listado vive en `proveedores.js`. Editalo directo en GitHub: `nombre`, `categoria`,
`precio` (`0` = "Consultar"), `unidad`, `ubicacion`, `enlace`, `notas`, `ultimaActualizacion`.

## Cómo funciona el agrupado por negocio

Cada proveedor puede vender en varias categorías (por ejemplo, Deepa Insumos vende cera, pabilos,
fragancias, colorantes, moldes y recipientes). En `proveedores.js`, cada categoría de un mismo
negocio es una entrada separada, pero comparten los campos `negocio` (una clave interna, por
ejemplo `"deepa"`) y `nombreNegocio` (el nombre que se muestra, por ejemplo `"Deepa Insumos"`).
La app agrupa automáticamente todas las entradas con el mismo `negocio` en una sola tarjeta,
mostrando todas sus categorías juntas y el precio más conveniente como destacado.

Para agregar una nueva categoría a un negocio que ya existe, copiá una de sus entradas, cambiá
`categoria`, `precio`, `unidad` y `enlace`, y dejá el mismo `negocio` y `nombreNegocio`. Para un
negocio nuevo con una sola categoría, simplemente no incluyas los campos `negocio` ni
`nombreNegocio` — la app va a usar el `id` y el `nombre` de esa entrada.

**Aviso:** VELAS es una guía informativa de proveedores. No participamos en las transacciones ni
garantizamos precios, stock o calidad de los productos de terceros.
