/**
 * Service d'analyse des prévisions météo
 * Détecte les conditions spécifiques (pluie, neige, etc.)
 */

const RAIN_KEYWORDS = [
  'pluie', 'pluies',
  'averse', 'averses',
  'bruine',
  'rain', 'showers', 'drizzle'
];

const SNOW_KEYWORDS = [
  'neige',
  'flocon', 'flocons',
  'poudrerie',
  'giboulée', 'giboulées',
  'snow', 'flurries',
  'blizzard'
];

/**
 * Détecte si la condition actuelle est de la pluie
 * @param {string} condition - Condition météo
 * @returns {boolean}
 */
export function isRaining(condition) {
  if (!condition) return false;
  
  const text = condition.toLowerCase();
  return RAIN_KEYWORDS.some(keyword => text.includes(keyword));
}

/**
 * Détecte si la condition actuelle est de la neige
 * @param {string} condition - Condition météo
 * @returns {boolean}
 */
export function isSnowing(condition) {
  if (!condition) return false;
  
  const text = condition.toLowerCase();
  return SNOW_KEYWORDS.some(keyword => text.includes(keyword));
}

/**
 * Analyse la météo actuelle
 * @param {Object} weatherData - Données météo
 * @returns {Object}
 */
export function analyzeWeather(weatherData) {
  if (!weatherData || !weatherData.current) {
    return {
      hasData: false,
      error: 'Aucune donnée météo disponible'
    };
  }
  
  const current = weatherData.current;
  const raining = isRaining(current.condition);
  const snowing = isSnowing(current.condition);
  
  const hasTonight = weatherData.tonight !== null;
  
  return {
    hasData: true,
    location: weatherData.location,
    updated: weatherData.updated,
    condition: current.condition,
    temperature: current.temperature,
    isRaining: raining,
    isSnowing: snowing,
    tonight: hasTonight ? weatherData.tonight : null
  };
}

/**
 * Génère un message de notification pour la pluie
 * @param {Object} analysis - Résultat de analyzeWeather
 * @returns {string}
 */
export function generateRainNotificationMessage(analysis) {
  const location = analysis.location.split('-')[0].trim();
  return `☔ Il pleut à ${location}`;
}

/**
 * Génère un message de notification pour la neige
 * @param {Object} analysis - Résultat de analyzeWeather
 * @returns {string}
 */
export function generateSnowNotificationMessage(analysis) {
  const location = analysis.location.split('-')[0].trim();
  return `❄️ Il neige à ${location}`;
}
