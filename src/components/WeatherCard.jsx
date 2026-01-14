/**
 * Composant d'affichage de la carte météo
 * Affiche les prévisions météo du jour pour une ville
 */

import React from 'react';

function WeatherCard({ weatherAnalysis, loading, error }) {
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
    </div>
  );
}

export default WeatherCard;
