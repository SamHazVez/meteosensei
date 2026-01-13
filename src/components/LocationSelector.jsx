/**
 * Composant de sélection de ville
 * Permet à l'utilisateur de choisir une ville du Québec
 */

import React from 'react';
import { quebecCities } from '../data/quebecCities';

function LocationSelector({ selectedCity, onCityChange }) {
  return (
    <div className="location-selector">
      <label htmlFor="city-select">
        <span className="location-icon">📍</span>
        Ville :
      </label>
      <select
        id="city-select"
        value={selectedCity}
        onChange={(e) => onCityChange(e.target.value)}
        className="city-select"
      >
        {quebecCities.map(city => (
          <option key={city.id} value={city.id}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LocationSelector;
