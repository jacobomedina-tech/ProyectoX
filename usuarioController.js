const { Usuario } = require('./db');

async function crearUsuario(data) {
  const usuario = new Usuario(data);
  return await usuario.save();
}

async function obtenerUsuarios() {
  return await Usuario.find();
}

async function actualizarUsuario(id, data) {
  return await Usuario.findByIdAndUpdate(id, data, { new: true });
}

async function eliminarUsuario(id) {
  return await Usuario.findByIdAndDelete(id);
}

module.exports = { crearUsuario, obtenerUsuarios, actualizarUsuario, eliminarUsuario };
