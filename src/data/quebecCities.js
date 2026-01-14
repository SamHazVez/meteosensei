/**
 * Liste des principales villes du Québec avec leurs codes RSS ECCC
 * Codes tirés de https://meteo.gc.ca/
 */

export const quebecCities = [
  {
    id: 'quebec',
    name: 'Québec',
    rssUrl: 'https://meteo.gc.ca/rss/city/qc-133_f.xml',
  },
];

/**
 * Récupère une ville par son ID
 * @param {string} cityId - ID de la ville
 * @returns {Object|null}
 */
export function getCityById(cityId) {
  return quebecCities.find(city => city.id === cityId) || null;
}

/**
 * Récupère la ville par défaut (Montréal)
 * @returns {Object}
 */
export function getDefaultCity() {
  return quebecCities[0];
}
