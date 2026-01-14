/**
 * Composant de gestion des paramètres de notification
 */

import React, { useState, useEffect } from 'react';
import { quebecCities } from '../data/quebecCities';
import {
  isNotificationSupported,
  getPermissionStatus,
  requestNotificationPermission,
  sendNotification,
  getNotificationCities,
  addNotificationCity,
  removeNotificationCity,
  isCityNotificationEnabled,
  getNotificationTheme,
  setNotificationTheme,
  getAvailableThemes,
  sendRainAlert,
  getIncludeWeatherDetails,
  setIncludeWeatherDetails
} from '../services/notificationService';

function Settings() {
  const [permissionStatus, setPermissionStatus] = useState(getPermissionStatus());
  const [requesting, setRequesting] = useState(false);
  const [notificationCities, setNotificationCities] = useState(getNotificationCities());
  const [showCitySelector, setShowCitySelector] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(getNotificationTheme());
  const [availableThemes] = useState(getAvailableThemes());
  const [includeWeatherDetails, setIncludeWeatherDetailsState] = useState(getIncludeWeatherDetails());

  useEffect(() => {
    setPermissionStatus(getPermissionStatus());
    setNotificationCities(getNotificationCities());
  }, []);

  const handleRequestPermission = async () => {
    setRequesting(true);
    try {
      const status = await requestNotificationPermission();
      setPermissionStatus(status);
      
      if (status === 'granted') {
        sendNotification('🎉 Notifications activées!', {
          body: 'Sélectionnez les villes à surveiller pour recevoir des alertes pluie.'
        });
      }
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setRequesting(false);
    }
  };

  const handleTestNotification = () => {
    if (notificationCities.length === 0) {
      sendNotification('⚠️ Aucune ville surveillée', {
        body: 'Veuillez sélectionner au moins une ville pour recevoir des alertes pluie.',
        tag: 'test-notification'
      });
      return;
    }
    
    const randomCity = notificationCities[Math.floor(Math.random() * notificationCities.length)];
    const cityName = getCityName(randomCity);
    
    const weatherData = {
      location: cityName,
      condition: 'Averses modérées',
      temperature: 15
    };
    
    sendRainAlert(true, weatherData);
  };

  const handleToggleCity = (cityId) => {
    if (isCityNotificationEnabled(cityId)) {
      removeNotificationCity(cityId);
    } else {
      addNotificationCity(cityId);
    }
    setNotificationCities(getNotificationCities());
  };

  const handleThemeChange = (themeId) => {
    setNotificationTheme(themeId);
    setSelectedTheme(themeId);
  };

  const handleToggleWeatherDetails = () => {
    const newValue = !includeWeatherDetails;
    setIncludeWeatherDetails(newValue);
    setIncludeWeatherDetailsState(newValue);
  };

  const handleResetNotifications = () => {
    if (window.confirm('Réinitialiser toutes les notifications ? Cela permettra de recevoir à nouveau des alertes pour toutes les villes surveillées aujourd\'hui.')) {      
      notificationCities.forEach(cityId => {
        localStorage.removeItem(`lastRainNotification-${cityId}`);
      });
      
      sendNotification('🔄 Notifications réinitialisées', {
        body: 'Vous pourrez recevoir de nouvelles alertes pluie.',
        tag: 'reset-notification'
      });
    }
  };

  const getCityName = (cityId) => {
    const city = quebecCities.find(c => c.id === cityId);
    return city ? city.name : cityId;
  };

  if (!isNotificationSupported()) {
    return (
      <div className="settings">
        <h3>⚙️ Notifications</h3>
        <p className="warning">
          Les notifications ne sont pas supportées par votre navigateur.
        </p>
      </div>
    );
  }

  return (
    <div className="settings">
      <h3>⚙️ Notifications</h3>
      
      <div className="theme-selector" style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
        <h4 style={{ fontSize: '14px', marginBottom: '10px' }}>🎨 Thème des notifications</h4>
        <div className="theme-options">
          {availableThemes.map(theme => (
            <label 
              key={theme.id} 
              className="theme-option"
              style={{
                display: 'block',
                padding: '10px',
                marginBottom: '8px',
                backgroundColor: selectedTheme === theme.id ? '#e3f2fd' : 'white',
                border: selectedTheme === theme.id ? '2px solid #2196F3' : '1px solid #ddd',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              <input
                type="radio"
                name="notificationTheme"
                value={theme.id}
                checked={selectedTheme === theme.id}
                onChange={() => handleThemeChange(theme.id)}
                style={{ marginRight: '8px' }}
              />
              <span style={{ fontWeight: selectedTheme === theme.id ? 'bold' : 'normal' }}>
                {theme.name}
              </span>
              <div style={{ fontSize: '12px', color: '#666', marginLeft: '24px', marginTop: '4px' }}>
                {theme.description}
              </div>
            </label>
          ))}
        </div>
      </div>
      
      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
        <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', gap: '10px' }}>
          <input
            type="checkbox"
            checked={includeWeatherDetails}
            onChange={handleToggleWeatherDetails}
            style={{ width: '18px', height: '18px', cursor: 'pointer', accentColor: '#2196F3' }}
          />
          <div>
            <div style={{ fontWeight: '600', fontSize: '14px' }}>📊 Inclure les détails météo</div>
            <div style={{ fontSize: '12px', color: '#666', marginTop: '2px' }}>
              Affiche la condition et la température dans les notifications
            </div>
          </div>
        </label>
      </div>
      
      {permissionStatus === 'default' && (
        <div className="notification-prompt">
          <p>Activez les notifications pour être alerté si de la pluie est prévue.</p>
          <button 
            onClick={handleRequestPermission}
            disabled={requesting}
            className="btn-primary"
          >
            {requesting ? 'En cours...' : '🔔 Activer les notifications'}
          </button>
        </div>
      )}

      {permissionStatus === 'granted' && (
        <div className="notification-status enabled">
          <p>✅ Notifications activées</p>
          
          <div style={{ marginTop: '15px' }}>
            <h4 style={{ fontSize: '14px', marginBottom: '10px' }}>
              🏙️ Villes surveillées ({notificationCities.length})
            </h4>
            
            {notificationCities.length > 0 ? (
              <div className="city-list" style={{ marginBottom: '10px' }}>
                {notificationCities.map(cityId => (
                  <div key={cityId} className="city-tag">
                    {getCityName(cityId)}
                    <button 
                      onClick={() => handleToggleCity(cityId)}
                      className="remove-city-btn"
                      title="Retirer"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ fontSize: '12px', color: '#666', marginBottom: '10px' }}>
                Aucune ville surveillée. Cliquez sur "Gérer les villes" pour en ajouter.
              </p>
            )}
            
            <button 
              onClick={() => setShowCitySelector(!showCitySelector)}
              className="btn-secondary"
              style={{ marginRight: '10px' }}
            >
              {showCitySelector ? '✕ Fermer' : '+ Gérer les villes'}
            </button>
            
            <button 
              onClick={handleTestNotification}
              className="btn-secondary"
            >
              🧪 Test
            </button>
            
            <button 
              onClick={handleResetNotifications}
              className="btn-secondary"
              style={{ marginLeft: '10px' }}
              title="Réinitialiser les notifications pour recevoir à nouveau des alertes aujourd'hui"
            >
              🔄 Reset
            </button>
          </div>

          {showCitySelector && (
            <div className="city-selector" style={{ marginTop: '15px' }}>
              <h4 style={{ fontSize: '13px', marginBottom: '10px' }}>
                Sélectionnez les villes :
              </h4>
              <div className="city-checkboxes">
                {quebecCities.map(city => (
                  <label key={city.id} className="city-checkbox">
                    <input
                      type="checkbox"
                      checked={isCityNotificationEnabled(city.id)}
                      onChange={() => handleToggleCity(city.id)}
                    />
                    <span>{city.name}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {permissionStatus === 'denied' && (
        <div className="notification-status denied">
          <p>❌ Notifications bloquées</p>
          <small>
            Pour les activer, modifiez les paramètres de votre navigateur.
          </small>
        </div>
      )}
    </div>
  );
}

export default Settings;
