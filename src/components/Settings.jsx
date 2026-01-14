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
  isCityNotificationEnabled
} from '../services/notificationService';

function Settings() {
  const [permissionStatus, setPermissionStatus] = useState(getPermissionStatus());
  const [requesting, setRequesting] = useState(false);
  const [notificationCities, setNotificationCities] = useState(getNotificationCities());
  const [showCitySelector, setShowCitySelector] = useState(false);

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
    
    sendNotification(`🧪 Test - ${cityName}`, {
      body: '☔ Alerte pluie : Averses modérées prévues - Ceci est un test',
      tag: 'test-notification'
    });
  };

  const handleToggleCity = (cityId) => {
    if (isCityNotificationEnabled(cityId)) {
      removeNotificationCity(cityId);
    } else {
      addNotificationCity(cityId);
    }
    setNotificationCities(getNotificationCities());
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
