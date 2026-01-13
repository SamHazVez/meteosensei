/**
 * Composant de gestion des paramètres de notification
 */

import React, { useState, useEffect } from 'react';
import {
  isNotificationSupported,
  getPermissionStatus,
  requestNotificationPermission,
  sendNotification
} from '../services/notificationService';

function Settings() {
  const [permissionStatus, setPermissionStatus] = useState(getPermissionStatus());
  const [requesting, setRequesting] = useState(false);

  useEffect(() => {
    setPermissionStatus(getPermissionStatus());
  }, []);

  const handleRequestPermission = async () => {
    setRequesting(true);
    try {
      const status = await requestNotificationPermission();
      setPermissionStatus(status);
      
      if (status === 'granted') {
        sendNotification('🎉 Notifications activées!', {
          body: 'Vous recevrez une alerte si de la pluie est prévue.'
        });
      }
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setRequesting(false);
    }
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
          <small>Vous recevrez une alerte si de la pluie est prévue aujourd'hui.</small>
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
