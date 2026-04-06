# 🎵 MusiCode — Exercice MongoDB & Mongoose

## 🚀 Démarrage

```bash
git clone <url-du-repo>
cd musicode
yarn install
```

## 📋 Consignes

Ouvre les fichiers dans cet ordre :

1. `models/artists.js` → compléter le schéma
2. `models/albums.js` → compléter le schéma
3. `models/playlists.js` → compléter le schéma
4. `app.js` → implémenter les 9 étapes

## ▶️ Lancer l'application

```bash
node app.js
```

## 💡 Rappels

| Opération | Méthode Mongoose |
|---|---|
| Créer | `Model.create({...})` |
| Lire tous | `Model.find()` |
| Lire un | `Model.findOne({ champ: valeur })` |
| Modifier | `Model.findOneAndUpdate(filtre, modif, { new: true })` |
| Supprimer | `Model.deleteOne(filtre)` |
| Joindre | `.populate('champ')` |
