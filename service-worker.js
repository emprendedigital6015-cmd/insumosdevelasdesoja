var CACHE_NAME = "insumovela-cache-v1";
var ARCHIVOS_ESENCIALES = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./proveedores.js",
  "./tips.js",
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png",
  "./favicon-32.png"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(ARCHIVOS_ESENCIALES);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (nombres) {
      return Promise.all(
        nombres.filter(function (n) { return n !== CACHE_NAME; }).map(function (n) { return caches.delete(n); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", function (event) {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then(function (respuestaCache) {
      var fetchPromise = fetch(event.request)
        .then(function (respuestaRed) {
          if (respuestaRed && respuestaRed.status === 200) {
            var copia = respuestaRed.clone();
            caches.open(CACHE_NAME).then(function (cache) { cache.put(event.request, copia); });
          }
          return respuestaRed;
        })
        .catch(function () { return respuestaCache; });
      return respuestaCache || fetchPromise;
    })
  );
});
