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

## 📱 Installation comme PWA

### Sur iPhone (iOS)

1. Ouvrez dans Safari
2. Appuyez sur l'icône "Partager" (carré avec flèche vers le haut)
3. Faites défiler et sélectionnez "Sur l'écran d'accueil"
4. Nommez l'app et appuyez sur "Ajouter"

### Sur Android

1. Ouvrez dans Chrome
2. Appuyez sur le menu (trois points)
3. Sélectionnez "Installer l'application"

### Sur Desktop

1. Ouvrez dans Chrome/Edge
2. Cliquez sur l'icône d'installation dans la barre d'adresse
3. Ou allez dans Menu > Installer MétéoSensei

## 🌐 Architecture

```
meteosensei/
├── public/
│   ├── index.html          # Page HTML principale
│   ├── manifest.json       # Manifest PWA
│   ├── service-worker.js   # Service Worker pour cache offline
│   └── icons/              # Icônes de l'app
├── src/
│   ├── App.js              # Composant principal
│   ├── index.js            # Point d'entrée
│   ├── components/
│   │   ├── WeatherCard.jsx    # Carte météo ville
│   │   ├── WeatherDetail.jsx  # Détails prévisions
│   │   └── WeatherMap.jsx     # Carte interactive
│   ├── services/
│   │   ├── weatherService.js       # Récupération RSS ECCC
│   │   └── notificationService.js  # Gestion notifications
│   └── assets/
│       └── css/
│           └── styles.css   # Styles de l'app
└── package.json
```

## 🔒 Sécurité et Confidentialité

- ✅ Aucune donnée utilisateur collectée
- ✅ Pas de tracking
- ✅ Pas d'authentification requise
- ✅ Fonctionne entièrement côté client
- ✅ HTTPS via GitHub Pages

## 📝 Licence

MIT

## 👨‍💻 Développement

L'application utilise un proxy CORS (`allorigins.win`) pour accéder aux flux RSS d'ECCC depuis le navigateur. En production, vous pourriez vouloir utiliser votre propre proxy ou configurer CORS sur votre serveur.

## 🐛 Problèmes connus

- Les flux RSS d'ECCC peuvent parfois être lents à répondre
- Le proxy CORS peut avoir des limites de débit
- Les notifications nécessitent HTTPS (fonctionnel sur GitHub Pages)

## 🎯 Améliorations futures

- [ ] Ajout de plus de villes québécoises
- [ ] Radar météo
- [ ] Alertes météo d'urgence
- [ ] Sélection de ville personnalisée
- [ ] Thème sombre
- [ ] Support multilingue (anglais)

---

Fait avec ❤️ pour le Québec
