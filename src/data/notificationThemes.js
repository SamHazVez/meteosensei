/**
 * Thèmes de notifications personnalisées
 * Chaque thème génère des messages basés sur les conditions météo
 */

import themesData from './notificationThemes.json';

const WEATHER_TYPES = {
  RAIN: 'rain',
  SNOW: 'snow'
};

/**
 * Remplace les templates dans un message
 * @param {string} text - Texte avec templates
 * @param {Object} weatherData - Données météo
 * @returns {string}
 */
function replaceTemplates(text, weatherData) {
  if (!weatherData) return text;
  
  return text
    .replace('{location}', weatherData.location || 'Votre région')
    .replace('{condition}', weatherData.condition || 'Temps variable')
    .replace('{temperature}', weatherData.temperature !== undefined ? `${weatherData.temperature}°C` : '');
}

/**
 * Génère un message à partir d'un thème JSON
 * @param {Object} themeData - Données du thème depuis JSON
 * @param {string} weatherType - Type de condition (WEATHER_TYPES)
 * @param {Object} weatherData - Données météo
 * @param {boolean} includeWeatherDetails - Inclure les détails météo
 * @returns {Object} { title, body }
 */
function generateMessageFromTheme(themeData, weatherType, weatherData = null, includeWeatherDetails = true) {
  const messagesKey = `${weatherType}Messages`;
  const messages = themeData[messagesKey];
  
  if (!messages || messages.length === 0) {
    return { title: '⚠️ Alerte Météo', body: 'Conditions météo inhabituelles' };
  }
  
  const bodyText = messages[Math.floor(Math.random() * messages.length)];
  const title = replaceTemplates(themeData.title || '⚠️ Météo', weatherData);
  
  let finalBody = bodyText;
  
  if (includeWeatherDetails && weatherData) {
    const details = [];
    if (weatherData.condition) details.push(weatherData.condition);
    if (weatherData.temperature !== undefined) details.push(`${weatherData.temperature}°C`);
    if (details.length > 0) {
      finalBody += `\n\n📊 ${details.join(' • ')}`;
    }
  }
  
  return { title, body: finalBody };
}

/**
 * Crée des objets thème avec méthodes à partir des données JSON
 */
const NOTIFICATION_THEMES = themesData.themes.map(themeData => ({
  id: themeData.id,
  name: themeData.name,
  description: themeData.description,
  
  /**
   * Génère un message pour un type de condition donné (extensible)
   * @param {string} weatherType - Type de condition
   * @param {Object} weatherData - Données météo
   * @param {boolean} includeWeatherDetails - Inclure détails
   * @returns {Object}
   */
  getMessage(weatherType, weatherData, includeWeatherDetails = true) {
    return generateMessageFromTheme(themeData, weatherType, weatherData, includeWeatherDetails);
  }
}));

export { NOTIFICATION_THEMES, WEATHER_TYPES };

/**
 * Récupère un thème par son ID
 * @param {string} themeId
 * @returns {Object|null}
 */
export function getTheme(themeId) {
  return NOTIFICATION_THEMES.find(theme => theme.id === themeId) || NOTIFICATION_THEMES[0];
}

/**
 * Génère un message de notification selon le thème et le type de condition
 * @param {string} themeId - ID du thème
 * @param {string} weatherType - Type de condition (WEATHER_TYPES)
 * @param {Object} weatherData - Données météo
 * @param {boolean} includeWeatherDetails - Inclure détails
 * @returns {Object} { title, body }
 */
export function generateNotificationMessage(themeId, weatherType, weatherData = null, includeWeatherDetails = true) {
  const theme = getTheme(themeId);
  return theme.getMessage(weatherType, weatherData, includeWeatherDetails);
}
