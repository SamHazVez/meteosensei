/**
 * Service de parsing RSS d'Environnement et Changement Climatique Canada (ECCC)
 * Récupère et parse les prévisions météo via flux RSS
 */

/**
 * Récupère le flux RSS météo pour une ville
 * @param {string} rssUrl - URL du flux RSS ECCC
 * @returns {Promise<Object>} - Données météo parsées
 */
export async function fetchWeatherRSS(rssUrl) {
  try {
    const proxyUrl = 'https://api.allorigins.win/raw?url=';
    const response = await fetch(proxyUrl + encodeURIComponent(rssUrl));
    
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    
    const xmlText = await response.text();
    return parseRSSToWeather(xmlText);
  } catch (error) {
    console.error('Erreur lors de la récupération du RSS:', error);
    throw new Error('Impossible de récupérer les prévisions météo');
  }
}

/**
 * Parse le XML RSS et extrait les prévisions
 * @param {string} xmlText - Contenu XML du flux RSS
 * @returns {Object} - Données météo structurées
 */
function parseRSSToWeather(xmlText) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
  
  const parserError = xmlDoc.querySelector('parsererror');
  if (parserError) {
    throw new Error('Erreur de parsing XML');
  }
  
  const title = xmlDoc.querySelector('feed > title')?.textContent || 'Météo';
  const updated = xmlDoc.querySelector('feed > updated')?.textContent || new Date().toISOString();
  
  const entries = Array.from(xmlDoc.querySelectorAll('entry')).map(entry => {
    const entryTitle = entry.querySelector('title')?.textContent || '';
    const summary = entry.querySelector('summary')?.textContent || '';
    const published = entry.querySelector('published')?.textContent || '';
    
    return {
      title: entryTitle.trim(),
      summary: summary.trim(),
      published: published
    };
  });
  
  return {
    location: title,
    updated: new Date(updated),
    forecasts: entries
  };
}

/**
 * Récupère la prévision pour aujourd'hui
 * @param {Array} forecasts - Tableau des prévisions
 * @returns {Object|null} - Prévision d'aujourd'hui ou null
 */
export function getTodayForecast(forecasts) {
  const today = forecasts.find(forecast => 
    forecast.title.toLowerCase().includes("aujourd'hui") ||
    forecast.title.toLowerCase().includes('current conditions') ||
    forecast.title.toLowerCase().includes('conditions actuelles')
  );
  
  return today || forecasts[0] || null;
}
