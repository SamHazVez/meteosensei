/**
 * MeteoSensei - Application météo PWA pour le Québec
 * Affiche les prévisions et envoie des notifications si pluie prévue
 */

import "./assets/css/weather-styles.css";
import { useState, useEffect } from "react";
import WeatherCard from "./components/WeatherCard";
import LocationSelector from "./components/LocationSelector";
import Settings from "./components/Settings";
import { getDefaultCity, getCityById } from "./data/quebecCities";
import { fetchWeatherRSS } from "./services/rssParser";
import { analyzeWeather, generateRainNotificationMessage } from "./services/weatherAnalyzer";
import { 
  sendRainAlert, 
  hasNotifiedToday, 
  markNotificationSent,
  getPermissionStatus
} from "./services/notificationService";

export default function App() {
  const [selectedCityId, setSelectedCityId] = useState(() => {
    return localStorage.getItem('selectedCity') || getDefaultCity().id;
  });
  
  const [weatherAnalysis, setWeatherAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadWeather = async (cityId) => {
    setLoading(true);
    setError(null);
    
    try {
      const city = getCityById(cityId);
      if (!city) {
        throw new Error('Ville non trouvée');
      }

      const weatherData = await fetchWeatherRSS(city.rssUrl);
      const analysis = analyzeWeather(weatherData);
      
      setWeatherAnalysis(analysis);

      if (analysis.rain.hasRain && !hasNotifiedToday() && getPermissionStatus() === 'granted') {
        const message = generateRainNotificationMessage(analysis);
        sendRainAlert(message, analysis.rain.details);
        markNotificationSent();
      }
    } catch (err) {
      console.error('Erreur chargement météo:', err);
      setError(err.message || 'Impossible de charger les prévisions');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadWeather(selectedCityId);
    localStorage.setItem('selectedCity', selectedCityId);
  }, [selectedCityId]);

  const handleRefresh = () => {
    loadWeather(selectedCityId);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>MeteoSensei</h1>
        <p className="subtitle">Prévisions météo pour le Québec</p>
      </header>

      <main className="app-main">
        <div className="controls">
          <LocationSelector 
            selectedCity={selectedCityId}
            onCityChange={setSelectedCityId}
          />
          <button 
            onClick={handleRefresh}
            disabled={loading}
            className="btn-refresh"
          >
            🔄 {loading ? 'Chargement...' : 'Actualiser'}
          </button>
        </div>

        <WeatherCard 
          weatherAnalysis={weatherAnalysis}
          loading={loading}
          error={error}
        />

        <Settings />
      </main>

      <footer className="app-footer">
        <small>
          Données: Environnement et Changement Climatique Canada (ECCC)
        </small>
      </footer>
    </div>
  );
}
