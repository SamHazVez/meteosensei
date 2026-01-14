/**
 * MeteoSensei - Application météo PWA pour le Québec
 * Affiche les prévisions et envoie des notifications si pluie prévue
 */

import "./assets/css/weather-styles.css";
import { useState, useEffect } from "react";
import WeatherCard from "./components/WeatherCard";
import LocationSelector from "./components/LocationSelector";
import Settings from "./components/Settings";
import ShortcutsGuide from "./components/ShortcutsGuide";
import { getDefaultCity, getCityById } from "./data/quebecCities";
import { fetchWeatherRSS } from "./services/rssParser";
import { analyzeWeather, generateRainNotificationMessage } from "./services/weatherAnalyzer";
import { 
  sendRainAlert, 
  getPermissionStatus,
  isCityNotificationEnabled,
  hasNotifiedTodayForCity,
  markNotificationSentForCity,
  getNotificationCities
} from "./services/notificationService";

export default function App() {
  const [selectedCityId, setSelectedCityId] = useState(() => {
    return localStorage.getItem('selectedCity') || getDefaultCity().id;
  });
  
  const [weatherAnalysis, setWeatherAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showShortcutsGuide, setShowShortcutsGuide] = useState(false);

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

      if (analysis.isRaining && 
          isCityNotificationEnabled(cityId) && 
          !hasNotifiedTodayForCity(cityId) && 
          getPermissionStatus() === 'granted') {
        const weatherData = {
          location: city.name,
          condition: analysis.condition,
          temperature: analysis.temperature
        };
        
        sendRainAlert(true, weatherData);
        markNotificationSentForCity(cityId);
      }
    } catch (err) {
      console.error('Erreur chargement météo:', err);
      setError(err.message || 'Impossible de charger les prévisions');
    } finally {
      setLoading(false);
    }
  };

  const checkAllMonitoredCities = async () => {
    const monitoredCities = getNotificationCities();
    
    if (monitoredCities.length === 0 || getPermissionStatus() !== 'granted') {
      return;
    }

    for (const cityId of monitoredCities) {
      if (hasNotifiedTodayForCity(cityId)) {
        continue;
      }

      try {
        const city = getCityById(cityId);
        if (!city) continue;

        const weatherData = await fetchWeatherRSS(city.rssUrl);
        const analysis = analyzeWeather(weatherData);

        if (analysis.isRaining) {
          const notificationData = {
            location: city.name,
            condition: analysis.condition,
            temperature: analysis.temperature
          };
          
          sendRainAlert(true, notificationData);
          markNotificationSentForCity(cityId);
        }
      } catch (err) {
        console.error(`[MeteoSensei] Erreur pour ${cityId}:`, err);
      }
    }
  };

  useEffect(() => {
    loadWeather(selectedCityId);
    localStorage.setItem('selectedCity', selectedCityId);
    
    checkAllMonitoredCities();
  }, [selectedCityId]);

  const handleRefresh = () => {
    loadWeather(selectedCityId);
    checkAllMonitoredCities();
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

        <div className="ios-automation-banner">
          <div className="banner-content">
            <span className="banner-icon">📱</span>
            <div className="banner-text">
              <strong>Utilisateur iOS?</strong> Configurez l'automatisation pour des vérifications automatiques
            </div>
            <button 
              className="btn-banner"
              onClick={() => setShowShortcutsGuide(true)}
            >
              Guide
            </button>
          </div>
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

      {showShortcutsGuide && (
        <ShortcutsGuide onClose={() => setShowShortcutsGuide(false)} />
      )}
    </div>
  );
}
