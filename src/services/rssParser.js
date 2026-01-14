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
  
  const currentConditions = parseCurrentConditions(xmlDoc);
  
  const tonightForecast = parseTonightForecast(xmlDoc);
  
  return {
    location: title,
    updated: new Date(updated),
    current: currentConditions,
    tonight: tonightForecast
  };
}

/**
 * Parse les conditions actuelles
 * @param {Document} xmlDoc - Document XML
 * @returns {Object|null}
 */
function parseCurrentConditions(xmlDoc) {
  const entry = Array.from(xmlDoc.querySelectorAll('entry'))
    .find(entry => {
      const category = entry.querySelector('category');
      return category && category.getAttribute('term') === 'Conditions actuelles';
    });
  
  if (!entry) return null;
  
  const entryTitle = entry.querySelector('title')?.textContent || '';
  
  let temperature = null;
  const tempMatch = entryTitle.match(/(-?\d+,?\d*)\s*°C/);
  if (tempMatch) {
    temperature = parseFloat(tempMatch[1].replace(',', '.'));
  }
  
  let condition = '';
  const conditionMatch = entryTitle.match(/:\s*([^,]+)/);
  if (conditionMatch) {
    condition = conditionMatch[1].trim();
  }
  
  return {
    condition: condition,
    temperature: temperature
  };
}

/**
 * Parse les prévisions du soir
 * @param {Document} xmlDoc - Document XML
 * @returns {Object|null}
 */
function parseTonightForecast(xmlDoc) {
  const entry = Array.from(xmlDoc.querySelectorAll('entry'))
    .find(entry => {
      const category = entry.querySelector('category');
      const title = entry.querySelector('title')?.textContent || '';
      return category && 
             category.getAttribute('term') === 'Prévisions météo' &&
             (title.toLowerCase().includes('ce soir') || title.toLowerCase().includes('cette nuit'));
    });
  
  if (!entry) return null;
  
  const title = entry.querySelector('title')?.textContent || '';
  const summary = entry.querySelector('summary')?.textContent || '';
  
  let minTemp = null;
  const minMatch = title.match(/minimum\s+(-?\d+)/i);
  if (minMatch) {
    minTemp = parseInt(minMatch[1]);
  }
  
  return {
    title: title,
    summary: summary,
    minTemp: minTemp
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
