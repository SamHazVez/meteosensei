/**
 * Service d'analyse des prévisions météo
 * Détecte les conditions spécifiques (pluie, neige, etc.)
 */

const RAIN_KEYWORDS = [
  'pluie', 'pluies', 'pluvieux', 'pluvieuse',
  'averse', 'averses', 'ondée', 'ondées',
  'bruine', 'bruines',
  'précipitation', 'précipitations',
  'giboulée', 'giboulées',
  'orage', 'orages', 'orageux',
  'rain', 'rainy', 'showers', 'drizzle',
  'precipitation', 'thunderstorm'
];

const RAIN_RISK_KEYWORDS = [
  'risque de pluie',
  'possibilité de pluie',
  'probabilité de pluie',
  'chance of rain',
  'risk of rain'
];

/**
 * Détecte si la prévision indique de la pluie
 * @param {Object} forecast - Objet prévision avec title et summary
 * @returns {Object} - { hasRain: boolean, confidence: string, details: string }
 */
export function detectRain(forecast) {
  if (!forecast || !forecast.summary) {
    return { hasRain: false, confidence: 'none', details: '' };
  }
  
  const text = `${forecast.title} ${forecast.summary}`.toLowerCase();
  
  const hasDefiniteRain = RAIN_KEYWORDS.some(keyword => 
    text.includes(keyword)
  );
  
  const hasRainRisk = RAIN_RISK_KEYWORDS.some(keyword =>
    text.includes(keyword)
  );
  
  const probabilityMatch = text.match(/(\d{1,3})\s*%/);
  const probability = probabilityMatch ? parseInt(probabilityMatch[1]) : null;
  
  let confidence = 'none';
  let hasRain = false;
  
  if (hasDefiniteRain) {
    hasRain = true;
    confidence = 'high';
  } else if (hasRainRisk || (probability && probability >= 40)) {
    hasRain = true;
    confidence = 'medium';
  }
  
  return {
    hasRain,
    confidence,
    probability,
    details: forecast.summary
  };
}

/**
 * Analyse complète de la météo du jour
 * @param {Object} weatherData - Données météo complètes
 * @returns {Object} - Analyse détaillée
 */
export function analyzeWeather(weatherData) {
  if (!weatherData || !weatherData.forecasts || weatherData.forecasts.length === 0) {
    return {
      hasData: false,
      error: 'Aucune donnée météo disponible'
    };
  }
  
  const todayForecast = weatherData.forecasts.find(f => 
    f.title.toLowerCase().includes("aujourd'hui") ||
    f.title.toLowerCase().includes('current')
  ) || weatherData.forecasts[0];
  
  const rainAnalysis = detectRain(todayForecast);
  
  return {
    hasData: true,
    location: weatherData.location,
    updated: weatherData.updated,
    today: todayForecast,
    rain: rainAnalysis,
    allForecasts: weatherData.forecasts
  };
}

/**
 * Génère un message de notification pour la pluie
 * @param {Object} analysis - Résultat de analyzeWeather
 * @returns {string} - Message de notification
 */
export function generateRainNotificationMessage(analysis) {
  if (!analysis.rain.hasRain) {
    return '';
  }
  
  const location = analysis.location.split('-')[0].trim();
  
  if (analysis.rain.confidence === 'high') {
    return `☔ Pluie prévue aujourd'hui à ${location}`;
  } else if (analysis.rain.probability) {
    return `🌧️ Risque de pluie ${analysis.rain.probability}% à ${location}`;
  } else {
    return `🌦️ Possibilité de pluie à ${location}`;
  }
}
