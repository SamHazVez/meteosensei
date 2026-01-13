/**
 * Service Worker pour MeteoSensei
 * Gère le cache et les notifications en arrière-plan
 */

const CACHE_NAME = 'meteosensei-v1';
const urlsToCache = [
  '/meteosensei/',
  '/meteosensei/index.html',
  '/meteosensei/static/css/main.css',
  '/meteosensei/static/js/main.js',
  '/meteosensei/icons/icon-192x192.png',
  '/meteosensei/icons/icon-512x512.png'
];

self.addEventListener('install', (event) => {
  console.log('[SW] Installation...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Cache ouvert');
        return cache.addAll(urlsToCache.map(url => new Request(url, { cache: 'no-cache' })))
          .catch((err) => {
            console.warn('[SW] Certains fichiers n\'ont pas pu être mis en cache:', err);
            return Promise.resolve();
          });
      })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('[SW] Activation...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Suppression ancien cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return;
  }

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin && 
      !url.hostname.includes('allorigins.win') &&
      !url.hostname.includes('meteo.gc.ca')) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (!response || response.status !== 200 || response.type === 'error') {
          return response;
        }

        const responseToCache = response.clone();
        
        caches.open(CACHE_NAME)
          .then((cache) => {
            cache.put(event.request, responseToCache);
          });

        return response;
      })
      .catch(() => {
        return caches.match(event.request)
          .then((cachedResponse) => {
            if (cachedResponse) {
              console.log('[SW] Réponse depuis le cache:', event.request.url);
              return cachedResponse;
            }
            
            if (event.request.mode === 'navigate') {
              return caches.match('/meteosensei/index.html');
            }
          });
      })
  );
});

self.addEventListener('push', (event) => {
  console.log('[SW] Push reçu:', event);
  
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'MeteoSensei';
  const options = {
    body: data.body || 'Nouvelle alerte météo',
    icon: '/meteosensei/icons/icon-192x192.png',
    badge: '/meteosensei/icons/icon-72x72.png',
    vibrate: [200, 100, 200],
    tag: 'meteosensei-alert',
    requireInteraction: false,
    data: data
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

self.addEventListener('notificationclick', (event) => {
  console.log('[SW] Notification cliquée:', event);
  
  event.notification.close();
  
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then((clientList) => {
        for (let client of clientList) {
          if (client.url.includes('/meteosensei') && 'focus' in client) {
            return client.focus();
          }
        }
        if (clients.openWindow) {
          return clients.openWindow('/meteosensei/');
        }
      })
  );
});
