/**
 * Liste des villes du Québec avec leurs URLs RSS ECCC
 * URLs basées sur les coordonnées de https://meteo.gc.ca/forecast/canada/index_f.html?id=QC
 */

export const quebecCities = [
  // Grandes villes
  { id: 'montreal', name: 'Montréal', rssUrl: 'https://meteo.gc.ca/rss/weather/45.508_-73.588_f.xml', coords: { lat: 45.508, lon: -73.588 } },
  { id: 'quebec', name: 'Québec', rssUrl: 'https://meteo.gc.ca/rss/city/qc-133_f.xml', coords: { lat: 46.811, lon: -71.225 } },
  { id: 'laval', name: 'Laval', rssUrl: 'https://meteo.gc.ca/rss/weather/45.606_-73.712_f.xml', coords: { lat: 45.606, lon: -73.712 } },
  { id: 'gatineau', name: 'Gatineau', rssUrl: 'https://meteo.gc.ca/rss/weather/45.477_-75.701_f.xml', coords: { lat: 45.477, lon: -75.701 } },
  { id: 'longueuil', name: 'Longueuil', rssUrl: 'https://meteo.gc.ca/rss/weather/45.531_-73.518_f.xml', coords: { lat: 45.531, lon: -73.518 } },
  { id: 'sherbrooke', name: 'Sherbrooke', rssUrl: 'https://meteo.gc.ca/rss/weather/45.404_-71.893_f.xml', coords: { lat: 45.404, lon: -71.893 } },
  { id: 'saguenay', name: 'Saguenay', rssUrl: 'https://meteo.gc.ca/rss/weather/48.416_-71.066_f.xml', coords: { lat: 48.416, lon: -71.066 } },
  { id: 'trois-rivieres', name: 'Trois-Rivières', rssUrl: 'https://meteo.gc.ca/rss/weather/46.343_-72.547_f.xml', coords: { lat: 46.343, lon: -72.547 } },
  { id: 'terrebonne', name: 'Terrebonne', rssUrl: 'https://meteo.gc.ca/rss/weather/45.701_-73.647_f.xml', coords: { lat: 45.701, lon: -73.647 } },
  { id: 'levis', name: 'Lévis', rssUrl: 'https://meteo.gc.ca/rss/weather/46.804_-71.177_f.xml', coords: { lat: 46.804, lon: -71.177 } },
  
  // Montérégie
  { id: 'brossard', name: 'Brossard', rssUrl: 'https://meteo.gc.ca/rss/weather/45.459_-73.460_f.xml', coords: { lat: 45.459, lon: -73.460 } },
  { id: 'saint-jean-sur-richelieu', name: 'Saint-Jean-sur-Richelieu', rssUrl: 'https://meteo.gc.ca/rss/weather/45.318_-73.265_f.xml', coords: { lat: 45.318, lon: -73.265 } },
  { id: 'chateauguay', name: 'Châteauguay', rssUrl: 'https://meteo.gc.ca/rss/weather/45.380_-73.750_f.xml', coords: { lat: 45.380, lon: -73.750 } },
  { id: 'drummondville', name: 'Drummondville', rssUrl: 'https://meteo.gc.ca/rss/weather/45.883_-72.484_f.xml', coords: { lat: 45.883, lon: -72.484 } },
  { id: 'granby', name: 'Granby', rssUrl: 'https://meteo.gc.ca/rss/weather/45.403_-72.731_f.xml', coords: { lat: 45.403, lon: -72.731 } },
  { id: 'saint-hyacinthe', name: 'Saint-Hyacinthe', rssUrl: 'https://meteo.gc.ca/rss/weather/45.631_-72.956_f.xml', coords: { lat: 45.631, lon: -72.956 } },
  { id: 'sorel-tracy', name: 'Sorel-Tracy', rssUrl: 'https://meteo.gc.ca/rss/weather/46.042_-73.113_f.xml', coords: { lat: 46.042, lon: -73.113 } },
  { id: 'salaberry-de-valleyfield', name: 'Salaberry-de-Valleyfield', rssUrl: 'https://meteo.gc.ca/rss/weather/45.253_-74.130_f.xml', coords: { lat: 45.253, lon: -74.130 } },
  { id: 'vaudreuil-dorion', name: 'Vaudreuil-Dorion', rssUrl: 'https://meteo.gc.ca/rss/weather/45.402_-74.033_f.xml', coords: { lat: 45.402, lon: -74.033 } },
  
  // Laurentides
  { id: 'saint-jerome', name: 'Saint-Jérôme', rssUrl: 'https://meteo.gc.ca/rss/weather/45.781_-74.004_f.xml', coords: { lat: 45.781, lon: -74.004 } },
  { id: 'mirabel', name: 'Mirabel', rssUrl: 'https://meteo.gc.ca/rss/weather/45.650_-74.083_f.xml', coords: { lat: 45.650, lon: -74.083 } },
  { id: 'blainville', name: 'Blainville', rssUrl: 'https://meteo.gc.ca/rss/weather/45.668_-73.882_f.xml', coords: { lat: 45.668, lon: -73.882 } },
  { id: 'saint-eustache', name: 'Saint-Eustache', rssUrl: 'https://meteo.gc.ca/rss/weather/45.565_-73.905_f.xml', coords: { lat: 45.565, lon: -73.905 } },
  { id: 'boisbriand', name: 'Boisbriand', rssUrl: 'https://meteo.gc.ca/rss/weather/45.613_-73.837_f.xml', coords: { lat: 45.613, lon: -73.837 } },
  { id: 'sainte-agathe-des-monts', name: 'Sainte-Agathe-des-Monts', rssUrl: 'https://meteo.gc.ca/rss/weather/46.050_-74.283_f.xml', coords: { lat: 46.050, lon: -74.283 } },
  { id: 'mont-tremblant', name: 'Mont-Tremblant', rssUrl: 'https://meteo.gc.ca/rss/weather/46.119_-74.596_f.xml', coords: { lat: 46.119, lon: -74.596 } },
  
  // Lanaudière
  { id: 'repentigny', name: 'Repentigny', rssUrl: 'https://meteo.gc.ca/rss/weather/45.742_-73.450_f.xml', coords: { lat: 45.742, lon: -73.450 } },
  { id: 'mascouche', name: 'Mascouche', rssUrl: 'https://meteo.gc.ca/rss/weather/45.747_-73.599_f.xml', coords: { lat: 45.747, lon: -73.599 } },
  { id: 'joliette', name: 'Joliette', rssUrl: 'https://meteo.gc.ca/rss/weather/46.022_-73.443_f.xml', coords: { lat: 46.022, lon: -73.443 } },
  
  // Outaouais
  { id: 'aylmer', name: 'Aylmer (Gatineau)', rssUrl: 'https://meteo.gc.ca/rss/weather/45.396_-75.826_f.xml', coords: { lat: 45.396, lon: -75.826 } },
  
  // Estrie (Cantons-de-l'Est)
  { id: 'magog', name: 'Magog', rssUrl: 'https://meteo.gc.ca/rss/weather/45.266_-72.143_f.xml', coords: { lat: 45.266, lon: -72.143 } },
  { id: 'cowansville', name: 'Cowansville', rssUrl: 'https://meteo.gc.ca/rss/weather/45.203_-72.747_f.xml', coords: { lat: 45.203, lon: -72.747 } },
  { id: 'victoriaville', name: 'Victoriaville', rssUrl: 'https://meteo.gc.ca/rss/weather/46.054_-71.964_f.xml', coords: { lat: 46.054, lon: -71.964 } },
  
  // Mauricie
  { id: 'shawinigan', name: 'Shawinigan', rssUrl: 'https://meteo.gc.ca/rss/weather/46.566_-72.749_f.xml', coords: { lat: 46.566, lon: -72.749 } },
  
  // Saguenay–Lac-Saint-Jean
  { id: 'alma', name: 'Alma', rssUrl: 'https://meteo.gc.ca/rss/weather/48.540_-71.649_f.xml', coords: { lat: 48.540, lon: -71.649 } },
  { id: 'dolbeau-mistassini', name: 'Dolbeau-Mistassini', rssUrl: 'https://meteo.gc.ca/rss/weather/48.878_-72.225_f.xml', coords: { lat: 48.878, lon: -72.225 } },
  { id: 'roberval', name: 'Roberval', rssUrl: 'https://meteo.gc.ca/rss/weather/48.520_-72.226_f.xml', coords: { lat: 48.520, lon: -72.226 } },
  { id: 'saint-felicien', name: 'Saint-Félicien', rssUrl: 'https://meteo.gc.ca/rss/weather/48.651_-72.453_f.xml', coords: { lat: 48.651, lon: -72.453 } },
  
  // Côte-Nord
  { id: 'baie-comeau', name: 'Baie-Comeau', rssUrl: 'https://meteo.gc.ca/rss/weather/49.209_-68.175_f.xml', coords: { lat: 49.209, lon: -68.175 } },
  { id: 'sept-iles', name: 'Sept-Îles', rssUrl: 'https://meteo.gc.ca/rss/weather/50.200_-66.382_f.xml', coords: { lat: 50.200, lon: -66.382 } },
  { id: 'port-cartier', name: 'Port-Cartier', rssUrl: 'https://meteo.gc.ca/rss/weather/50.027_-66.866_f.xml', coords: { lat: 50.027, lon: -66.866 } },
  
  // Bas-Saint-Laurent
  { id: 'rimouski', name: 'Rimouski', rssUrl: 'https://meteo.gc.ca/rss/weather/48.449_-68.524_f.xml', coords: { lat: 48.449, lon: -68.524 } },
  { id: 'riviere-du-loup', name: 'Rivière-du-Loup', rssUrl: 'https://meteo.gc.ca/rss/weather/47.827_-69.534_f.xml', coords: { lat: 47.827, lon: -69.534 } },
  { id: 'matane', name: 'Matane', rssUrl: 'https://meteo.gc.ca/rss/weather/48.849_-67.533_f.xml', coords: { lat: 48.849, lon: -67.533 } },
  { id: 'mont-joli', name: 'Mont-Joli', rssUrl: 'https://meteo.gc.ca/rss/weather/48.586_-68.181_f.xml', coords: { lat: 48.586, lon: -68.181 } },
  { id: 'amqui', name: 'Amqui', rssUrl: 'https://meteo.gc.ca/rss/weather/48.465_-67.424_f.xml', coords: { lat: 48.465, lon: -67.424 } },
  
  // Gaspésie–Îles-de-la-Madeleine
  { id: 'gaspe', name: 'Gaspé', rssUrl: 'https://meteo.gc.ca/rss/weather/48.831_-64.492_f.xml', coords: { lat: 48.831, lon: -64.492 } },
  { id: 'new-richmond', name: 'New Richmond', rssUrl: 'https://meteo.gc.ca/rss/weather/48.165_-65.867_f.xml', coords: { lat: 48.165, lon: -65.867 } },
  { id: 'chandler', name: 'Chandler', rssUrl: 'https://meteo.gc.ca/rss/weather/48.345_-64.679_f.xml', coords: { lat: 48.345, lon: -64.679 } },
  { id: 'cap-chat', name: 'Cap-Chat', rssUrl: 'https://meteo.gc.ca/rss/weather/49.089_-66.685_f.xml', coords: { lat: 49.089, lon: -66.685 } },
  { id: 'iles-de-la-madeleine', name: 'Îles-de-la-Madeleine', rssUrl: 'https://meteo.gc.ca/rss/weather/47.380_-61.864_f.xml', coords: { lat: 47.380, lon: -61.864 } },
  
  // Abitibi-Témiscamingue
  { id: 'rouyn-noranda', name: 'Rouyn-Noranda', rssUrl: 'https://meteo.gc.ca/rss/weather/48.236_-79.023_f.xml', coords: { lat: 48.236, lon: -79.023 } },
  { id: 'val-dor', name: "Val-d'Or", rssUrl: 'https://meteo.gc.ca/rss/weather/48.097_-77.782_f.xml', coords: { lat: 48.097, lon: -77.782 } },
  { id: 'amos', name: 'Amos (Abitibi)', rssUrl: 'https://meteo.gc.ca/rss/weather/48.574_-78.116_f.xml', coords: { lat: 48.574, lon: -78.116 } },
  { id: 'la-sarre', name: 'La Sarre', rssUrl: 'https://meteo.gc.ca/rss/weather/48.801_-79.200_f.xml', coords: { lat: 48.801, lon: -79.200 } },
  { id: 'ville-marie', name: 'Ville-Marie', rssUrl: 'https://meteo.gc.ca/rss/weather/47.333_-79.433_f.xml', coords: { lat: 47.333, lon: -79.433 } },
  
  // Chaudière-Appalaches
  { id: 'thetford-mines', name: 'Thetford Mines', rssUrl: 'https://meteo.gc.ca/rss/weather/46.094_-71.298_f.xml', coords: { lat: 46.094, lon: -71.298 } },
  { id: 'saint-georges', name: 'Saint-Georges', rssUrl: 'https://meteo.gc.ca/rss/weather/46.116_-70.667_f.xml', coords: { lat: 46.116, lon: -70.667 } },
  { id: 'montmagny', name: 'Montmagny', rssUrl: 'https://meteo.gc.ca/rss/weather/46.981_-70.555_f.xml', coords: { lat: 46.981, lon: -70.555 } },
  { id: 'beauceville', name: 'Beauceville', rssUrl: 'https://meteo.gc.ca/rss/weather/46.212_-70.774_f.xml', coords: { lat: 46.212, lon: -70.774 } },
  
  // Capitale-Nationale
  { id: 'beauport', name: 'Beauport', rssUrl: 'https://meteo.gc.ca/rss/weather/46.876_-71.191_f.xml', coords: { lat: 46.876, lon: -71.191 } },
  { id: 'sainte-foy', name: 'Sainte-Foy', rssUrl: 'https://meteo.gc.ca/rss/weather/46.776_-71.293_f.xml', coords: { lat: 46.776, lon: -71.293 } },
  { id: 'charlesbourg', name: 'Charlesbourg', rssUrl: 'https://meteo.gc.ca/rss/weather/46.854_-71.275_f.xml', coords: { lat: 46.854, lon: -71.275 } },
  { id: 'baie-saint-paul', name: 'Baie-Saint-Paul', rssUrl: 'https://meteo.gc.ca/rss/weather/47.437_-70.509_f.xml', coords: { lat: 47.437, lon: -70.509 } },
  { id: 'la-malbaie', name: 'La Malbaie', rssUrl: 'https://meteo.gc.ca/rss/weather/47.655_-70.153_f.xml', coords: { lat: 47.655, lon: -70.153 } },
  
  // Nord-du-Québec
  { id: 'chibougamau', name: 'Chibougamau', rssUrl: 'https://meteo.gc.ca/rss/weather/49.915_-74.373_f.xml', coords: { lat: 49.915, lon: -74.373 } },
  { id: 'kuujjuaq', name: 'Kuujjuaq', rssUrl: 'https://meteo.gc.ca/rss/weather/58.106_-68.398_f.xml', coords: { lat: 58.106, lon: -68.398 } },
  { id: 'inukjuak', name: 'Inukjuak', rssUrl: 'https://meteo.gc.ca/rss/weather/58.455_-78.104_f.xml', coords: { lat: 58.455, lon: -78.104 } },
  { id: 'kuujjuarapik', name: 'Kuujjuarapik', rssUrl: 'https://meteo.gc.ca/rss/weather/55.279_-77.764_f.xml', coords: { lat: 55.279, lon: -77.764 } },
  
  // Autres villes importantes
  { id: 'saint-bruno-de-montarville', name: 'Saint-Bruno-de-Montarville', rssUrl: 'https://meteo.gc.ca/rss/weather/45.533_-73.350_f.xml', coords: { lat: 45.533, lon: -73.350 } },
  { id: 'dollard-des-ormeaux', name: 'Dollard-des-Ormeaux', rssUrl: 'https://meteo.gc.ca/rss/weather/45.494_-73.824_f.xml', coords: { lat: 45.494, lon: -73.824 } },
  { id: 'pointe-claire', name: 'Pointe-Claire', rssUrl: 'https://meteo.gc.ca/rss/weather/45.450_-73.817_f.xml', coords: { lat: 45.450, lon: -73.817 } },
  { id: 'sainte-julie', name: 'Sainte-Julie', rssUrl: 'https://meteo.gc.ca/rss/weather/45.585_-73.333_f.xml', coords: { lat: 45.585, lon: -73.333 } },
  { id: 'saint-constant', name: 'Saint-Constant', rssUrl: 'https://meteo.gc.ca/rss/weather/45.368_-73.567_f.xml', coords: { lat: 45.368, lon: -73.567 } },
  { id: 'candiac', name: 'Candiac', rssUrl: 'https://meteo.gc.ca/rss/weather/45.383_-73.517_f.xml', coords: { lat: 45.383, lon: -73.517 } },
  { id: 'la-prairie', name: 'La Prairie', rssUrl: 'https://meteo.gc.ca/rss/weather/45.417_-73.500_f.xml', coords: { lat: 45.417, lon: -73.500 } },
  { id: 'chambly', name: 'Chambly', rssUrl: 'https://meteo.gc.ca/rss/weather/45.450_-73.283_f.xml', coords: { lat: 45.450, lon: -73.283 } },
  { id: 'saint-lambert', name: 'Saint-Lambert', rssUrl: 'https://meteo.gc.ca/rss/weather/45.500_-73.508_f.xml', coords: { lat: 45.500, lon: -73.508 } },
  { id: 'beloeil', name: 'Beloeil', rssUrl: 'https://meteo.gc.ca/rss/weather/45.567_-73.200_f.xml', coords: { lat: 45.567, lon: -73.200 } },
  { id: 'sainte-therese', name: 'Sainte-Thérèse', rssUrl: 'https://meteo.gc.ca/rss/weather/45.638_-73.841_f.xml', coords: { lat: 45.638, lon: -73.841 } },
  { id: 'rosemere', name: 'Rosemère', rssUrl: 'https://meteo.gc.ca/rss/weather/45.637_-73.800_f.xml', coords: { lat: 45.637, lon: -73.800 } },
  { id: 'saint-lazare', name: 'Saint-Lazare', rssUrl: 'https://meteo.gc.ca/rss/weather/45.400_-74.133_f.xml', coords: { lat: 45.400, lon: -74.133 } },
  { id: 'varennes', name: 'Varennes', rssUrl: 'https://meteo.gc.ca/rss/weather/45.683_-73.433_f.xml', coords: { lat: 45.683, lon: -73.433 } },
  { id: 'saint-basile-le-grand', name: 'Saint-Basile-le-Grand', rssUrl: 'https://meteo.gc.ca/rss/weather/45.533_-73.283_f.xml', coords: { lat: 45.533, lon: -73.283 } },
  { id: 'prevost', name: 'Prévost', rssUrl: 'https://meteo.gc.ca/rss/weather/45.867_-74.083_f.xml', coords: { lat: 45.867, lon: -74.083 } },
  { id: 'deux-montagnes', name: 'Deux-Montagnes', rssUrl: 'https://meteo.gc.ca/rss/weather/45.533_-73.900_f.xml', coords: { lat: 45.533, lon: -73.900 } },
  { id: 'lorraine', name: 'Lorraine', rssUrl: 'https://meteo.gc.ca/rss/weather/45.683_-73.783_f.xml', coords: { lat: 45.683, lon: -73.783 } },
  { id: 'sainte-marthe-sur-le-lac', name: 'Sainte-Marthe-sur-le-Lac', rssUrl: 'https://meteo.gc.ca/rss/weather/45.533_-73.933_f.xml', coords: { lat: 45.533, lon: -73.933 } },
  { id: 'pincourt', name: 'Pincourt', rssUrl: 'https://meteo.gc.ca/rss/weather/45.383_-73.983_f.xml', coords: { lat: 45.383, lon: -73.983 } },
  { id: 'mont-saint-hilaire', name: 'Mont-Saint-Hilaire', rssUrl: 'https://meteo.gc.ca/rss/weather/45.567_-73.183_f.xml', coords: { lat: 45.567, lon: -73.183 } },
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
