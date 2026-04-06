const mongoose = require('./connection');

// TODO : Créer le schéma Playlist avec les champs suivants :
// - name      : String (requis)
// - createdBy : String
// - albums    : tableau d'ObjectId, référence vers le modèle 'Album'
// - isPublic  : Boolean (valeur par défaut : true)
// - createdAt : Date (valeur par défaut : Date.now)

const playlistSchema = new mongoose.Schema({
  // à compléter...
});

const Playlist = mongoose.model('Playlist', playlistSchema);

module.exports = Playlist;
