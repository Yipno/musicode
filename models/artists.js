const mongoose = require('./connection');

// TODO : Créer le schéma Artist avec les champs suivants :
// - name        : String (requis)
// - genre       : String
// - country     : String
// - formedYear : Number
// - stats      : sous-document avec monthlyListeners (Number) et totalAlbums (Number)

const artistSchema = new mongoose.Schema({
  // à compléter...
});

const Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;
