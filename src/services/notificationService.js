/**
 * Service de gestion des notifications push
 * Gère les permissions et l'envoi de notifications
 */

import { generateNotificationMessage, getTheme, NOTIFICATION_THEMES } from '../data/notificationThemes';

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
 * @returns {Promise<string>}
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
 * @param {string} title
 * @param {Object} options
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
 * Envoie une notification d'alerte de pluie avec message personnalisé selon le thème
 * @param {boolean} isRaining
 * @param {Object} weatherData
 */
export function sendRainAlert(isRaining, weatherData = null) {
  const themeId = getNotificationTheme();
  const includeWeatherDetails = getIncludeWeatherDetails();
  const message = generateNotificationMessage(themeId, isRaining, weatherData, includeWeatherDetails);
  
  const options = {
    body: message.body,
    icon: '/meteosensei/icons/icon-192x192.png',
    tag: 'rain-alert',
    data: {
      type: isRaining ? 'rain' : 'weather',
      timestamp: Date.now(),
      theme: themeId
    }
  };
  
  return sendNotification(message.title, options);
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

/**
 * Récupère la liste des villes surveillées pour les notifications
 * @returns {Array<string>}
 */
export function getNotificationCities() {
  const citiesJson = localStorage.getItem('notificationCities');
  if (!citiesJson) return [];
  
  try {
    return JSON.parse(citiesJson);
  } catch (error) {
    console.error('Erreur de parsing des villes:', error);
    return [];
  }
}

/**
 * Définit la liste des villes surveillées pour les notifications
 * @param {Array<string>} cityIds
 */
export function setNotificationCities(cityIds) {
  localStorage.setItem('notificationCities', JSON.stringify(cityIds));
}

/**
 * Ajoute une ville à surveiller
 * @param {string} cityId
 */
export function addNotificationCity(cityId) {
  const cities = getNotificationCities();
  if (!cities.includes(cityId)) {
    cities.push(cityId);
    setNotificationCities(cities);
  }
}

/**
 * Retire une ville de la surveillance
 * @param {string} cityId
 */
export function removeNotificationCity(cityId) {
  const cities = getNotificationCities();
  const filtered = cities.filter(id => id !== cityId);
  setNotificationCities(filtered);
}

/**
 * Vérifie si une ville est surveillée
 * @param {string} cityId
 * @returns {boolean}
 */
export function isCityNotificationEnabled(cityId) {
  const cities = getNotificationCities();
  return cities.includes(cityId);
}

/**
 * Vérifie si une notification a déjà été envoyée aujourd'hui pour une ville
 * @param {string} cityId - ID de la ville
 * @returns {boolean}
 */
export function hasNotifiedTodayForCity(cityId) {
  const lastNotification = localStorage.getItem(`lastRainNotification-${cityId}`);
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
 * Marque qu'une notification a été envoyée aujourd'hui pour une ville
 * @param {string} cityId
 */
export function markNotificationSentForCity(cityId) {
  localStorage.setItem(`lastRainNotification-${cityId}`, Date.now().toString());
}

/**
 * Récupère le thème de notification sélectionné
 * @returns {string}
 */
export function getNotificationTheme() {
  return localStorage.getItem('notificationTheme') || 'sensei';
}

/**
 * Définit le thème de notification
 * @param {string} themeId
 */
export function setNotificationTheme(themeId) {
  const theme = getTheme(themeId);
  if (theme) {
    localStorage.setItem('notificationTheme', themeId);
  }
}

/**
 * Récupère la liste de tous les thèmes disponibles
 * @returns {Array}
 */
export function getAvailableThemes() {
  return NOTIFICATION_THEMES;
}

/**
 * Récupère le paramètre d'inclusion des détails météo
 * @returns {boolean}
 */
export function getIncludeWeatherDetails() {
  const value = localStorage.getItem('includeWeatherDetails');
  return value === null ? true : value === 'true';
}

/**
 * Définit le paramètre d'inclusion des détails météo
 * @param {boolean} include
 */
export function setIncludeWeatherDetails(include) {
  localStorage.setItem('includeWeatherDetails', include.toString());
}
