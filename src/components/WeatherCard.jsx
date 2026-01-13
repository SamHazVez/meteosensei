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

  const { location, today, rain, updated } = weatherAnalysis;

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2>{location.split('-')[0].trim()}</h2>
        <small>
          Mis à jour: {new Date(updated).toLocaleTimeString('fr-CA', { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </small>
      </div>

      <div className="weather-today">
        <h3>{today.title}</h3>
        <p className="weather-summary">{today.summary}</p>
      </div>

      {rain.hasRain && (
        <div className={`rain-alert ${rain.confidence}`}>
          {rain.confidence === 'high' ? '☔' : '🌧️'}
          <strong>
            {rain.confidence === 'high' 
              ? 'Pluie prévue aujourd\'hui' 
              : 'Risque de pluie'}
          </strong>
          {rain.probability && (
            <span className="probability"> ({rain.probability}%)</span>
          )}
        </div>
      )}

      {!rain.hasRain && (
        <div className="no-rain">
          ☀️ <strong>Pas de pluie prévue aujourd'hui</strong>
        </div>
      )}
    </div>
  );
}

export default WeatherCard;
