(function () {
  "use strict";

  /* ---------------- Constantes ---------------- */
  var CATEGORIAS = [
    { id: "ceras", nombre: "Ceras", icono: "cera", color: "#FFC857" },
    { id: "pabilos", nombre: "Pabilos", icono: "pabilo", color: "#2EC4B6" },
    { id: "fragancias", nombre: "Fragancias", icono: "fragancia", color: "#FF6B6B" },
    { id: "colorantes", nombre: "Colorantes", icono: "colorante", color: "#9B5DE5" },
    { id: "moldes", nombre: "Moldes", icono: "molde", color: "#3A86FF" },
    { id: "recipientes", nombre: "Recipientes", icono: "recipiente", color: "#7BD389" },
    { id: "endurecedores", nombre: "Endurecedores", icono: "endurecedor", color: "#6C757D" },
    { id: "otros", nombre: "Otros", icono: "otros", color: "#B8B8B8" }
  ];
  var ZONAS = ["Envío nacional", "CABA", "GBA", "Interior"];

  var LS_KEYS = {
    perfil: "velas_perfil",
    favoritos: "velas_favoritos"
  };

  /* ---------------- Íconos lineales (outline, sin relleno) ---------------- */
  function icono(nombre, size, relleno) {
    size = size || 22;
    var d = {
      home: 'M3 11.5 12 4l9 7.5 M5.5 10v9.5a1 1 0 0 0 1 1H9.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6h3a1 1 0 0 0 1-1V10',
      search: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z M21 21l-4.3-4.3',
      heart: 'M12 20.5s-7.5-4.6-9.8-9.2C.7 8 2 4.5 5.6 3.7c2-.5 3.9.4 6.4 3 2.5-2.6 4.4-3.5 6.4-3C21.9 4.5 23.3 8 21.8 11.3 19.5 15.9 12 20.5 12 20.5Z',
      heartFill: 'M12 20.5s-7.5-4.6-9.8-9.2C.7 8 2 4.5 5.6 3.7c2-.5 3.9.4 6.4 3 2.5-2.6 4.4-3.5 6.4-3C21.9 4.5 23.3 8 21.8 11.3 19.5 15.9 12 20.5 12 20.5Z',
      gear: 'M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z M19.4 13.5a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V20a2 2 0 1 1-4 0v-.2a1.7 1.7 0 0 0-1.1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H4a2 2 0 1 1 0-4h.2a1.7 1.7 0 0 0 1.6-1.1 1.7 1.7 0 0 0-.3-1.9l-.1-.1A2 2 0 1 1 8.2 3l.1.1a1.7 1.7 0 0 0 1.9.3H10.3a1.7 1.7 0 0 0 1-1.6V1.8a2 2 0 1 1 4 0V2a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V8a1.7 1.7 0 0 0 1.6 1H20a2 2 0 1 1 0 4h-.2a1.7 1.7 0 0 0-1.6 1Z',
      cart: 'M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L21 8H6.2 M9.5 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z M17 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
      pin: 'M12 21.5S5 15 5 10a7 7 0 1 1 14 0c0 5-7 11.5-7 11.5Z M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
      calendar: 'M4.5 6.5h15a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1Z M8 4v4 M16 4v4 M3.5 10.5h17',
      truck: 'M2.5 6h11v10h-11z M13.5 10h4l3 3v3h-7z M6 19.5a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4Z M17 19.5a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4Z',
      menu: 'M3.5 6.5h17 M3.5 12h17 M3.5 17.5h17',
      back: 'M19 12H5 M11 6l-6 6 6 6',
      web: 'M12 20.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Z M3.8 9h16.4 M3.8 15h16.4 M12 3.2c2 2.4 3 5.3 3 8.8s-1 6.4-3 8.8c-2-2.4-3-5.3-3-8.8s1-6.4 3-8.8Z',
      instagram: 'M7 3.5h10a3.5 3.5 0 0 1 3.5 3.5v10a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 17V7A3.5 3.5 0 0 1 7 3.5Z M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z M17 6.2h.01',
      close: 'M6 6l12 12 M18 6 6 18',
      basket: 'M4 10h16l-1.6 9.2a2 2 0 0 1-2 1.8H7.6a2 2 0 0 1-2-1.8L4 10Z M8 10 9.5 4h5L16 10 M9.5 13.5v4 M14.5 13.5v4',
      sparkle: 'M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6Z',
      /* categorías */
      cera: 'M9 21h6 M12 21V9 M9.5 9c0-3 1-5 2.5-7 1.5 2 2.5 4 2.5 7a2.5 2.5 0 0 1-5 0Z',
      pabilo: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z M8 8a4 4 0 0 1 8 0c0 2-4 2-4 5 M12 17h.01',
      fragancia: 'M12 3c1.8 1.6 2.8 3 2.8 4.6A2.8 2.8 0 0 1 12 10.4a2.8 2.8 0 0 1-2.8-2.8C9.2 6 10.2 4.6 12 3Z M6 12c1.8 1.6 2.8 3 2.8 4.6A2.8 2.8 0 0 1 6 19.4a2.8 2.8 0 0 1-2.8-2.8C3.2 15 4.2 13.6 6 12Z M18 12c1.8 1.6 2.8 3 2.8 4.6a2.8 2.8 0 0 1-5.6 0c0-1.6 1-3 2.8-4.6Z',
      colorante: 'M12 20.5c-4.7 0-8.5-3.4-8.5-8A8.5 8 0 0 1 12 4c4.7 0 8.5 2.7 8.5 6.5 0 2-1.5 3-3.2 3h-2a1.6 1.6 0 0 0-1 2.8c.5.4.5 1.2-.1 1.6-.6.4-2.2.6-3.2.6Z M7.5 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z M11 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z M15.5 10.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
      molde: 'M4 8.5 12 4l8 4.5v7L12 20l-8-4.5v-7Z M4 8.5 12 13l8-4.5 M12 13v7',
      recipiente: 'M6 9h12l-1 10.5a2 2 0 0 1-2 1.8H9a2 2 0 0 1-2-1.8L6 9Z M8.5 9V6a3.5 3.5 0 0 1 7 0v3',
      endurecedor: 'M12 20.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Z M12 8v4l3 2',
      otros: 'M4 8l8-4 8 4-8 4-8-4Z M4 8v8l8 4 8-4V8 M12 12v8'
    };
    var path = d[nombre] || d.otros;
    var fill = relleno ? "currentColor" : "none";
    return '<svg class="icono-linea" width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="' + fill + '" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="' + path + '"/></svg>';
  }

  var TITULOS_PANTALLA = {
    buscar: "Buscar",
    favoritos: "Favoritos",
    configuracion: "Configuración"
  };

  /* ---------------- Estado ---------------- */
  var estado = {
    pantalla: "inicio",
    busqueda: "",
    filtroCategoria: "",
    filtroZona: "",
    detalleId: null,
    confirmarAccion: null
  };

  /* ---------------- Utilidades ---------------- */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $all(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  function cargarPerfil() {
    try {
      var raw = localStorage.getItem(LS_KEYS.perfil);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }
  function guardarPerfil(p) {
    try { localStorage.setItem(LS_KEYS.perfil, JSON.stringify(p)); } catch (e) {}
  }
  function cargarFavoritos() {
    try {
      var raw = localStorage.getItem(LS_KEYS.favoritos);
      return raw ? JSON.parse(raw) : [];
    } catch (e) { return []; }
  }
  function guardarFavoritos(arr) {
    try { localStorage.setItem(LS_KEYS.favoritos, JSON.stringify(arr)); } catch (e) {}
  }

  function esFavorito(id) { return cargarFavoritos().indexOf(id) !== -1; }
  function alternarFavorito(id) {
    var favs = cargarFavoritos();
    var idx = favs.indexOf(id);
    if (idx === -1) { favs.push(id); mostrarToast("Guardado en favoritos."); }
    else { favs.splice(idx, 1); mostrarToast("Quitado de favoritos."); }
    guardarFavoritos(favs);
  }

  function formatearPrecio() {
    return "Consultar";
  }

  function formatearFecha(iso) {
    var partes = iso.split("-");
    var meses = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
    return parseInt(partes[2], 10) + " de " + meses[parseInt(partes[1], 10) - 1] + " de " + partes[0];
  }

  function ultimaActualizacionGlobal() {
    var maxFecha = null;
    window.PROVEEDORES.forEach(function (p) {
      if (!maxFecha || p.ultimaActualizacion > maxFecha) maxFecha = p.ultimaActualizacion;
    });
    return maxFecha;
  }

  function categoriaInfo(id) {
    for (var i = 0; i < CATEGORIAS.length; i++) if (CATEGORIAS[i].id === id) return CATEGORIAS[i];
    return { id: id, nombre: id, icono: "otros", color: "#999" };
  }

  /* ---------------- Agrupación por negocio ---------------- */
  // Varios proveedores venden en más de una categoría (ej: Deepa Insumos vende
  // ceras, pabilos, fragancias, etc.) y están cargados como entradas separadas en
  // proveedores.js, una por categoría. Acá las agrupamos para mostrar una sola
  // tarjeta por negocio, con todas sus categorías juntas.
  function agruparEntradas(entradas) {
    var mapa = {};
    var orden = [];
    entradas.forEach(function (p) {
      var key = p.negocio || p.id;
      if (!mapa[key]) {
        mapa[key] = { negocio: key, nombreNegocio: p.nombreNegocio || p.nombre, entradas: [] };
        orden.push(key);
      }
      mapa[key].entradas.push(p);
    });
    return orden.map(function (key) {
      var g = mapa[key];
      var entradas2 = g.entradas;
      var conPrecio = entradas2.filter(function (e) { return e.precio > 0; });
      var principal = conPrecio.length
        ? conPrecio.reduce(function (a, b) { return b.precio < a.precio ? b : a; })
        : entradas2[0];
      var envioNacional = entradas2.some(function (e) { return e.ubicacion === "Envío nacional"; });
      var ubicacionMostrada = envioNacional ? "Envío nacional" : principal.ubicacion;
      var categoriasUnicas = [];
      entradas2.forEach(function (e) { if (categoriasUnicas.indexOf(e.categoria) === -1) categoriasUnicas.push(e.categoria); });
      var maxFecha = entradas2.reduce(function (m, e) { return (!m || e.ultimaActualizacion > m) ? e.ultimaActualizacion : m; }, null);
      return {
        negocio: key,
        nombreNegocio: g.nombreNegocio,
        entradas: entradas2,
        categorias: categoriasUnicas,
        principal: principal,
        precio: principal.precio,
        unidad: principal.unidad,
        ubicacion: ubicacionMostrada,
        envioNacional: envioNacional,
        ultimaActualizacion: maxFecha,
        enlace: principal.enlace,
        notas: principal.notas
      };
    });
  }

  function textoCategoriasGrupo(grupo, max) {
    max = max || 2;
    var nombres = grupo.categorias.map(function (id) { return categoriaInfo(id).nombre; });
    if (nombres.length <= max) return nombres.join(", ");
    return nombres.slice(0, max).join(", ") + " y más";
  }

  function iniciales(nombre) {
    var palabras = nombre.replace(/[().]/g, "").trim().split(/\s+/).filter(Boolean);
    if (palabras.length === 0) return "?";
    if (palabras.length === 1) return palabras[0].slice(0, 2).toUpperCase();
    return (palabras[0][0] + palabras[1][0]).toUpperCase();
  }

  function hexConAlpha(hex, alpha) {
    return hex + alpha;
  }

  var toastTimer = null;
  function mostrarToast(msg) {
    var t = $("#toast");
    t.textContent = msg;
    t.classList.remove("oculto");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.add("oculto"); }, 2200);
  }

  function pedirConfirmacion(texto, alConfirmar) {
    $("#modal-confirmar-texto").textContent = texto;
    estado.confirmarAccion = alConfirmar;
    abrirModal("modal-confirmar");
  }

  function abrirModal(id) { $("#" + id).classList.remove("oculto"); }
  function cerrarModal(id) { $("#" + id).classList.add("oculto"); }

  /* ---------------- Header dinámico ---------------- */
  function logoMarkSvg() {
    return (
      '<svg viewBox="0 0 100 100" width="30" height="30" aria-hidden="true">' +
        '<defs><linearGradient id="velasGradHeader" x1="0%" y1="0%" x2="100%" y2="100%">' +
          '<stop offset="0%" stop-color="#FF6B6B"/><stop offset="100%" stop-color="#2EC4B6"/>' +
        '</linearGradient></defs>' +
        '<circle cx="50" cy="50" r="50" fill="url(#velasGradHeader)"/>' +
        '<rect x="32" y="54" width="36" height="30" rx="6" fill="#FFFFFF"/>' +
        '<path d="M50 60 L54.5 66 C56 68 55 71 52.5 71.5 C51 71.8 50 71 50 71 C50 71 49 71.8 47.5 71.5 C45 71 44 68 45.5 66 Z" fill="#FF6B6B"/>' +
        '<line x1="50" y1="46" x2="50" y2="55" stroke="#3C322D" stroke-width="2"/>' +
        '<path d="M50 20 C44 30 41 36 41 41 C41 46.5 45 50 50 50 C55 50 59 46.5 59 41 C59 36 56 30 50 20Z" fill="#FF9F1C"/>' +
        '<ellipse cx="50" cy="43" rx="4.5" ry="6" fill="#FFC857"/>' +
      '</svg>'
    );
  }

  function renderHeader() {
    var el = $("#app-header");
    if (estado.pantalla === "inicio") {
      el.innerHTML =
        '<button class="btn-icono-header" id="btn-menu" aria-label="Menú">' + icono("menu", 22) + '</button>' +
        '<div class="header-titulo">' + logoMarkSvg() + '<span>Velas</span></div>' +
        '<button class="btn-icono-header" id="btn-header-favoritos" aria-label="Favoritos">' + icono("heart", 22) + '</button>';
    } else if (estado.pantalla === "detalle") {
      var grupo = grupoPorNegocio(estado.detalleId);
      var fav = grupo ? esFavorito(grupo.negocio) : false;
      el.innerHTML =
        '<button class="btn-icono-header" id="btn-volver" aria-label="Volver">' + icono("back", 22) + '</button>' +
        '<div class="header-titulo-texto">' + (grupo ? escapeHtml(grupo.nombreNegocio) : "Proveedor") + '</div>' +
        '<button class="btn-icono-header' + (fav ? ' activo-fav' : '') + '" id="btn-header-fav-detalle" aria-label="Guardar en favoritos">' + icono("heart", 22, fav) + '</button>';
    } else {
      el.innerHTML =
        '<button class="btn-icono-header" id="btn-volver" aria-label="Volver">' + icono("back", 22) + '</button>' +
        '<div class="header-titulo-texto">' + (TITULOS_PANTALLA[estado.pantalla] || "") + '</div>' +
        '<span class="btn-icono-header-spacer"></span>';
    }
    ligarEventosHeader();
  }

  function ligarEventosHeader() {
    var btnMenu = $("#btn-menu");
    if (btnMenu) btnMenu.addEventListener("click", function () { irAPantalla("configuracion"); });

    var btnHeaderFav = $("#btn-header-favoritos");
    if (btnHeaderFav) btnHeaderFav.addEventListener("click", function () { irAPantalla("favoritos"); });

    var btnVolver = $("#btn-volver");
    if (btnVolver) btnVolver.addEventListener("click", function () { irAPantalla("inicio"); });

    var btnFavDetalle = $("#btn-header-fav-detalle");
    if (btnFavDetalle) btnFavDetalle.addEventListener("click", function () {
      alternarFavorito(estado.detalleId);
      renderHeader();
      renderPantalla();
    });
  }

  /* ---------------- Navegación inferior ---------------- */
  function renderNav() {
    var items = [
      { pantalla: "inicio", nombre: "inicio", icono: "home", label: "Inicio" },
      { pantalla: "buscar", nombre: "buscar", icono: "search", label: "Buscar" },
      { pantalla: "favoritos", nombre: "favoritos", icono: "heart", label: "Favoritos" },
      { pantalla: "configuracion", nombre: "configuracion", icono: "gear", label: "Ajustes" }
    ];
    $("#nav-inferior").innerHTML = items.map(function (it) {
      var activo = estado.pantalla === it.pantalla;
      return '<button class="nav-item' + (activo ? ' activo' : '') + '" data-pantalla="' + it.pantalla + '" aria-label="' + it.label + '">' +
        '<span class="nav-icono">' + icono(it.icono, 22, activo && it.icono === "heart") + '</span>' +
        '<span class="nav-texto">' + it.label + '</span>' +
        '</button>';
    }).join("");
    $all(".nav-item").forEach(function (btn) {
      btn.addEventListener("click", function () { irAPantalla(btn.dataset.pantalla); });
    });
  }

  /* ---------------- Render: navegación ---------------- */
  function irAPantalla(nombre) {
    estado.pantalla = nombre;
    renderNav();
    renderHeader();
    renderPantalla();
    $("#contenido-principal").scrollTop = 0;
    window.scrollTo(0, 0);
  }

  function irADetalle(id) {
    estado.detalleId = id;
    estado.pantalla = "detalle";
    renderNav();
    renderHeader();
    renderPantalla();
    window.scrollTo(0, 0);
  }

  function renderPantalla() {
    var el = $("#contenido-principal");
    if (estado.pantalla === "inicio") el.innerHTML = vistaInicio();
    else if (estado.pantalla === "buscar") el.innerHTML = vistaBuscar();
    else if (estado.pantalla === "favoritos") el.innerHTML = vistaFavoritos();
    else if (estado.pantalla === "configuracion") el.innerHTML = vistaConfiguracion();
    else if (estado.pantalla === "detalle") el.innerHTML = vistaDetalle();
    ligarEventosPantalla();
  }

  /* ---------------- Vista: Inicio ---------------- */
  function vistaInicio() {
    var perfil = cargarPerfil() || { nombre: "" };

    var catsHtml = CATEGORIAS.map(function (c) {
      return '<button class="cat-circulo-item" data-ir-categoria="' + c.id + '">' +
        '<span class="cat-circulo" style="background:' + hexConAlpha(c.color, "26") + '">' +
          '<span class="cat-circulo-emoji">' + icono(c.icono, 24) + '</span>' +
        '</span>' +
        '<span class="cat-circulo-label">' + c.nombre + '</span>' +
        '</button>';
    }).join("");

    var todosLosGrupos = agruparEntradas(window.PROVEEDORES);
    var destacadosKeys = ["deepa", "aupar", "tia-robertina"];
    var destacados = destacadosKeys
      .map(function (key) { return todosLosGrupos.filter(function (g) { return g.negocio === key; })[0]; })
      .filter(Boolean);
    if (destacados.length < 3) destacados = todosLosGrupos.slice(0, 3);
    var destacadosHtml = destacados.map(tarjetaMiniHtml).join("");

    return (
      '<div class="saludo">¡Hola' + (perfil.nombre ? ", " + escapeHtml(perfil.nombre) : "") + '! 👋</div>' +
      '<p class="frase-inicio">¿Qué insumo estás buscando hoy?</p>' +
      '<div class="buscador-wrap">' +
        '<input type="text" id="input-busqueda-inicio" placeholder="¿Qué insumo estás buscando?">' +
        '<button class="btn-buscar-icono" id="btn-buscar-inicio" aria-label="Buscar">' + icono("search", 20) + '</button>' +
      '</div>' +
      '<div class="categorias-grid-circ">' + catsHtml + '</div>' +
      '<div class="destacados-header">' +
        '<h3>Proveedores destacados</h3>' +
        '<button class="link-ver-todos" id="btn-ver-todos-destacados">Ver todos</button>' +
      '</div>' +
      '<div class="destacados-scroll">' + destacadosHtml + '</div>' +
      '<div class="actualizacion-card">' +
        '<span class="actualizacion-icono">' + icono("cera", 26) + '</span>' +
        '<div><div class="actualizacion-titulo">Última actualización</div>' +
        '<div class="actualizacion-fecha">' + formatearFecha(ultimaActualizacionGlobal()) + '</div></div>' +
      '</div>'
    );
  }

  function tarjetaMiniHtml(grupo) {
    var cat = categoriaInfo(grupo.categorias[0]);
    return (
      '<button class="mini-card" data-ver-detalle="' + grupo.negocio + '">' +
        '<span class="mini-avatar" style="background:' + hexConAlpha(cat.color, "26") + ';color:' + cat.color + '">' + iniciales(grupo.nombreNegocio) + '</span>' +
        '<span class="mini-nombre">' + escapeHtml(grupo.nombreNegocio) + '</span>' +
        '<span class="mini-cat">' + textoCategoriasGrupo(grupo, 2) + '</span>' +
        '<span class="mini-precio">' + formatearPrecio() + '</span>' +
      '</button>'
    );
  }

  /* ---------------- Vista: Buscar ---------------- */
  function proveedoresFiltrados() {
    var texto = estado.busqueda.trim().toLowerCase();
    var entradas = window.PROVEEDORES.filter(function (p) {
      if (texto && p.nombre.toLowerCase().indexOf(texto) === -1 && p.categoria.toLowerCase().indexOf(texto) === -1) return false;
      if (estado.filtroCategoria && p.categoria !== estado.filtroCategoria) return false;
      if (estado.filtroZona && p.ubicacion !== estado.filtroZona) return false;
      return true;
    });
    var grupos = agruparEntradas(entradas);
    return grupos;
  }

  function selectPillHtml(id, opciones, valorActual, placeholder) {
    var opts = '<option value="">' + placeholder + '</option>' +
      opciones.map(function (o) {
        var val = typeof o === "string" ? o : o.value;
        var label = typeof o === "string" ? o : o.label;
        return '<option value="' + val + '"' + (val === valorActual ? " selected" : "") + '>' + label + '</option>';
      }).join("");
    return '<select class="pill-select" id="' + id + '">' + opts + '</select>';
  }

  function vistaBuscar() {
    var lista = proveedoresFiltrados();

    var catOpciones = CATEGORIAS.map(function (c) { return { value: c.id, label: c.nombre }; });
    var zonaOpciones = ZONAS.map(function (z) {
      return { value: z, label: z === "Interior" ? "Interior de País" : z };
    });

    var listaHtml;
    if (lista.length === 0) {
      listaHtml = '<div class="estado-vacio">' +
        '<div class="estado-vacio-icono">' + icono("search", 32) + '</div>' +
        '<p>No encontramos proveedores con ese filtro. Probá con otra categoría o búsqueda.</p>' +
        '</div>';
    } else {
      listaHtml = lista.map(tarjetaProveedorHtml).join("");
    }

    return (
      '<div class="buscador-wrap">' +
        '<input type="text" id="input-busqueda" placeholder="¿Qué insumo estás buscando?" value="' + escapeHtml(estado.busqueda) + '">' +
        '<button class="btn-buscar-icono" id="btn-buscar-icono" aria-label="Buscar">' + icono("search", 20) + '</button>' +
      '</div>' +
      '<div class="pills-row">' +
        selectPillHtml("select-categoria", catOpciones, estado.filtroCategoria, "Categoría") +
        selectPillHtml("select-zona", zonaOpciones, estado.filtroZona, "Zona") +
      '</div>' +
      '<div class="barra-resultados">' +
        '<span>' + lista.length + ' proveedor' + (lista.length === 1 ? '' : 'es') + ' encontrado' + (lista.length === 1 ? '' : 's') + '</span>' +
      '</div>' +
      listaHtml
    );
  }

  function tarjetaProveedorHtml(grupo) {
    var cat = categoriaInfo(grupo.categorias[0]);
    var fav = esFavorito(grupo.negocio);
    return (
      '<div class="proveedor-card" data-ver-detalle="' + grupo.negocio + '">' +
        '<span class="proveedor-avatar" style="background:' + hexConAlpha(cat.color, "26") + ';color:' + cat.color + '">' + iniciales(grupo.nombreNegocio) + '</span>' +
        '<div class="proveedor-info">' +
          '<div class="proveedor-top">' +
            '<div>' +
              '<div class="proveedor-nombre">' + escapeHtml(grupo.nombreNegocio) + '</div>' +
              '<div class="proveedor-cat">' + textoCategoriasGrupo(grupo, 3) + '</div>' +
            '</div>' +
            '<button class="btn-favorito-card' + (fav ? ' activo' : '') + '" data-fav="' + grupo.negocio + '" aria-label="Guardar en favoritos">' + icono("heart", 20, fav) + '</button>' +
          '</div>' +
          '<div class="proveedor-ubi-row">' +
            '<span class="proveedor-ubi">' + icono("pin", 14) + ' ' + grupo.ubicacion + '</span>' +
            (grupo.envioNacional ? '<span class="envio-nacional-badge">' + icono("truck", 13) + ' Envío a todo el país</span>' : '') +
          '</div>' +
          '<div class="proveedor-bottom">' +
            '<span class="proveedor-precio">' + formatearPrecio() + '</span>' +
            '<a class="btn-carrito" href="' + grupo.enlace + '" target="_blank" rel="noopener" aria-label="Ver tienda de ' + escapeHtml(grupo.nombreNegocio) + '" data-stop-propagation="1">' + icono("cart", 18) + '</a>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

  /* ---------------- Vista: Detalle de proveedor ---------------- */
  function grupoPorNegocio(key) {
    var entradas = window.PROVEEDORES.filter(function (p) { return (p.negocio || p.id) === key; });
    if (entradas.length === 0) return null;
    return agruparEntradas(entradas)[0];
  }

  function vistaDetalle() {
    var grupo = grupoPorNegocio(estado.detalleId);
    if (!grupo) return '<div class="estado-vacio"><p>No encontramos este proveedor.</p></div>';
    var catPrincipal = categoriaInfo(grupo.categorias[0]);
    var esInstagram = grupo.enlace.indexOf("instagram.com") !== -1;
    var handleInstagram = esInstagram ? grupo.enlace.replace(/\/$/, "").split("/").pop() : null;

    var ofreceHtml = grupo.entradas.map(function (e) {
      var cat = categoriaInfo(e.categoria);
      return (
        '<a class="detalle-oferta-fila" href="' + e.enlace + '" target="_blank" rel="noopener">' +
          '<span class="detalle-oferta-cat"><span class="detalle-oferta-icono">' + icono(cat.icono, 18) + '</span> ' + cat.nombre + '</span>' +
          '<span class="detalle-oferta-precio">' + formatearPrecio() + '</span>' +
        '</a>'
      );
    }).join("");

    var notasUnicas = [];
    grupo.entradas.forEach(function (e) {
      if (e.notas && notasUnicas.indexOf(e.notas) === -1) notasUnicas.push(e.notas);
    });

    return (
      '<div class="detalle-card">' +
        '<span class="proveedor-avatar proveedor-avatar-grande" style="background:' + hexConAlpha(catPrincipal.color, "26") + ';color:' + catPrincipal.color + '">' + iniciales(grupo.nombreNegocio) + '</span>' +
        '<div class="detalle-nombre">' + escapeHtml(grupo.nombreNegocio) + '</div>' +
        '<div class="detalle-cat">' + textoCategoriasGrupo(grupo, 4) + '</div>' +
        '<div class="proveedor-ubi-row detalle-ubi-row">' +
          '<span class="proveedor-ubi">' + icono("pin", 14) + ' ' + grupo.ubicacion + '</span>' +
          (grupo.envioNacional ? '<span class="envio-nacional-badge">' + icono("truck", 13) + ' Envío a todo el país</span>' : '') +
        '</div>' +
      '</div>' +
      '<div class="detalle-seccion">' +
        '<h3>Lo que ofrece</h3>' +
        '<div class="detalle-oferta-lista">' + ofreceHtml + '</div>' +
      '</div>' +
      (notasUnicas.length ? '<div class="detalle-seccion"><h3>Sobre el proveedor</h3>' + notasUnicas.map(function (n) { return '<p>' + escapeHtml(n) + '</p>'; }).join("") + '</div>' : '') +
      '<div class="detalle-seccion">' +
        '<h3>Contacto</h3>' +
        '<a class="detalle-fila" href="' + grupo.enlace + '" target="_blank" rel="noopener">' +
          '<span>' + (esInstagram ? icono("instagram", 20) : icono("web", 20)) + '</span>' +
          '<span>' + (esInstagram ? "Instagram" : "Sitio web") + '<br><small>' + (esInstagram ? "@" + escapeHtml(handleInstagram) : escapeHtml(grupo.enlace.replace(/^https?:\/\//, ""))) + '</small></span>' +
        '</a>' +
      '</div>' +
      '<div class="detalle-seccion"><p class="proveedor-fecha">Actualizado: ' + formatearFecha(grupo.ultimaActualizacion) + '</p></div>' +
      '<a class="btn-principal ancho-completo btn-visitar-tienda" href="' + grupo.enlace + '" target="_blank" rel="noopener">Visitar tienda</a>'
    );
  }

  /* ---------------- Vista: Favoritos ---------------- */
  function vistaFavoritos() {
    var favs = cargarFavoritos();
    var grupos = agruparEntradas(window.PROVEEDORES).filter(function (g) { return favs.indexOf(g.negocio) !== -1; });
    if (grupos.length === 0) {
      return '<div class="estado-vacio estado-vacio-favoritos">' +
        '<div class="estado-vacio-icono-grande">' + icono("basket", 56) + '<span class="chispa chispa-1">' + icono("sparkle", 16) + '</span><span class="chispa chispa-2">' + icono("sparkle", 11) + '</span></div>' +
        '<h3>Aún no tienes favoritos</h3>' +
        '<p>Guardá tus proveedores favoritos para encontrarlos más rápido.</p>' +
        '<button class="btn-secundario-turquesa" id="btn-ir-buscar">Explorar proveedores</button>' +
      '</div>';
    }
    return grupos.map(tarjetaProveedorHtml).join("");
  }

  /* ---------------- Vista: Configuración ---------------- */
  function vistaConfiguracion() {
    var perfil = cargarPerfil() || { nombre: "" };
    return (
      '<div class="config-seccion">' +
        '<h3>Tu perfil</h3>' +
        '<label class="campo">' +
          '<span>Tu nombre</span>' +
          '<input type="text" id="config-nombre-usuario" value="' + escapeHtml(perfil.nombre || "") + '">' +
        '</label>' +
        '<button class="btn-principal ancho-completo" id="btn-guardar-config">Guardar cambios</button>' +
      '</div>' +
      '<div class="config-seccion">' +
        '<h3>Datos</h3>' +
        '<button class="btn-peligro ancho-completo" id="btn-borrar-favoritos">Borrar todos los favoritos</button>' +
      '</div>' +
      '<p class="texto-legal">VELAS es una guía informativa de proveedores. No participamos en las transacciones ni garantizamos precios, stock o calidad de los productos de terceros.</p>'
    );
  }

  /* ---------------- Helpers texto ---------------- */
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------------- Eventos por pantalla ---------------- */
  function ligarEventosPantalla() {
    $all("[data-ir-categoria]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        estado.filtroCategoria = btn.dataset.irCategoria;
        estado.filtroZona = "";
        estado.busqueda = "";
        irAPantalla("buscar");
      });
    });

    $all("[data-ver-detalle]").forEach(function (el) {
      el.addEventListener("click", function (e) {
        if (e.target.closest("[data-stop-propagation]") || e.target.closest("[data-fav]")) return;
        irADetalle(el.dataset.verDetalle);
      });
    });

    var btnVerTodos = $("#btn-ver-todos-destacados");
    if (btnVerTodos) btnVerTodos.addEventListener("click", function () {
      estado.filtroCategoria = ""; estado.filtroZona = ""; estado.busqueda = "";
      irAPantalla("buscar");
    });

    var inputBusqInicio = $("#input-busqueda-inicio");
    var btnBuscarInicio = $("#btn-buscar-inicio");
    function irABuscarConTexto() {
      estado.busqueda = inputBusqInicio ? inputBusqInicio.value : "";
      irAPantalla("buscar");
    }
    if (btnBuscarInicio) btnBuscarInicio.addEventListener("click", irABuscarConTexto);
    if (inputBusqInicio) inputBusqInicio.addEventListener("keydown", function (e) {
      if (e.key === "Enter") irABuscarConTexto();
    });

    var inputBusq = $("#input-busqueda");
    if (inputBusq) {
      inputBusq.addEventListener("input", function (e) {
        estado.busqueda = e.target.value;
        renderPantalla();
        var el = $("#input-busqueda");
        if (el) { el.focus(); el.selectionStart = el.selectionEnd = el.value.length; }
      });
    }

    var selectCategoria = $("#select-categoria");
    if (selectCategoria) selectCategoria.addEventListener("change", function (e) {
      estado.filtroCategoria = e.target.value;
      renderPantalla();
    });
    var selectZona = $("#select-zona");
    if (selectZona) selectZona.addEventListener("change", function (e) {
      estado.filtroZona = e.target.value;
      renderPantalla();
    });

    $all("[data-fav]").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        alternarFavorito(btn.dataset.fav);
        renderPantalla();
      });
    });

    var btnIrBuscar = $("#btn-ir-buscar");
    if (btnIrBuscar) btnIrBuscar.addEventListener("click", function () { irAPantalla("buscar"); });

    var btnGuardarConfig = $("#btn-guardar-config");
    if (btnGuardarConfig) btnGuardarConfig.addEventListener("click", function () {
      var nombre = $("#config-nombre-usuario").value.trim();
      guardarPerfil({ nombre: nombre });
      mostrarToast("Datos guardados.");
      renderPantalla();
    });
    var btnBorrarFavoritos = $("#btn-borrar-favoritos");
    if (btnBorrarFavoritos) btnBorrarFavoritos.addEventListener("click", function () {
      pedirConfirmacion("Esta acción eliminará todos tus favoritos guardados y no podrá deshacerse.", function () {
        guardarFavoritos([]);
        mostrarToast("Favoritos eliminados.");
        renderPantalla();
      });
    });
  }

  /* ---------------- Eventos globales ---------------- */
  function ligarEventosGlobales() {
    $all("[data-close]").forEach(function (btn) {
      btn.addEventListener("click", function () { cerrarModal(btn.dataset.close); });
    });

    $("#btn-confirmar-cancelar").addEventListener("click", function () {
      estado.confirmarAccion = null;
      cerrarModal("modal-confirmar");
    });
    $("#btn-confirmar-aceptar").addEventListener("click", function () {
      var accion = estado.confirmarAccion;
      cerrarModal("modal-confirmar");
      if (accion) accion();
    });

    $("#btn-comenzar").addEventListener("click", function () {
      var nombre = $("#input-nombre-usuario").value.trim();
      guardarPerfil({ nombre: nombre });
      $("#pantalla-bienvenida").classList.add("oculto");
      $("#app").classList.remove("oculto");
      renderNav();
      renderHeader();
      renderPantalla();
    });
  }

  /* ---------------- Arranque ---------------- */
  function iniciar() {
    ligarEventosGlobales();
    var perfil = cargarPerfil();
    if (perfil) {
      $("#pantalla-bienvenida").classList.add("oculto");
      $("#app").classList.remove("oculto");
      renderNav();
      renderHeader();
      renderPantalla();
    } else {
      $("#pantalla-bienvenida").classList.remove("oculto");
    }

    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("./service-worker.js").catch(function () {});
      });
    }
  }

  document.addEventListener("DOMContentLoaded", iniciar);
})();
