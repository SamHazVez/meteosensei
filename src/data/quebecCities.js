/**
 * Liste des principales villes du Québec avec leurs codes RSS ECCC
 * Codes tirés de https://meteo.gc.ca/
 */

export const quebecCities = [
  {
    id: 'montreal',
    name: 'Montréal',
    code: 'QC-143',
    rssUrl: 'https://meteo.gc.ca/rss/city/qc-143_f.xml',
    coords: [45.5017, -73.5673]
  },
  {
    id: 'quebec',
    name: 'Québec',
    code: 'QC-133',
    rssUrl: 'https://meteo.gc.ca/rss/city/qc-133_f.xml',
    coords: [46.8139, -71.2080]
  },
  {
    id: 'gatineau',
    name: 'Gatineau',
    code: 'QC-69',
    rssUrl: 'https://meteo.gc.ca/rss/city/qc-69_f.xml',
    coords: [45.4765, -75.7013]
  },
  {
    id: 'sherbrooke',
    name: 'Sherbrooke',
    code: 'QC-85',
    rssUrl: 'https://meteo.gc.ca/rss/city/qc-85_f.xml',
    coords: [45.4042, -71.8929]
  },
  {
    id: 'laval',
    name: 'Laval',
    code: 'QC-101',
    rssUrl: 'https://meteo.gc.ca/rss/city/qc-101_f.xml',
    coords: [45.6066, -73.7124]
  },
  {
    id: 'saguenay',
    name: 'Saguenay',
    code: 'QC-77',
    rssUrl: 'https://meteo.gc.ca/rss/city/qc-77_f.xml',
    coords: [48.4283, -71.0659]
  },
  {
    id: 'trois-rivieres',
    name: 'Trois-Rivières',
    code: 'QC-92',
    rssUrl: 'https://meteo.gc.ca/rss/city/qc-92_f.xml',
    coords: [46.3432, -72.5428]
  },
  {
    id: 'rimouski',
    name: 'Rimouski',
    code: 'QC-74',
    rssUrl: 'https://meteo.gc.ca/rss/city/qc-74_f.xml',
    coords: [48.4489, -68.5236]
  }
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
