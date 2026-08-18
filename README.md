# Proveedores de Velas Artesanales

App para encontrar proveedores de insumos para velas artesanales: cera, moldes, esencias,
mechas y más. Compará, guardá favoritos y accedé directo a la tienda de cada proveedor.

## Identidad de marca

- **Logo:** isotipo circular — vela verde oliva, llama dorada, pluma dorada y ramita de
  lavanda, dentro de un anillo fino oro champaña.
- **Tipografía:** Poppins (geométrica, limpia, moderna).

## Paleta de colores (tokens de diseño)

| Token | Uso | HEX |
|---|---|---|
| Blanco UI | Fondo general de pantallas | `#FFFFFF` |
| Lino Suave | Tarjetas, contenedores, separadores | `#EAE7E2` |
| Pizarra Profundo | Títulos y textos principales | `#2A3444` |
| Gris Neutro | Subtítulos, íconos inactivos | `#657786` |
| Oro Champaña | Botones y enlaces principales (CTA) | `#D9B974` |
| Verde Oliva | Marca, íconos activos, éxito | `#5D6D44` |
| Terracota | Alertas, errores, acciones críticas | `#C48A79` |

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
`precio` (`0` = "Consultar"), `unidad`, `ubicacion`, `enlace`, `notas`, `ultimaActualizacion`,
y opcionalmente `negocio` / `nombreNegocio` para agrupar varias categorías de un mismo proveedor
en una sola tarjeta.

## Qué tiene esta versión

Inicio (categorías, destacados, última actualización), Buscar (filtros por categoría y zona),
Favoritos, Configuración. Los 36 proveedores reales ya cargados, agrupados en 21 negocios.

**Aviso:** Proveedores de Velas Artesanales es una guía informativa de proveedores. No
participamos en las transacciones ni garantizamos precios, stock o calidad de los productos
de terceros.
