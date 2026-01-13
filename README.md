# 🌦️ MétéoSensei - Météo Québec

Application météo Progressive Web App (PWA) orientée Québec avec notifications de pluie, basée sur les flux RSS d'Environnement et Changement Climatique Canada (ECCC).

## 📱 Fonctionnalités

- ✅ **Prévisions météo** pour les principales villes du Québec
- ✅ **Détection automatique de pluie** pour aujourd'hui
- ✅ **Notifications push** si pluie prévue
- ✅ **Carte interactive** avec marqueurs météo
- ✅ **Vue grille** avec cartes météo
- ✅ **PWA installable** sur iPhone et autres appareils
- ✅ **Fonctionne hors ligne** (après la première visite)
- ✅ **Aucun backend requis** - entièrement statique

## 🏙️ Villes couvertes

- Montréal
- Québec
- Gatineau
- Sherbrooke
- Trois-Rivières
- Saguenay

## 🚀 Démarrage rapide

### Installation

```bash
npm install
```

### Développement local

```bash
npm start
```

L'application sera disponible sur [http://localhost:3000](http://localhost:3000)

### Build de production

```bash
npm run build
```

### Déploiement sur GitHub Pages

```bash
npm run deploy
```

## 🛠️ Technologies utilisées

- **React** - Framework UI
- **Leaflet / React-Leaflet** - Cartographie interactive
- **Service Worker** - PWA et cache offline
- **RSS ECCC** - Données météorologiques officielles
- **GitHub Pages** - Hébergement statique

## 📡 Source des données

Les données météo proviennent des flux RSS officiels d'**Environnement et Changement Climatique Canada (ECCC)**.

## 🔔 Notifications

Pour recevoir des notifications de pluie sur iPhone :

1. Ouvrez l'application dans Safari
2. Cliquez sur le bouton "Partager"
3. Sélectionnez "Sur l'écran d'accueil"
4. Une fois installée, cliquez sur "🔔 Activer les notifications"
5. Autorisez les notifications

L'application vérifiera automatiquement les prévisions toutes les heures et vous notifiera si de la pluie est prévue.

## 🔒 Sécurité et Confidentialité

- ✅ Aucune donnée utilisateur collectée
- ✅ Pas de tracking
- ✅ Pas d'authentification requise
- ✅ Fonctionne entièrement côté client
- ✅ HTTPS via GitHub Pages