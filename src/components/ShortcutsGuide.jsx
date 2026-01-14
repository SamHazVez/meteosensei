/**
 * Guide pour configurer l'automatisation iOS avec Raccourcis
 */

import React from 'react';

function ShortcutsGuide({ onClose }) {
  return (
    <div className="shortcuts-guide-overlay" onClick={onClose}>
      <div className="shortcuts-guide-content" onClick={(e) => e.stopPropagation()}>
        <div className="shortcuts-guide-header">
          <h2>⚡ Automatisation iOS</h2>
          <button className="close-btn" onClick={onClose} aria-label="Fermer">×</button>
        </div>

        <div className="shortcuts-guide-body">
          <div className="guide-intro">
            <p className="guide-important">
              💡 <strong>Important:</strong> Les PWA sur iOS ne peuvent pas envoyer de notifications automatiques 
              en arrière-plan. Cette solution utilise l'app <strong>Raccourcis</strong> pour vérifier la météo 
              automatiquement.
            </p>
          </div>

          <section className="guide-section">
            <h3>📱 Étape 1: Préparer l'app</h3>
            <ol className="guide-steps">
              <li>Ouvrez MeteoSensei</li>
              <li>Allez dans <strong>Paramètres</strong></li>
              <li>Activez les <strong>notifications</strong></li>
              <li>Sélectionnez les <strong>villes à surveiller</strong></li>
            </ol>
          </section>

          <section className="guide-section">
            <h3>⚡ Étape 2: Créer le raccourci</h3>
            <div className="guide-warning" style={{ marginBottom: '16px' }}>
              <strong>⚠️ Important:</strong> Les PWA n'apparaissent pas dans la liste des apps iOS. 
              Il faut utiliser l'URL de l'app.
            </div>
            
            <ol className="guide-steps">
              <li>Ouvrez l'app <strong>Raccourcis</strong> (préinstallée sur iOS)</li>
              <li>Appuyez sur le bouton <strong>+</strong> en haut à droite</li>
              <li>Appuyez sur <strong>Ajouter une action</strong></li>
              <li>Cherchez et sélectionnez <strong>Ouvrir une URL</strong></li>
              <li>Dans le champ URL, entrez: <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px', fontSize: '13px' }}>http://samhazvez.github.io/meteosensei</code></li>
              <li>Ajoutez une autre action: <strong>Attendre</strong></li>
              <li>Réglez le délai à <strong>10 secondes</strong></li>
              <li>Nommez le raccourci: <strong>"Vérifier météo"</strong></li>
              <li>Appuyez sur <strong>OK</strong></li>
            </ol>

            <div className="guide-tip">
              <strong>💡 Astuce:</strong> Le raccourci ouvre l'app via son URL, attend 10 secondes 
              qu'elle vérifie toutes les villes surveillées, puis se ferme automatiquement quand vous 
              changez d'app ou verrouillez l'écran.
            </div>
          </section>

          <section className="guide-section">
            <h3>🔔 Étape 3: Automatiser</h3>
            <ol className="guide-steps">
              <li>Dans Raccourcis, allez dans l'onglet <strong>Automatisation</strong></li>
              <li>Appuyez sur <strong>+</strong> ou <strong>Créer une automatisation personnelle</strong></li>
              <li>Sélectionnez <strong>Heure de la journée</strong></li>
              <li>Configurez l'horaire (ex: <strong>7h00</strong> et <strong>18h00</strong>)</li>
              <li>Choisissez <strong>Quotidien</strong></li>
              <li>Appuyez sur <strong>Suivant</strong></li>
              <li>Cherchez et ajoutez <strong>Exécuter un raccourci</strong></li>
              <li>Sélectionnez le raccourci <strong>"Vérifier météo"</strong></li>
              <li><strong>Désactivez</strong> l'option "Demander avant d'exécuter"</li>
              <li>Appuyez sur <strong>OK</strong> puis <strong>Terminé</strong></li>
            </ol>

            <div className="guide-warning">
              <strong>⚠️ Important:</strong> Vous devez désactiver "Demander avant d'exécuter" 
              pour que l'automatisation fonctionne sans intervention.
            </div>
          </section>

          <section className="guide-section">
            <h3>✅ Recommandations</h3>
            <ul className="guide-recommendations">
              <li><strong>Matin:</strong> Automatisation à 7h00 pour planifier votre journée</li>
              <li><strong>Soir:</strong> Automatisation à 18h00 pour le lendemain matin</li>
              <li><strong>Vérification manuelle:</strong> Utilisez le bouton "Actualiser" dans l'app</li>
              <li><strong>Batterie:</strong> L'automatisation consomme très peu de batterie (5-10 secondes)</li>
            </ul>
          </section>

          <section className="guide-section">
            <h3>🔧 Dépannage</h3>
            <div className="guide-troubleshooting">
              <div className="troubleshooting-item">
                <strong>Pas de notifications?</strong>
                <ul>
                  <li>Vérifiez que les notifications sont activées dans Réglages iOS</li>
                  <li>Assurez-vous d'avoir sélectionné des villes à surveiller</li>
                  <li>L'app ne notifie qu'une fois par jour par ville</li>
                </ul>
              </div>
              
              <div className="troubleshooting-item">
                <strong>L'automatisation ne fonctionne pas?</strong>
                <ul>
                  <li>Vérifiez que "Demander avant d'exécuter" est désactivé</li>
                  <li>Assurez-vous d'avoir utilisé <strong>"Ouvrir une URL"</strong> et non "Ouvrir une App"</li>
                  <li>Vérifiez que l'URL est correcte: http://samhazvez.github.io/meteosensei</li>
                  <li>Testez le raccourci manuellement d'abord</li>
                  <li>Attendez au moins 10 secondes pour que toutes les villes soient vérifiées</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="shortcuts-guide-footer">
          <button className="btn-primary" onClick={onClose}>
            Compris !
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShortcutsGuide;
