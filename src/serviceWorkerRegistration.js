/**
 * Enregistrement du Service Worker pour la PWA
 */

export function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      navigator.serviceWorker
        .register(swUrl)
        .then((registration) => {
          console.log('[SW] Service Worker enregistré:', registration.scope);
          
          setInterval(() => {
            registration.update();
          }, 60000);
        })
        .catch((error) => {
          console.error('[SW] Erreur lors de l\'enregistrement:', error);
        });
    });
  } else {
    console.warn('[SW] Service Workers non supportés par ce navigateur');
  }
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
        console.log('[SW] Service Worker désenregistré');
      })
      .catch((error) => {
        console.error('[SW] Erreur lors du désenregistrement:', error);
      });
  }
}
