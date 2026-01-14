/**
 * Thèmes de notifications personnalisées
 * Chaque thème génère des messages basés sur les conditions météo
 */

import themesData from './notificationThemes.json';

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
 * @param {boolean} isRaining - Si il pleut
 * @param {Object} weatherData - Données météo
 * @param {boolean} includeWeatherDetails - Inclure les détails météo
 * @returns {Object} { title, body }
 */
function generateMessageFromTheme(themeData, isRaining, weatherData = null, includeWeatherDetails = true) {
  const messages = isRaining ? themeData.rainMessages : themeData.normalMessages;
  const bodyText = messages[Math.floor(Math.random() * messages.length)];
  
  // Remplacer les templates dans le titre
  let title = replaceTemplates(themeData.title || '☔ Météo', weatherData);
  
  let finalBody = bodyText;
  
  if (includeWeatherDetails && weatherData) {
    const details = [];
    if (weatherData.condition) {
      details.push(weatherData.condition);
    }
    if (weatherData.temperature !== undefined) {
      details.push(`${weatherData.temperature}°C`);
    }
    if (details.length > 0) {
      finalBody += `\n\n📊 ${details.join(' • ')}`;
    }
  }
  
  return {
    title: title,
    body: finalBody
  };
}

/**
 * Crée des objets thème avec méthodes à partir des données JSON
 */
const NOTIFICATION_THEMES = themesData.themes.map(themeData => ({
  id: themeData.id,
  name: themeData.name,
  description: themeData.description,
  getRainMessage(weatherData, includeWeatherDetails = true) {
    return generateMessageFromTheme(themeData, true, weatherData, includeWeatherDetails);
  },
  getNormalMessage(weatherData, includeWeatherDetails = true) {
    return generateMessageFromTheme(themeData, false, weatherData, includeWeatherDetails);
  }
}));

export { NOTIFICATION_THEMES };

/**
 * Récupère un thème par son ID
 * @param {string} themeId
 * @returns {Object|null}
 */
export function getTheme(themeId) {
  return NOTIFICATION_THEMES.find(theme => theme.id === themeId) || NOTIFICATION_THEMES[0];
}

/**
 * Génère un message de notification selon le thème et les conditions
 * @param {string} themeId
 * @param {boolean} isRaining
 * @param {Object} weatherData
 * @param {boolean} includeWeatherDetails
 * @returns {Object}
 */
export function generateNotificationMessage(themeId, isRaining, weatherData = null, includeWeatherDetails = true) {
  const theme = getTheme(themeId);
  
  if (isRaining) {
    return theme.getRainMessage(weatherData, includeWeatherDetails);
  } else {
    return theme.getNormalMessage(weatherData, includeWeatherDetails);
  }
}
