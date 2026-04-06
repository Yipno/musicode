const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://...mongodb.net/musicode'; // completer avec votre Connection String

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('database connected'))
  .catch(error => console.error(error));

module.exports = mongoose;
