/**
 * Service de gestion des notifications push
 * Gère les permissions et l'envoi de notifications
 */

/**
 * Vérifie si les notifications sont supportées
 * @returns {boolean}
 */
export function isNotificationSupported() {
  return 'Notification' in window;
}

/**
 * Récupère le statut de permission actuel
 * @returns {string} - 'granted', 'denied', 'default'
 */
export function getPermissionStatus() {
  if (!isNotificationSupported()) {
    return 'unsupported';
  }
  return Notification.permission;
}

/**
 * Demande la permission pour les notifications
 * @returns {Promise<string>} - Status de la permission
 */
export async function requestNotificationPermission() {
  if (!isNotificationSupported()) {
    throw new Error('Les notifications ne sont pas supportées');
  }
  
  if (Notification.permission === 'granted') {
    return 'granted';
  }
  
  if (Notification.permission === 'denied') {
    return 'denied';
  }
  
  try {
    const permission = await Notification.requestPermission();
    return permission;
  } catch (error) {
    console.error('Erreur lors de la demande de permission:', error);
    throw error;
  }
}

/**
 * Envoie une notification
 * @param {string} title - Titre de la notification
 * @param {Object} options - Options de notification
 * @returns {Notification|null}
 */
export function sendNotification(title, options = {}) {
  if (!isNotificationSupported()) {
    console.warn('Notifications non supportées');
    return null;
  }
  
  if (Notification.permission !== 'granted') {
    console.warn('Permission de notification non accordée');
    return null;
  }
  
  const defaultOptions = {
    icon: '/meteosensei/icons/icon-192x192.png',
    badge: '/meteosensei/icons/icon-192x192.png',
    vibrate: [200, 100, 200],
    tag: 'meteosensei-rain',
    requireInteraction: false
  };
  
  try {
    return new Notification(title, { ...defaultOptions, ...options });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de la notification:', error);
    return null;
  }
}

/**
 * Envoie une notification d'alerte de pluie
 * @param {string} message - Message de la notification
 * @param {string} details - Détails supplémentaires
 */
export function sendRainAlert(message, details = '') {
  const options = {
    body: details,
    icon: '/meteosensei/icons/icon-192x192.png',
    tag: 'rain-alert',
    data: {
      type: 'rain',
      timestamp: Date.now()
    }
  };
  
  return sendNotification(message, options);
}

/**
 * Vérifie si une notification a déjà été envoyée aujourd'hui
 * @returns {boolean}
 */
export function hasNotifiedToday() {
  const lastNotification = localStorage.getItem('lastRainNotification');
  if (!lastNotification) return false;
  
  const lastDate = new Date(parseInt(lastNotification));
  const today = new Date();
  
  return (
    lastDate.getDate() === today.getDate() &&
    lastDate.getMonth() === today.getMonth() &&
    lastDate.getFullYear() === today.getFullYear()
  );
}

/**
 * Marque qu'une notification a été envoyée aujourd'hui
 */
export function markNotificationSent() {
  localStorage.setItem('lastRainNotification', Date.now().toString());
}

/**
 * Réinitialise le marqueur de notification
 */
export function resetNotificationMarker() {
  localStorage.removeItem('lastRainNotification');
}
