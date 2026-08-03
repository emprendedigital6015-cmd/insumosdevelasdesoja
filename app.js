(function () {
  "use strict";

  /* ---------------- Constantes ---------------- */
  var CATEGORIAS = [
    { id: "ceras", nombre: "Ceras", color: "#C6A46A" },
    { id: "pabilos", nombre: "Pabilos", color: "#355D4B" },
    { id: "fragancias", nombre: "Fragancias", color: "#8C6B3F" },
    { id: "colorantes", nombre: "Colorantes", color: "#4A7A68" },
    { id: "moldes", nombre: "Moldes", color: "#A78B5F" },
    { id: "recipientes", nombre: "Recipientes", color: "#2D4A3D" },
    { id: "endurecedores", nombre: "Endurecedores", color: "#3A3A3A" },
    { id: "otros", nombre: "Otros", color: "#B9A892" }
  ];
  var ZONAS = ["Envío nacional", "CABA", "GBA", "Interior"];

  var LS_KEYS = {
    perfil: "insumovela_perfil",
    favoritos: "insumovela_favoritos"
  };

  /* ---------------- Estado ---------------- */
  var estado = {
    pantalla: "inicio",
    busqueda: "",
    filtros: { categorias: [], precioMin: null, precioMax: null, zona: "" },
    filtrosBorrador: null,
    orden: "none", // "none" | "asc"
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

  function formatearPrecio(n) {
    try {
      return n.toLocaleString("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 });
    } catch (e) { return "$" + n; }
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
    return { id: id, nombre: id, color: "#999" };
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

  /* ---------------- Render: navegación ---------------- */
  function irAPantalla(nombre) {
    estado.pantalla = nombre;
    $all(".nav-item").forEach(function (btn) {
      btn.classList.toggle("activo", btn.dataset.pantalla === nombre);
    });
    renderPantalla();
    $("#contenido-principal").scrollTop = 0;
    window.scrollTo(0, 0);
  }

  function renderPantalla() {
    var el = $("#contenido-principal");
    if (estado.pantalla === "inicio") el.innerHTML = vistaInicio();
    else if (estado.pantalla === "buscar") el.innerHTML = vistaBuscar();
    else if (estado.pantalla === "favoritos") el.innerHTML = vistaFavoritos();
    else if (estado.pantalla === "tips") el.innerHTML = vistaTips();
    ligarEventosPantalla();
  }

  /* ---------------- Vista: Inicio ---------------- */
  function vistaInicio() {
    var perfil = cargarPerfil() || { nombre: "" };
    var hoy = new Date();
    var fechaTexto = hoy.toLocaleDateString("es-AR", { weekday: "long", day: "numeric", month: "long" });
    var favs = cargarFavoritos();

    var catsHtml = CATEGORIAS.slice(0, 4).map(function (c) {
      return '<button class="categoria-card" data-ir-categoria="' + c.id + '">' +
        '<span class="categoria-dot" style="background:' + c.color + '"></span>' +
        '<span class="categoria-nombre">' + c.nombre + '</span>' +
        '</button>';
    }).join("");

    var recientesHtml = "";
    if (favs.length > 0) {
      var favsData = window.PROVEEDORES.filter(function (p) { return favs.indexOf(p.id) !== -1; }).slice(0, 3);
      recientesHtml = '<div class="fav-recientes-titulo">Tus favoritos recientes</div>' +
        favsData.map(tarjetaProveedorHtml).join("");
    }

    return (
      '<div class="saludo">Hola' + (perfil.nombre ? ", " + escapeHtml(perfil.nombre) : "") + '</div>' +
      '<div class="fecha-hoy">' + capitalizar(fechaTexto) + '</div>' +
      '<p class="frase-inicio">Así viene la rutina de tus compras hoy.</p>' +
      '<div class="categorias-grid">' + catsHtml + '</div>' +
      '<div class="actualizado-nota">Listado actualizado el ' + formatearFecha(ultimaActualizacionGlobal()) + '.</div>' +
      recientesHtml
    );
  }

  /* ---------------- Vista: Buscar ---------------- */
  function filtrosActivosCount() {
    var f = estado.filtros;
    var n = 0;
    if (f.categorias.length) n += 1;
    if (f.precioMin != null || f.precioMax != null) n += 1;
    if (f.zona) n += 1;
    return n;
  }

  function proveedoresFiltrados() {
    var f = estado.filtros;
    var texto = estado.busqueda.trim().toLowerCase();
    var lista = window.PROVEEDORES.filter(function (p) {
      if (texto && p.nombre.toLowerCase().indexOf(texto) === -1 && p.categoria.toLowerCase().indexOf(texto) === -1) return false;
      if (f.categorias.length && f.categorias.indexOf(p.categoria) === -1) return false;
      if (f.precioMin != null && p.precio < f.precioMin) return false;
      if (f.precioMax != null && p.precio > f.precioMax) return false;
      if (f.zona && p.ubicacion !== f.zona) return false;
      return true;
    });
    if (estado.orden === "asc") lista = lista.slice().sort(function (a, b) { return a.precio - b.precio; });
    return lista;
  }

  function chipsRemoviblesHtml() {
    var f = estado.filtros;
    var chips = [];
    f.categorias.forEach(function (c) {
      chips.push('<button class="chip-removible" data-quitar-cat="' + c + '">' + categoriaInfo(c).nombre + ' ✕</button>');
    });
    if (f.precioMin != null || f.precioMax != null) {
      chips.push('<button class="chip-removible" data-quitar="precio">$' + (f.precioMin || 0) + '–$' + (f.precioMax || "∞") + ' ✕</button>');
    }
    if (f.zona) {
      chips.push('<button class="chip-removible" data-quitar="zona">' + f.zona + ' ✕</button>');
    }
    return chips.join("");
  }

  function vistaBuscar() {
    var lista = proveedoresFiltrados();
    var count = filtrosActivosCount();

    var listaHtml;
    if (lista.length === 0) {
      listaHtml = '<div class="estado-vacio">' +
        '<div class="estado-vacio-icono">🔎</div>' +
        '<p>No encontramos proveedores con ese filtro. Probá con otra categoría o búsqueda.</p>' +
        '</div>';
    } else {
      listaHtml = lista.map(tarjetaProveedorHtml).join("");
    }

    return (
      '<div class="buscador-wrap">' +
        '<input type="text" id="input-busqueda" placeholder="Buscar proveedor o insumo" value="' + escapeHtml(estado.busqueda) + '">' +
        '<button class="btn-filtros" id="btn-abrir-filtros">Filtros' + (count ? '<span class="badge-filtros">' + count + '</span>' : '') + '</button>' +
      '</div>' +
      (count ? '<div class="chips-row">' + chipsRemoviblesHtml() + '</div>' : '') +
      '<div class="barra-resultados">' +
        '<span>' + lista.length + ' resultado' + (lista.length === 1 ? '' : 's') + '</span>' +
        '<button class="link-orden" id="btn-ordenar">' + (estado.orden === "asc" ? "✓ Menor precio" : "Ordenar por precio") + '</button>' +
      '</div>' +
      listaHtml
    );
  }

  function tarjetaProveedorHtml(p) {
    var cat = categoriaInfo(p.categoria);
    var fav = esFavorito(p.id);
    return (
      '<div class="proveedor-card">' +
        '<div class="proveedor-dot" style="background:' + cat.color + '"></div>' +
        '<div class="proveedor-info">' +
          '<div class="proveedor-top">' +
            '<div>' +
              '<div class="proveedor-nombre">' + escapeHtml(p.nombre) + '</div>' +
              '<div class="proveedor-cat">' + cat.nombre + '</div>' +
            '</div>' +
            '<div class="proveedor-precio">' + formatearPrecio(p.precio) + '<div class="proveedor-unidad">' + p.unidad + '</div></div>' +
          '</div>' +
          '<div class="proveedor-ubi">📍 ' + p.ubicacion + '</div>' +
          (p.notas ? '<div class="proveedor-notas">' + escapeHtml(p.notas) + '</div>' : '') +
          '<div class="proveedor-acciones">' +
            '<a class="btn-ver" href="' + p.enlace + '" target="_blank" rel="noopener">Ver proveedor</a>' +
            '<button class="btn-favorito' + (fav ? ' activo' : '') + '" data-fav="' + p.id + '" aria-label="Guardar en favoritos">' + (fav ? '♥' : '♡') + '</button>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

  /* ---------------- Vista: Favoritos ---------------- */
  function vistaFavoritos() {
    var favs = cargarFavoritos();
    var lista = window.PROVEEDORES.filter(function (p) { return favs.indexOf(p.id) !== -1; });
    if (lista.length === 0) {
      return '<div class="estado-vacio">' +
        '<div class="estado-vacio-icono">♡</div>' +
        '<p>Todavía no guardaste proveedores favoritos. Tocá el corazón en cualquier proveedor para guardarlo acá.</p>' +
        '<button class="btn-principal" id="btn-ir-buscar">Buscar proveedores</button>' +
      '</div>';
    }
    return lista.map(tarjetaProveedorHtml).join("");
  }

  /* ---------------- Vista: Tips ---------------- */
  function vistaTips() {
    var grupos = [];
    window.TIPS.forEach(function (t) {
      if (grupos.indexOf(t.grupo) === -1) grupos.push(t.grupo);
    });
    var html = '<p class="frase-inicio">Consejos prácticos para ahorrar en tus insumos.</p>';
    grupos.forEach(function (g) {
      html += '<div class="tips-grupo-titulo">' + g + '</div>';
      window.TIPS.filter(function (t) { return t.grupo === g; }).forEach(function (t) {
        html += '<div class="tip-card"><h3>' + escapeHtml(t.titulo) + '</h3><p>' + escapeHtml(t.texto) + '</p></div>';
      });
    });
    return html;
  }

  /* ---------------- Modal de filtros ---------------- */
  function abrirFiltros() {
    estado.filtrosBorrador = JSON.parse(JSON.stringify(estado.filtros));
    renderModalFiltros();
    abrirModal("modal-filtros");
  }

  function renderModalFiltros() {
    var fb = estado.filtrosBorrador;
    var catsHtml = CATEGORIAS.map(function (c) {
      var activo = fb.categorias.indexOf(c.id) !== -1;
      return '<button class="chip' + (activo ? ' activo' : '') + '" data-toggle-cat="' + c.id + '">' + c.nombre + '</button>';
    }).join("");
    var zonasHtml = ZONAS.map(function (z) {
      var activo = fb.zona === z;
      return '<button class="chip' + (activo ? ' activo' : '') + '" data-toggle-zona="' + z + '">' + z + '</button>';
    }).join("");

    $("#modal-filtros-body").innerHTML =
      '<div class="filtro-grupo">' +
        '<h3>Categoría</h3>' +
        '<div class="chips-multi">' + catsHtml + '</div>' +
      '</div>' +
      '<div class="filtro-grupo">' +
        '<h3>Rango de precio</h3>' +
        '<div class="rango-precio">' +
          '<input type="number" inputmode="numeric" id="filtro-precio-min" placeholder="Mínimo" value="' + (fb.precioMin != null ? fb.precioMin : "") + '">' +
          '<input type="number" inputmode="numeric" id="filtro-precio-max" placeholder="Máximo" value="' + (fb.precioMax != null ? fb.precioMax : "") + '">' +
        '</div>' +
      '</div>' +
      '<div class="filtro-grupo">' +
        '<h3>Ubicación / zona</h3>' +
        '<div class="chips-multi">' + zonasHtml + '</div>' +
      '</div>';

    $all("[data-toggle-cat]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var id = btn.dataset.toggleCat;
        var idx = fb.categorias.indexOf(id);
        if (idx === -1) fb.categorias.push(id); else fb.categorias.splice(idx, 1);
        renderModalFiltros();
      });
    });
    $all("[data-toggle-zona]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var z = btn.dataset.toggleZona;
        fb.zona = fb.zona === z ? "" : z;
        renderModalFiltros();
      });
    });
    $("#filtro-precio-min").addEventListener("input", function (e) {
      fb.precioMin = e.target.value === "" ? null : Number(e.target.value);
    });
    $("#filtro-precio-max").addEventListener("input", function (e) {
      fb.precioMax = e.target.value === "" ? null : Number(e.target.value);
    });
  }

  /* ---------------- Helpers texto ---------------- */
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function capitalizar(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  /* ---------------- Eventos por pantalla ---------------- */
  function ligarEventosPantalla() {
    $all("[data-ir-categoria]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        estado.filtros = { categorias: [btn.dataset.irCategoria], precioMin: null, precioMax: null, zona: "" };
        irAPantalla("buscar");
      });
    });

    var inputBusq = $("#input-busqueda");
    if (inputBusq) {
      inputBusq.addEventListener("input", function (e) {
        estado.busqueda = e.target.value;
        renderPantalla();
        // restaurar foco y cursor
        var el = $("#input-busqueda");
        if (el) { el.focus(); el.selectionStart = el.selectionEnd = el.value.length; }
      });
    }

    var btnFiltros = $("#btn-abrir-filtros");
    if (btnFiltros) btnFiltros.addEventListener("click", abrirFiltros);

    var btnOrdenar = $("#btn-ordenar");
    if (btnOrdenar) btnOrdenar.addEventListener("click", function () {
      estado.orden = estado.orden === "asc" ? "none" : "asc";
      renderPantalla();
    });

    $all("[data-quitar-cat]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var id = btn.dataset.quitarCat;
        estado.filtros.categorias = estado.filtros.categorias.filter(function (c) { return c !== id; });
        renderPantalla();
      });
    });
    var quitarPrecio = $("[data-quitar='precio']");
    if (quitarPrecio) quitarPrecio.addEventListener("click", function () {
      estado.filtros.precioMin = null; estado.filtros.precioMax = null;
      renderPantalla();
    });
    var quitarZona = $("[data-quitar='zona']");
    if (quitarZona) quitarZona.addEventListener("click", function () {
      estado.filtros.zona = "";
      renderPantalla();
    });

    $all("[data-fav]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        alternarFavorito(btn.dataset.fav);
        renderPantalla();
      });
    });

    var btnIrBuscar = $("#btn-ir-buscar");
    if (btnIrBuscar) btnIrBuscar.addEventListener("click", function () { irAPantalla("buscar"); });
  }

  /* ---------------- Eventos globales ---------------- */
  function ligarEventosGlobales() {
    $all(".nav-item").forEach(function (btn) {
      btn.addEventListener("click", function () { irAPantalla(btn.dataset.pantalla); });
    });

    $all("[data-close]").forEach(function (btn) {
      btn.addEventListener("click", function () { cerrarModal(btn.dataset.close); });
    });

    $("#btn-limpiar-filtros").addEventListener("click", function () {
      estado.filtrosBorrador = { categorias: [], precioMin: null, precioMax: null, zona: "" };
      renderModalFiltros();
    });
    $("#btn-aplicar-filtros").addEventListener("click", function () {
      estado.filtros = estado.filtrosBorrador;
      cerrarModal("modal-filtros");
      renderPantalla();
    });

    $("#btn-abrir-config").addEventListener("click", function () {
      var perfil = cargarPerfil() || { nombre: "" };
      $("#config-nombre-usuario").value = perfil.nombre || "";
      abrirModal("modal-config");
    });
    $("#btn-guardar-config").addEventListener("click", function () {
      var nombre = $("#config-nombre-usuario").value.trim();
      guardarPerfil({ nombre: nombre });
      cerrarModal("modal-config");
      mostrarToast("Datos guardados.");
      renderPantalla();
    });
    $("#btn-borrar-favoritos").addEventListener("click", function () {
      pedirConfirmacion("Esta acción eliminará todos tus favoritos guardados y no podrá deshacerse.", function () {
        guardarFavoritos([]);
        cerrarModal("modal-config");
        mostrarToast("Favoritos eliminados.");
        renderPantalla();
      });
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
