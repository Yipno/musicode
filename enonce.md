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
1. Créez un dossier `OH-MongoDB` sur votre bureau
2. Ouvrez ce dossier dans VS Code
3. Clonez le repository : `git clone <url>`
4. Installez les dépendances : `yarn install`

### Étape 2 : Création des Modèles

#### 🎤 Artistes (`models/artists.js`)
- `name` : String *(requis)*
- `genre` : String
- `country` : String
- `formedYear` : Number
- `stats` : sous-document avec `monthlyListeners` et `totalAlbums` *(Number)*

#### 💿 Albums (`models/albums.js`)
- `title` : String *(requis)*
- `artist` : ObjectId → référence vers `Artist`
- `releaseYear` : Number
- `genre` : String
- `numberOfTracks` : Number

#### 🎵 Playlists (`models/playlists.js`)
- `name` : String *(requis)*
- `createdBy` : String
- `albums` : `[ObjectId]` → référence vers `Album`
- `isPublic` : Boolean *(défaut : true)*
- `createdAt` : Date *(défaut : Date.now)*

### Étape 3 : Implémentation dans `app.js`

#### 🎤 Artistes
- ✅ Étape 1 — Créer 2 artistes différents
- ✅ Étape 2 — Afficher tous les artistes

#### 💿 Albums
- ✅ Étape 3 — Créer 3 albums associés à des artistes existants
- ✅ Étape 4 — Afficher un album avec les infos complètes de l'artiste *(populate)*

#### 🎵 Playlists
- ✅ Étape 5 — Créer une playlist contenant plusieurs albums
- ✅ Étape 6 — Modifier le nom de la playlist
- ✅ Étape 7 — Supprimer la playlist

## 🚀 Bonus
- ✨ Afficher uniquement les playlists publiques (`isPublic: true`)

---

:desktop_computer: Happy Coding! 🎶
