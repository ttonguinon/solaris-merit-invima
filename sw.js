/* Solaris Merit · service worker
   Estrategia: red primero y caché de respaldo, para que el banco de preguntas
   siempre se intente leer actualizado pero la app funcione sin internet. */
const CACHE = "solaris-merit-v1";
const BASICOS = ["./", "./index.html", "./banco-preguntas.xlsx", "./manifest.webmanifest",
  "./marca/icon-192.png", "./marca/icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(BASICOS)).then(() => self.skipWaiting()).catch(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  e.respondWith(
    fetch(req).then(res => {
      if (res && res.ok && new URL(req.url).origin === location.origin) {
        const copia = res.clone(); caches.open(CACHE).then(c => c.put(req, copia));
      }
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match("./index.html")))
  );
});
