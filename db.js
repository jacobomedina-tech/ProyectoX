const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/PaginaWeb');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'error de conexion:'));
db.once('open', () => {
  console.log('Conectado a MongoDB');
});

const usuarioSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  password: String
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = { db, Usuario };
