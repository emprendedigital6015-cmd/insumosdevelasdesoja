// Base de datos de proveedores (simulada).
// Para actualizar el listado real: editá este archivo y actualizá
// el campo "ultimaActualizacion" de cada proveedor que modifiques (formato AAAA-MM-DD).

window.PROVEEDORES = [
  {
    id: "p001",
    nombre: "Cerera del Sur",
    categoria: "ceras",
    precio: 4200,
    unidad: "por kg",
    ubicacion: "CABA",
    enlace: "https://wa.me/5491100000001",
    notas: "Cera de soja pura, bolsón de 25kg con descuento.",
    ultimaActualizacion: "2026-07-20"
  },
  {
    id: "p002",
    nombre: "Soja Wax Argentina",
    categoria: "ceras",
    precio: 3950,
    unidad: "por kg",
    ubicacion: "Envío nacional",
    enlace: "https://wa.me/5491100000002",
    notas: "Envío gratis a partir de 20kg.",
    ultimaActualizacion: "2026-07-18"
  },
  {
    id: "p003",
    nombre: "Ceras Patagonia",
    categoria: "ceras",
    precio: 4550,
    unidad: "por kg",
    ubicacion: "Interior",
    enlace: "https://wa.me/5491100000003",
    notas: "",
    ultimaActualizacion: "2026-06-30"
  },
  {
    id: "p004",
    nombre: "Pabilos del Litoral",
    categoria: "pabilos",
    precio: 18,
    unidad: "por unidad",
    ubicacion: "Interior",
    enlace: "https://wa.me/5491100000004",
    notas: "Pabilo de algodón encerado, varios grosores.",
    ultimaActualizacion: "2026-07-15"
  },
  {
    id: "p005",
    nombre: "Wick House",
    categoria: "pabilos",
    precio: 15,
    unidad: "por unidad",
    ubicacion: "GBA",
    enlace: "https://wa.me/5491100000005",
    notas: "Precio por mayor desde 100 unidades.",
    ultimaActualizacion: "2026-07-22"
  },
  {
    id: "p006",
    nombre: "Aromas del Plata",
    categoria: "fragancias",
    precio: 3200,
    unidad: "por kg",
    ubicacion: "CABA",
    enlace: "https://wa.me/5491100000006",
    notas: "Más de 40 aromas disponibles.",
    ultimaActualizacion: "2026-07-10"
  },
  {
    id: "p007",
    nombre: "Esencias Andinas",
    categoria: "fragancias",
    precio: 2890,
    unidad: "por kg",
    ubicacion: "Envío nacional",
    enlace: "https://wa.me/5491100000007",
    notas: "",
    ultimaActualizacion: "2026-07-05"
  },
  {
    id: "p008",
    nombre: "Aromatik",
    categoria: "fragancias",
    precio: 3450,
    unidad: "por kg",
    ubicacion: "GBA",
    enlace: "https://wa.me/5491100000008",
    notas: "Fragancias importadas.",
    ultimaActualizacion: "2026-06-28"
  },
  {
    id: "p009",
    nombre: "Color & Vela",
    categoria: "colorantes",
    precio: 950,
    unidad: "por unidad",
    ubicacion: "CABA",
    enlace: "https://wa.me/5491100000009",
    notas: "Tabletas de colorante, pack x10 colores.",
    ultimaActualizacion: "2026-07-12"
  },
  {
    id: "p010",
    nombre: "Pigmentos Andes",
    categoria: "colorantes",
    precio: 780,
    unidad: "por unidad",
    ubicacion: "Interior",
    enlace: "https://wa.me/5491100000010",
    notas: "",
    ultimaActualizacion: "2026-06-25"
  },
  {
    id: "p011",
    nombre: "Moldes Creativos",
    categoria: "moldes",
    precio: 2100,
    unidad: "por unidad",
    ubicacion: "Envío nacional",
    enlace: "https://wa.me/5491100000011",
    notas: "Moldes de silicona, más de 30 diseños.",
    ultimaActualizacion: "2026-07-19"
  },
  {
    id: "p012",
    nombre: "Silimoldes",
    categoria: "moldes",
    precio: 1850,
    unidad: "por unidad",
    ubicacion: "GBA",
    enlace: "https://wa.me/5491100000012",
    notas: "",
    ultimaActualizacion: "2026-07-01"
  },
  {
    id: "p013",
    nombre: "Frascos y Vidrios SRL",
    categoria: "recipientes",
    precio: 650,
    unidad: "por unidad",
    ubicacion: "CABA",
    enlace: "https://wa.me/5491100000013",
    notas: "Frascos de vidrio reciclado, varias capacidades.",
    ultimaActualizacion: "2026-07-21"
  },
  {
    id: "p014",
    nombre: "Envases del Centro",
    categoria: "recipientes",
    precio: 590,
    unidad: "por unidad",
    ubicacion: "Interior",
    enlace: "https://wa.me/5491100000014",
    notas: "Descuento por packs de 50 unidades.",
    ultimaActualizacion: "2026-07-08"
  },
  {
    id: "p015",
    nombre: "Latas Deco",
    categoria: "recipientes",
    precio: 480,
    unidad: "por unidad",
    ubicacion: "Envío nacional",
    enlace: "https://wa.me/5491100000015",
    notas: "Latas metálicas con tapa.",
    ultimaActualizacion: "2026-06-22"
  },
  {
    id: "p016",
    nombre: "Endurecedores Buenos Aires",
    categoria: "endurecedores",
    precio: 5200,
    unidad: "por kg",
    ubicacion: "CABA",
    enlace: "https://wa.me/5491100000016",
    notas: "Ácido esteárico, mejora la dureza y el acabado.",
    ultimaActualizacion: "2026-07-14"
  },
  {
    id: "p017",
    nombre: "Quimicera",
    categoria: "endurecedores",
    precio: 4890,
    unidad: "por kg",
    ubicacion: "GBA",
    enlace: "https://wa.me/5491100000017",
    notas: "",
    ultimaActualizacion: "2026-06-27"
  },
  {
    id: "p018",
    nombre: "Etiquetas y Empaques Vela",
    categoria: "otros",
    precio: 1200,
    unidad: "por unidad",
    ubicacion: "Envío nacional",
    enlace: "https://wa.me/5491100000018",
    notas: "Etiquetas personalizadas, cajas y bolsas kraft.",
    ultimaActualizacion: "2026-07-17"
  }
];
