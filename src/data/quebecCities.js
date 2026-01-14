/**
 * Liste des villes du Québec avec leurs URLs RSS ECCC
 * URLs basées sur les coordonnées de https://meteo.gc.ca/forecast/canada/index_f.html?id=QC
 */

export const quebecCities = [
  // Grandes villes
  { id: 'montreal', name: 'Montréal', rssUrl: 'https://meteo.gc.ca/rss/weather/45.508_-73.588_f.xml' },
  { id: 'quebec', name: 'Québec', rssUrl: 'https://meteo.gc.ca/rss/city/qc-133_f.xml' },
  { id: 'laval', name: 'Laval', rssUrl: 'https://meteo.gc.ca/rss/weather/45.606_-73.712_f.xml' },
  { id: 'gatineau', name: 'Gatineau', rssUrl: 'https://meteo.gc.ca/rss/weather/45.477_-75.701_f.xml' },
  { id: 'longueuil', name: 'Longueuil', rssUrl: 'https://meteo.gc.ca/rss/weather/45.531_-73.518_f.xml' },
  { id: 'sherbrooke', name: 'Sherbrooke', rssUrl: 'https://meteo.gc.ca/rss/weather/45.404_-71.893_f.xml' },
  { id: 'saguenay', name: 'Saguenay', rssUrl: 'https://meteo.gc.ca/rss/weather/48.416_-71.066_f.xml' },
  { id: 'trois-rivieres', name: 'Trois-Rivières', rssUrl: 'https://meteo.gc.ca/rss/weather/46.343_-72.547_f.xml' },
  { id: 'terrebonne', name: 'Terrebonne', rssUrl: 'https://meteo.gc.ca/rss/weather/45.701_-73.647_f.xml' },
  { id: 'levis', name: 'Lévis', rssUrl: 'https://meteo.gc.ca/rss/weather/46.804_-71.177_f.xml' },
  
  // Montérégie
  { id: 'brossard', name: 'Brossard', rssUrl: 'https://meteo.gc.ca/rss/weather/45.459_-73.460_f.xml' },
  { id: 'saint-jean-sur-richelieu', name: 'Saint-Jean-sur-Richelieu', rssUrl: 'https://meteo.gc.ca/rss/weather/45.318_-73.265_f.xml' },
  { id: 'chateauguay', name: 'Châteauguay', rssUrl: 'https://meteo.gc.ca/rss/weather/45.380_-73.750_f.xml' },
  { id: 'drummondville', name: 'Drummondville', rssUrl: 'https://meteo.gc.ca/rss/weather/45.883_-72.484_f.xml' },
  { id: 'granby', name: 'Granby', rssUrl: 'https://meteo.gc.ca/rss/weather/45.403_-72.731_f.xml' },
  { id: 'saint-hyacinthe', name: 'Saint-Hyacinthe', rssUrl: 'https://meteo.gc.ca/rss/weather/45.631_-72.956_f.xml' },
  { id: 'sorel-tracy', name: 'Sorel-Tracy', rssUrl: 'https://meteo.gc.ca/rss/weather/46.042_-73.113_f.xml' },
  { id: 'salaberry-de-valleyfield', name: 'Salaberry-de-Valleyfield', rssUrl: 'https://meteo.gc.ca/rss/weather/45.253_-74.130_f.xml' },
  { id: 'vaudreuil-dorion', name: 'Vaudreuil-Dorion', rssUrl: 'https://meteo.gc.ca/rss/weather/45.402_-74.033_f.xml' },
  
  // Laurentides
  { id: 'saint-jerome', name: 'Saint-Jérôme', rssUrl: 'https://meteo.gc.ca/rss/weather/45.781_-74.004_f.xml' },
  { id: 'mirabel', name: 'Mirabel', rssUrl: 'https://meteo.gc.ca/rss/weather/45.650_-74.083_f.xml' },
  { id: 'blainville', name: 'Blainville', rssUrl: 'https://meteo.gc.ca/rss/weather/45.668_-73.882_f.xml' },
  { id: 'saint-eustache', name: 'Saint-Eustache', rssUrl: 'https://meteo.gc.ca/rss/weather/45.565_-73.905_f.xml' },
  { id: 'boisbriand', name: 'Boisbriand', rssUrl: 'https://meteo.gc.ca/rss/weather/45.613_-73.837_f.xml' },
  { id: 'sainte-agathe-des-monts', name: 'Sainte-Agathe-des-Monts', rssUrl: 'https://meteo.gc.ca/rss/weather/46.050_-74.283_f.xml' },
  { id: 'mont-tremblant', name: 'Mont-Tremblant', rssUrl: 'https://meteo.gc.ca/rss/weather/46.119_-74.596_f.xml' },
  
  // Lanaudière
  { id: 'repentigny', name: 'Repentigny', rssUrl: 'https://meteo.gc.ca/rss/weather/45.742_-73.450_f.xml' },
  { id: 'mascouche', name: 'Mascouche', rssUrl: 'https://meteo.gc.ca/rss/weather/45.747_-73.599_f.xml' },
  { id: 'joliette', name: 'Joliette', rssUrl: 'https://meteo.gc.ca/rss/weather/46.022_-73.443_f.xml' },
  
  // Outaouais
  { id: 'aylmer', name: 'Aylmer (Gatineau)', rssUrl: 'https://meteo.gc.ca/rss/weather/45.396_-75.826_f.xml' },
  
  // Estrie (Cantons-de-l'Est)
  { id: 'magog', name: 'Magog', rssUrl: 'https://meteo.gc.ca/rss/weather/45.266_-72.143_f.xml' },
  { id: 'cowansville', name: 'Cowansville', rssUrl: 'https://meteo.gc.ca/rss/weather/45.203_-72.747_f.xml' },
  { id: 'victoriaville', name: 'Victoriaville', rssUrl: 'https://meteo.gc.ca/rss/weather/46.054_-71.964_f.xml' },
  
  // Mauricie
  { id: 'shawinigan', name: 'Shawinigan', rssUrl: 'https://meteo.gc.ca/rss/weather/46.566_-72.749_f.xml' },
  
  // Saguenay–Lac-Saint-Jean
  { id: 'alma', name: 'Alma', rssUrl: 'https://meteo.gc.ca/rss/weather/48.540_-71.649_f.xml' },
  { id: 'dolbeau-mistassini', name: 'Dolbeau-Mistassini', rssUrl: 'https://meteo.gc.ca/rss/weather/48.878_-72.225_f.xml' },
  { id: 'roberval', name: 'Roberval', rssUrl: 'https://meteo.gc.ca/rss/weather/48.520_-72.226_f.xml' },
  { id: 'saint-felicien', name: 'Saint-Félicien', rssUrl: 'https://meteo.gc.ca/rss/weather/48.651_-72.453_f.xml' },
  
  // Côte-Nord
  { id: 'baie-comeau', name: 'Baie-Comeau', rssUrl: 'https://meteo.gc.ca/rss/weather/49.209_-68.175_f.xml' },
  { id: 'sept-iles', name: 'Sept-Îles', rssUrl: 'https://meteo.gc.ca/rss/weather/50.200_-66.382_f.xml' },
  { id: 'port-cartier', name: 'Port-Cartier', rssUrl: 'https://meteo.gc.ca/rss/weather/50.027_-66.866_f.xml' },
  
  // Bas-Saint-Laurent
  { id: 'rimouski', name: 'Rimouski', rssUrl: 'https://meteo.gc.ca/rss/weather/48.449_-68.524_f.xml' },
  { id: 'riviere-du-loup', name: 'Rivière-du-Loup', rssUrl: 'https://meteo.gc.ca/rss/weather/47.827_-69.534_f.xml' },
  { id: 'matane', name: 'Matane', rssUrl: 'https://meteo.gc.ca/rss/weather/48.849_-67.533_f.xml' },
  { id: 'mont-joli', name: 'Mont-Joli', rssUrl: 'https://meteo.gc.ca/rss/weather/48.586_-68.181_f.xml' },
  { id: 'amqui', name: 'Amqui', rssUrl: 'https://meteo.gc.ca/rss/weather/48.465_-67.424_f.xml' },
  
  // Gaspésie–Îles-de-la-Madeleine
  { id: 'gaspe', name: 'Gaspé', rssUrl: 'https://meteo.gc.ca/rss/weather/48.831_-64.492_f.xml' },
  { id: 'new-richmond', name: 'New Richmond', rssUrl: 'https://meteo.gc.ca/rss/weather/48.165_-65.867_f.xml' },
  { id: 'chandler', name: 'Chandler', rssUrl: 'https://meteo.gc.ca/rss/weather/48.345_-64.679_f.xml' },
  { id: 'cap-chat', name: 'Cap-Chat', rssUrl: 'https://meteo.gc.ca/rss/weather/49.089_-66.685_f.xml' },
  { id: 'iles-de-la-madeleine', name: 'Îles-de-la-Madeleine', rssUrl: 'https://meteo.gc.ca/rss/weather/47.380_-61.864_f.xml' },
  
  // Abitibi-Témiscamingue
  { id: 'rouyn-noranda', name: 'Rouyn-Noranda', rssUrl: 'https://meteo.gc.ca/rss/weather/48.236_-79.023_f.xml' },
  { id: 'val-dor', name: "Val-d'Or", rssUrl: 'https://meteo.gc.ca/rss/weather/48.097_-77.782_f.xml' },
  { id: 'amos', name: 'Amos (Abitibi)', rssUrl: 'https://meteo.gc.ca/rss/weather/48.574_-78.116_f.xml' },
  { id: 'la-sarre', name: 'La Sarre', rssUrl: 'https://meteo.gc.ca/rss/weather/48.801_-79.200_f.xml' },
  { id: 'ville-marie', name: 'Ville-Marie', rssUrl: 'https://meteo.gc.ca/rss/weather/47.333_-79.433_f.xml' },
  
  // Chaudière-Appalaches
  { id: 'thetford-mines', name: 'Thetford Mines', rssUrl: 'https://meteo.gc.ca/rss/weather/46.094_-71.298_f.xml' },
  { id: 'saint-georges', name: 'Saint-Georges', rssUrl: 'https://meteo.gc.ca/rss/weather/46.116_-70.667_f.xml' },
  { id: 'montmagny', name: 'Montmagny', rssUrl: 'https://meteo.gc.ca/rss/weather/46.981_-70.555_f.xml' },
  { id: 'beauceville', name: 'Beauceville', rssUrl: 'https://meteo.gc.ca/rss/weather/46.212_-70.774_f.xml' },
  
  // Capitale-Nationale
  { id: 'beauport', name: 'Beauport', rssUrl: 'https://meteo.gc.ca/rss/weather/46.876_-71.191_f.xml' },
  { id: 'sainte-foy', name: 'Sainte-Foy', rssUrl: 'https://meteo.gc.ca/rss/weather/46.776_-71.293_f.xml' },
  { id: 'charlesbourg', name: 'Charlesbourg', rssUrl: 'https://meteo.gc.ca/rss/weather/46.854_-71.275_f.xml' },
  { id: 'baie-saint-paul', name: 'Baie-Saint-Paul', rssUrl: 'https://meteo.gc.ca/rss/weather/47.437_-70.509_f.xml' },
  { id: 'la-malbaie', name: 'La Malbaie', rssUrl: 'https://meteo.gc.ca/rss/weather/47.655_-70.153_f.xml' },
  
  // Nord-du-Québec
  { id: 'chibougamau', name: 'Chibougamau', rssUrl: 'https://meteo.gc.ca/rss/weather/49.915_-74.373_f.xml' },
  { id: 'kuujjuaq', name: 'Kuujjuaq', rssUrl: 'https://meteo.gc.ca/rss/weather/58.106_-68.398_f.xml' },
  { id: 'inukjuak', name: 'Inukjuak', rssUrl: 'https://meteo.gc.ca/rss/weather/58.455_-78.104_f.xml' },
  { id: 'kuujjuarapik', name: 'Kuujjuarapik', rssUrl: 'https://meteo.gc.ca/rss/weather/55.279_-77.764_f.xml' },
  
  // Autres villes importantes
  { id: 'saint-bruno-de-montarville', name: 'Saint-Bruno-de-Montarville', rssUrl: 'https://meteo.gc.ca/rss/weather/45.533_-73.350_f.xml' },
  { id: 'dollard-des-ormeaux', name: 'Dollard-des-Ormeaux', rssUrl: 'https://meteo.gc.ca/rss/weather/45.494_-73.824_f.xml' },
  { id: 'pointe-claire', name: 'Pointe-Claire', rssUrl: 'https://meteo.gc.ca/rss/weather/45.450_-73.817_f.xml' },
  { id: 'sainte-julie', name: 'Sainte-Julie', rssUrl: 'https://meteo.gc.ca/rss/weather/45.585_-73.333_f.xml' },
  { id: 'saint-constant', name: 'Saint-Constant', rssUrl: 'https://meteo.gc.ca/rss/weather/45.368_-73.567_f.xml' },
  { id: 'candiac', name: 'Candiac', rssUrl: 'https://meteo.gc.ca/rss/weather/45.383_-73.517_f.xml' },
  { id: 'la-prairie', name: 'La Prairie', rssUrl: 'https://meteo.gc.ca/rss/weather/45.417_-73.500_f.xml' },
  { id: 'chambly', name: 'Chambly', rssUrl: 'https://meteo.gc.ca/rss/weather/45.450_-73.283_f.xml' },
  { id: 'saint-lambert', name: 'Saint-Lambert', rssUrl: 'https://meteo.gc.ca/rss/weather/45.500_-73.508_f.xml' },
  { id: 'beloeil', name: 'Beloeil', rssUrl: 'https://meteo.gc.ca/rss/weather/45.567_-73.200_f.xml' },
  { id: 'sainte-therese', name: 'Sainte-Thérèse', rssUrl: 'https://meteo.gc.ca/rss/weather/45.638_-73.841_f.xml' },
  { id: 'rosemere', name: 'Rosemère', rssUrl: 'https://meteo.gc.ca/rss/weather/45.637_-73.800_f.xml' },
  { id: 'saint-lazare', name: 'Saint-Lazare', rssUrl: 'https://meteo.gc.ca/rss/weather/45.400_-74.133_f.xml' },
  { id: 'varennes', name: 'Varennes', rssUrl: 'https://meteo.gc.ca/rss/weather/45.683_-73.433_f.xml' },
  { id: 'saint-basile-le-grand', name: 'Saint-Basile-le-Grand', rssUrl: 'https://meteo.gc.ca/rss/weather/45.533_-73.283_f.xml' },
  { id: 'prevost', name: 'Prévost', rssUrl: 'https://meteo.gc.ca/rss/weather/45.867_-74.083_f.xml' },
  { id: 'deux-montagnes', name: 'Deux-Montagnes', rssUrl: 'https://meteo.gc.ca/rss/weather/45.533_-73.900_f.xml' },
  { id: 'lorraine', name: 'Lorraine', rssUrl: 'https://meteo.gc.ca/rss/weather/45.683_-73.783_f.xml' },
  { id: 'sainte-marthe-sur-le-lac', name: 'Sainte-Marthe-sur-le-Lac', rssUrl: 'https://meteo.gc.ca/rss/weather/45.533_-73.933_f.xml' },
  { id: 'pincourt', name: 'Pincourt', rssUrl: 'https://meteo.gc.ca/rss/weather/45.383_-73.983_f.xml' },
  { id: 'mont-saint-hilaire', name: 'Mont-Saint-Hilaire', rssUrl: 'https://meteo.gc.ca/rss/weather/45.567_-73.183_f.xml' },
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
