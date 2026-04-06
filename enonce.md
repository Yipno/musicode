# Office-Hours — MongoDB & Mongoose

## 📚 Exercice Pratique : Gestion d'une Plateforme Musicale

## 🎯 Objectif

Créer une application Node.js pour gérer une plateforme musicale avec des artistes, des albums et des playlists en utilisant **MongoDB** et **Mongoose**.

## 📋 Contexte

Vous êtes développeur junior et votre client, **MusiCode**, souhaite lancer sa propre plateforme de streaming. Vous devez créer le back-end qui permettra de gérer les artistes, leurs albums et les playlists des utilisateurs.

## 📁 Structure du Projet

```
musicode/
├── models/
│   ├── connection.js
│   ├── artists.js
│   ├── albums.js
│   └── playlists.js
├── app.js
├── package.json
└── README.md
```

## 📝 Étapes de l'Exercice

### Étape 1 : Récupération du Projet

1. Créez un dossier `OH-MongoDB` 
2. Ouvrez ce dossier dans VS Code
3. Clonez le repository : `git clone https://github.com/Yipno/musicode`
4. Installez les dépendances : `yarn install`
5. Installez mongoose avec `yarn add mongoose`
6. Créez une base de données dans MongoDB Atlas ou Compass
7. Configurez votre fichier models/connection.js

### Étape 2 : Création des Modèles

#### 🎤 Artistes (`models/artists.js`)

- `name` : String _(requis)_
- `genre` : String
- `country` : String
- `formedYear` : Number
- `stats` : sous-document avec `monthlyListeners` et `totalAlbums` _(Number)_

#### 💿 Albums (`models/albums.js`)

- `title` : String _(requis)_
- `artist` : ObjectId → référence vers `Artist`
- `releaseYear` : Number
- `genre` : String
- `numberOfTracks` : Number

#### 🎵 Playlists (`models/playlists.js`)

- `name` : String _(requis)_
- `createdBy` : String
- `albums` : `[ObjectId]` → référence vers `Album`
- `isPublic` : Boolean _(défaut : true)_
- `createdAt` : Date _(défaut : Date.now)_

### Étape 3 : Implémentation dans `app.js`

#### 🎤 Artistes

- ✅ Étape 1 — Créer 2 artistes différents
- ✅ Étape 2 — Afficher tous les artistes

#### 💿 Albums

- ✅ Étape 3 — Créer 3 albums associés à des artistes existants
- ✅ Étape 4 — Afficher un album avec les infos complètes de l'artiste _(populate)_

#### 🎵 Playlists

- ✅ Étape 5 — Créer une playlist contenant plusieurs albums
- ✅ Étape 6 — Modifier le nom de la playlist
- ✅ Étape 7 — Supprimer la playlist
