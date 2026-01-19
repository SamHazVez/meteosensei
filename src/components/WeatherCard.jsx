/**
 * Composant d'affichage de la carte météo
 * Affiche les prévisions météo du jour pour une ville
 */

import React from 'react';
import { isCityNotificationEnabled, addNotificationCity, removeNotificationCity } from '../services/notificationService';
import { getCityById } from '../data/quebecCities';

function WeatherCard({ weatherAnalysis, loading, error, cityId, onWatchToggle }) {
  if (loading) {
    return (
      <div className="weather-card loading">
        <div className="spinner"></div>
        <p>Chargement des prévisions...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="weather-card error">
        <h3>❌ Erreur</h3>
        <p>{error}</p>
      </div>
    );
  }

  if (!weatherAnalysis || !weatherAnalysis.hasData) {
    return (
      <div className="weather-card no-data">
        <p>Aucune donnée météo disponible</p>
      </div>
    );
  }

  const { location, condition, temperature, isRaining, tonight, updated } = weatherAnalysis;

  const getECCCPageUrl = () => {
    if (!cityId) return null;
    
    const city = getCityById(cityId);
    if (!city) return null;
    
    if (city.coords) {
      return `https://meteo.gc.ca/fr/location/index.html?coords=${city.coords.lat},${city.coords.lon}`;
    }
    
    const rssUrl = city.rssUrl;
    const coordMatch = rssUrl.match(/weather\/([\d.]+)_([-\d.]+)_f\.xml/);
    
    if (coordMatch) {
      const [_, lat, lon] = coordMatch;
      return `https://meteo.gc.ca/fr/location/index.html?coords=${lat},${lon}`;
    }
    
    return 'https://meteo.gc.ca/';
  };

  const isWatched = cityId ? isCityNotificationEnabled(cityId) : false;

  const handleWatchToggle = () => {
    if (!cityId) return;
    
    if (isWatched) {
      removeNotificationCity(cityId);
    } else {
      addNotificationCity(cityId);
    }
    
    if (onWatchToggle) {
      onWatchToggle();
    }
  };

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2>{location.split('-')[0].trim()}</h2>
        <small>
          {new Date(updated).toLocaleTimeString('fr-CA', { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </small>
      </div>

      <div className="weather-today">
        {temperature !== null && (
          <div className="temperature">
            <span className="temp-value">{temperature}°C</span>
          </div>
        )}
        <h3 className="condition">{condition}</h3>
        {isRaining && (
          <div className="rain-alert">☔ Il pleut actuellement</div>
        )}
        {weatherAnalysis.isSnowing && (
          <div className="snow-alert">❄️ Il neige actuellement</div>
        )}
      </div>

      {tonight && (
        <div className="weather-tonight">
          <h4 className="tonight-header">🌙 Ce soir</h4>
          <p className="tonight-title">{tonight.title}</p>
          {tonight.minTemp !== null && (
            <div className="tonight-temp">Min: {tonight.minTemp}°C</div>
          )}
        </div>
      )}

      <div className="weather-actions">
        <a 
          href={getECCCPageUrl()} 
          target="_blank" 
          rel="noopener noreferrer"
          className="eccc-link"
          title="Voir sur le site d'Environnement Canada"
        >
          🌐 Détails ECCC
        </a>
        
        {!isWatched && (
          <button 
            onClick={handleWatchToggle}
            className="watch-button"
            title="Surveiller cette ville pour les notifications"
          >
            🔕 Surveiller
          </button>
        )}
      </div>
    </div>
  );
}

export default WeatherCard;
