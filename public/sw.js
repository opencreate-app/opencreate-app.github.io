const CACHE_NAME = "opencreate-static-v1";

const STATIC_ASSETS = [
  "/fonts/roboto-latin.woff2",
  "/OpenCreate-Forge-Alpha3-Screenshot.webp",
  "/OpenCreate-Forge-Logo-dark.svg",
  "/OpenCreate-Forge-Logo.svg",
  "/OpenCreate-Logo.svg",
  "/cover.webp",
  "/favicon_dark.svg",
  "/favicon_light.svg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS)),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter(
              (cacheName) =>
                cacheName.startsWith("opencreate-static-") &&
                cacheName !== CACHE_NAME,
            )
            .map((cacheName) => caches.delete(cacheName)),
        ),
      ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);
  const isSameOrigin = url.origin === self.location.origin;
  const isStaticAsset =
    request.destination === "font" ||
    request.destination === "image" ||
    STATIC_ASSETS.includes(url.pathname);

  if (request.method !== "GET" || !isSameOrigin || !isStaticAsset) {
    return;
  }

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(request).then((networkResponse) => {
        if (networkResponse.ok) {
          const responseToCache = networkResponse.clone();
          event.waitUntil(
            caches.open(CACHE_NAME).then((cache) =>
              cache.put(request, responseToCache),
            ),
          );
        }
        return networkResponse;
      });
    }),
  );
});
