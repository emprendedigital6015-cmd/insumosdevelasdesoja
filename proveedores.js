// Base de datos de proveedores. Estos son negocios REALES encontrados por búsqueda web
// (agosto 2026). Los precios marcados con nota "verificar precio" son estimativos:
// revisá cada sitio antes de publicar, porque los precios cambian seguido.
//
// Para agregar/editar un proveedor, copiá un bloque como plantilla y completá los campos.
// categoria: "ceras" | "pabilos" | "fragancias" | "colorantes" | "moldes" | "recipientes" | "endurecedores" | "otros"

window.PROVEEDORES = [
  {
    id: "p001",
    nombre: "Grupo Utopia",
    categoria: "ceras",
    precio: 0,
    unidad: "por kg (consultar)",
    ubicacion: "CABA",
    enlace: "https://www.grupoutopia.com.ar/products/cera-de-soja-x-25-kg",
    notas: "Cera de soja x 20-25kg. Envíos a todo el país. Verificar precio actualizado en el sitio.",
    ultimaActualizacion: "2026-08-03"
  },
  {
    id: "p002",
    nombre: "Insumos Oeste",
    categoria: "ceras",
    precio: 0,
    unidad: "por kg (consultar)",
    ubicacion: "GBA",
    enlace: "https://insumosoeste.com.ar/products/cera-de-soja-premium-5-kg-Jz9mkVkM",
    notas: "Cera de soja premium 5kg. Ciudadela, Buenos Aires. Envíos a todo el país, entrega en 24-48hs. Verificar precio actualizado.",
    ultimaActualizacion: "2026-08-03"
  },
  {
    id: "p003",
    nombre: "El Rey del Fibro (Mayoristas)",
    categoria: "ceras",
    precio: 98298,
    unidad: "por caja de 20kg",
    ubicacion: "Envío nacional",
    enlace: "https://mayoristas.elreydelfibro.com.ar/productos/cera-de-soja-x20kg/",
    notas: "Cera de soja premium, caja x 20kg. Precio de referencia relevado en agosto 2026, puede haber cambiado.",
    ultimaActualizacion: "2026-08-03"
  },
  {
    id: "p004",
    nombre: "Pura Química",
    categoria: "ceras",
    precio: 0,
    unidad: "kit mayorista (consultar)",
    ubicacion: "Envío nacional",
    enlace: "https://puraquimica.com.ar/producto/kit-mayorista-velas-de-cera-de-soja/",
    notas: "Kit mayorista: 20kg cera de soja + 10m pabilo + 100 chapitas + esencia + 2kg ácido esteárico (endurecedor). Ideal para empezar. Verificar precio.",
    ultimaActualizacion: "2026-08-03"
  },
  {
    id: "p005",
    nombre: "AUPAR SRL (La Esquina Rosa)",
    categoria: "ceras",
    precio: 0,
    unidad: "por kg (consultar)",
    ubicacion: "Envío nacional",
    enlace: "https://www.auparsrl.com.ar/",
    notas: "Cera de soja comercial x 1kg. Verificar precio y disponibilidad.",
    ultimaActualizacion: "2026-08-03"
  },
  {
    id: "p006",
    nombre: "Casa Allegra",
    categoria: "fragancias",
    precio: 0,
    unidad: "consultar",
    ubicacion: "Envío nacional",
    enlace: "https://casaallegra.com.ar/insumos/cera-de-soja/",
    notas: "Esencias de autor para velas, línea clásica y premium. También vende pabilos y cera. Verificar precio.",
    ultimaActualizacion: "2026-08-03"
  },
  {
    id: "p007",
    nombre: "Casa Allegra (pabilos)",
    categoria: "pabilos",
    precio: 0,
    unidad: "consultar",
    ubicacion: "Envío nacional",
    enlace: "https://casaallegra.com.ar/",
    notas: "Sección \"Pabilos & Más\" del mismo proveedor. Verificar precio y variedad de grosores.",
    ultimaActualizacion: "2026-08-03"
  },
  {
    id: "p008",
    nombre: "Insumos Oeste (moldes)",
    categoria: "moldes",
    precio: 0,
    unidad: "por unidad (consultar)",
    ubicacion: "GBA",
    enlace: "https://insumosoeste.com.ar/categories/moldes-de-silicona/products",
    notas: "Moldes de silicona, mismo proveedor que la cera. Conviene comprar junto para ahorrar en envío.",
    ultimaActualizacion: "2026-08-03"
  },
  {
    id: "p009",
    nombre: "Coursing",
    categoria: "moldes",
    precio: 0,
    unidad: "por unidad (consultar)",
    ubicacion: "Envío nacional",
    enlace: "https://www.coursing.com.ar/sellos/moldes/",
    notas: "Moldes para velas, también vende esencias concentradas, cera y aditivos, y envases/contenedores.",
    ultimaActualizacion: "2026-08-03"
  },
  {
    id: "p010",
    nombre: "Rapi Mayorista",
    categoria: "moldes",
    precio: 3629,
    unidad: "por unidad",
    ubicacion: "Envío nacional",
    enlace: "https://www.mayoristaenonce.com.ar/product-category/moldes/molde-de-velas/",
    notas: "Molde de silicona tricolor multi-diseño. Precio de referencia relevado en agosto 2026.",
    ultimaActualizacion: "2026-08-03"
  },
  {
    id: "p011",
    nombre: "Doctor Glitter",
    categoria: "moldes",
    precio: 450,
    unidad: "por unidad desde",
    ubicacion: "Envío nacional",
    enlace: "https://doctorglitter.mitiendanube.com/velas-y-jabones/velas/moldes3/",
    notas: "Moldes de silicona variados desde $450. Precio de referencia relevado en agosto 2026, varía según diseño.",
    ultimaActualizacion: "2026-08-03"
  },
  {
    id: "p012",
    nombre: "Tienda Nativa",
    categoria: "moldes",
    precio: 0,
    unidad: "por unidad (consultar)",
    ubicacion: "Envío nacional",
    enlace: "https://www.tiendanativa.com.ar/recipientes1/envases/moldes-de-silicona-para-velas/",
    notas: "Moldes de silicona para velas de pilar. Verificar precio.",
    ultimaActualizacion: "2026-08-03"
  },
  {
    id: "p013",
    nombre: "Tía Robertina",
    categoria: "ceras",
    precio: 0,
    unidad: "consultar",
    ubicacion: "Envío nacional",
    enlace: "https://www.instagram.com/tiarobertina/",
    notas: "Cera de soja. Verificar link de Instagram y precio actualizado (dato aportado, no confirmado por búsqueda).",
    ultimaActualizacion: "2026-08-03"
  },
  {
    id: "p014",
    nombre: "Fede Aye Repostería",
    categoria: "moldes",
    precio: 0,
    unidad: "por unidad (consultar)",
    ubicacion: "Envío nacional",
    enlace: "https://www.instagram.com/fedeayereposteria/",
    notas: "Moldes de silicona. Verificar link de Instagram y precio (dato aportado, no confirmado por búsqueda).",
    ultimaActualizacion: "2026-08-03"
  },
  {
    id: "p015",
    nombre: "De Colores Repostería",
    categoria: "moldes",
    precio: 0,
    unidad: "por unidad (consultar)",
    ubicacion: "Envío nacional",
    enlace: "https://www.instagram.com/decoloresreposteria/",
    notas: "Moldes de silicona. Verificar link de Instagram exacto y precio (dato aportado, no confirmado por búsqueda).",
    ultimaActualizacion: "2026-08-03"
  },
  {
    id: "p016",
    nombre: "Meraki Moldes",
    categoria: "moldes",
    precio: 0,
    unidad: "por unidad (consultar)",
    ubicacion: "Envío nacional",
    enlace: "https://www.instagram.com/merakimoldes/",
    notas: "Moldes de silicona. Verificar link de Instagram y precio (dato aportado, no confirmado por búsqueda).",
    ultimaActualizacion: "2026-08-03"
  },
  {
    id: "p017",
    nombre: "Arte Home (Gabriela)",
    categoria: "moldes",
    precio: 0,
    unidad: "por unidad (consultar)",
    ubicacion: "GBA",
    enlace: "https://www.instagram.com/artee.home/",
    notas: "Velas, figuras en yeso y moldes de silicona. Ing. Allan, Florencio Varela. Cuenta verificada por búsqueda.",
    ultimaActualizacion: "2026-08-03"
  },
  {
    id: "p018",
    nombre: "Tus Moldes en Casa",
    categoria: "moldes",
    precio: 0,
    unidad: "por unidad (consultar)",
    ubicacion: "Interior",
    enlace: "https://www.instagram.com/tusmoldes_encasa/",
    notas: "Moldes de silicona, zona Interior. Verificar precio actualizado (dato aportado, no confirmado por búsqueda).",
    ultimaActualizacion: "2026-08-03"
  },
  {
    id: "p020",
    nombre: "Deepa Insumos",
    categoria: "ceras",
    precio: 11540,
    unidad: "por kg",
    ubicacion: "Envío nacional",
    enlace: "https://deepa.com.ar/insumos/cera-de-soja/",
    notas: "Cera APF 60 Astra en escamas. Envíos por moto y Correo Argentino a todo el país. WhatsApp: wa.me/541168848816. Precio verificado en la web (agosto 2026).",
    ultimaActualizacion: "2026-08-03"
  },
  {
    id: "p021",
    nombre: "Deepa Insumos (pabilos)",
    categoria: "pabilos",
    precio: 1000,
    unidad: "por pack de 10 chapas",
    ubicacion: "Envío nacional",
    enlace: "https://deepa.com.ar/insumos/pabilos/",
    notas: "Sección de pabilos y accesorios (chapitas). Envíos a todo el país. Precio de referencia del accesorio verificado en la web.",
    ultimaActualizacion: "2026-08-03"
  },
  {
    id: "p022",
    nombre: "Deepa Insumos (esencias)",
    categoria: "fragancias",
    precio: 9300,
    unidad: "por 100ml",
    ubicacion: "Envío nacional",
    enlace: "https://deepa.com.ar/insumos/esencias-concentradas/",
    notas: "Esencias concentradas para velas, más de 20 aromas disponibles. Precio verificado en la web (agosto 2026).",
    ultimaActualizacion: "2026-08-03"
  },
  {
    id: "p023",
    nombre: "Deepa Insumos (colorantes)",
    categoria: "colorantes",
    precio: 2430,
    unidad: "por 10g",
    ubicacion: "Envío nacional",
    enlace: "https://deepa.com.ar/productos/pigmento-mica-powder-polvo-metalizado-para-velas-o-resina-10g-aprox/",
    notas: "Pigmento mica powder (polvo metalizado), 30 colores disponibles. Precio verificado en la web (agosto 2026).",
    ultimaActualizacion: "2026-08-03"
  },
  {
    id: "p024",
    nombre: "Deepa Insumos (moldes)",
    categoria: "moldes",
    precio: 7900,
    unidad: "por unidad",
    ubicacion: "Envío nacional",
    enlace: "https://deepa.com.ar/moldes-de-silicona/moldes-para-velas-de-soja-jabones/",
    notas: "Moldes de silicona específicos para velas de soja y jabones. Precio de referencia (Molde Recipiente para Velas 6) verificado en la web.",
    ultimaActualizacion: "2026-08-03"
  },
  {
    id: "p025",
    nombre: "Deepa Insumos (recipientes)",
    categoria: "recipientes",
    precio: 1900,
    unidad: "por unidad",
    ubicacion: "Envío nacional",
    enlace: "https://deepa.com.ar/productos-de-madera/",
    notas: "Latas para velas y otros recipientes. Precio de referencia (Lata para Velas) verificado en la web.",
    ultimaActualizacion: "2026-08-03"
  },
  {
    id: "p026",
    nombre: "Mundo Rocco Home (recipientes)",
    categoria: "recipientes",
    precio: 3290,
    unidad: "por unidad",
    ubicacion: "Envío nacional",
    enlace: "https://www.mundoroccohome.com.ar/",
    notas: "Portavelas / envase Imperial blanco brillo, sin tapa. Envíos a todo el país, 3 cuotas sin interés, 20% OFF por transferencia. Precio verificado en la web (agosto 2026).",
    ultimaActualizacion: "2026-08-03"
  },
  {
    id: "p027",
    nombre: "Mundo Rocco Home (esencias)",
    categoria: "fragancias",
    precio: 6645,
    unidad: "por 100ml",
    ubicacion: "Envío nacional",
    enlace: "https://www.mundoroccohome.com.ar/",
    notas: "Esencias para velas, varios aromas y tamaños (50-200ml). Precio de referencia (Banana Caramelo) verificado en la web.",
    ultimaActualizacion: "2026-08-03"
  },
  {
    id: "p028",
    nombre: "Mundo Rocco Home (pabilos)",
    categoria: "pabilos",
    precio: 1110,
    unidad: "por pack de 10",
    ubicacion: "Envío nacional",
    enlace: "https://www.mundoroccohome.com.ar/",
    notas: "Pabilo hilo de cáñamo armado con ojalillo, 9cm de alto. Precio verificado en la web (agosto 2026).",
    ultimaActualizacion: "2026-08-03"
  },
  {
    id: "p029",
    nombre: "Mundo Rocco Home (moldes)",
    categoria: "moldes",
    precio: 8900,
    unidad: "por unidad",
    ubicacion: "Envío nacional",
    enlace: "https://www.mundoroccohome.com.ar/",
    notas: "Molde de silicona para velas Arcoiris grande. Precio verificado en la web (agosto 2026), consultar disponibilidad.",
    ultimaActualizacion: "2026-08-03"
  },
  {
    id: "p030",
    nombre: "Mundo Rocco Home (accesorios)",
    categoria: "otros",
    precio: 10990,
    unidad: "por pack de 2",
    ubicacion: "Envío nacional",
    enlace: "https://www.mundoroccohome.com.ar/",
    notas: "Apagavelas y otros accesorios (dijes, vinilos, glitter decorativo). Precio de referencia verificado en la web.",
    ultimaActualizacion: "2026-08-03"
  }
];
