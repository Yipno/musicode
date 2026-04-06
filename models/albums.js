const mongoose = require('./connection');

// TODO : Créer le schéma Album avec les champs suivants :
// - title          : String (requis)
// - artist         : ObjectId, référence vers le modèle 'Artist'
// - releaseYear    : Number
// - genre          : String
// - numberOfTracks : Number

const albumSchema = new mongoose.Schema({
  // à compléter...
});

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;
