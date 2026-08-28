const CACHE_NAME = 'link-agency-v3-20260828';
const STATIC_CACHE_URLS = [
  '/'
];

// Installation du service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(STATIC_CACHE_URLS);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

// Activation du service worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        return self.clients.claim();
      })
  );
});

// Stratégie de cache
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Stratégie Cache First pour les assets statiques (images, JS, CSS, fonts)
  const isStaticAsset = 
    event.request.destination === 'image' || 
    event.request.destination === 'script' ||
    event.request.destination === 'style' ||
    event.request.destination === 'font' ||
    url.pathname.includes('/assets/media/') ||
    url.pathname.includes('/assets/') ||
    url.pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/);

  if (isStaticAsset) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((cachedResponse) => {
          // Retourner la réponse en cache si disponible
          if (cachedResponse) {
            // Rafraîchir le cache en arrière-plan pour les prochaines visites
            fetch(event.request).then((fetchResponse) => {
              if (fetchResponse && fetchResponse.status === 200) {
                cache.put(event.request, fetchResponse.clone());
              }
            }).catch(() => {});
            return cachedResponse;
          }
          
          // Sinon, fetch et mettre en cache
          return fetch(event.request).then((fetchResponse) => {
            if (fetchResponse && fetchResponse.status === 200) {
              cache.put(event.request, fetchResponse.clone());
            }
            return fetchResponse;
          }).catch(() => {
            // Retourner une réponse par défaut en cas d'erreur
            return new Response('Asset not available', { status: 503 });
          });
        });
      })
    );
    return;
  }

  // Stratégie Network First pour les pages HTML
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const responseClone = response.clone();
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseClone);
            });
          return response;
        })
        .catch(() => {
          return caches.match(event.request)
            .then((response) => {
              return response || caches.match('/');
            });
        })
    );
    return;
  }

  // Stratégie Network First pour les autres requêtes
  event.respondWith(
    fetch(event.request)
      .catch(() => {
        return caches.match(event.request);
      })
  );
});
