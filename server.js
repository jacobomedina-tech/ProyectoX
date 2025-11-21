const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {
  crearUsuario,
  obtenerUsuarios,
  actualizarUsuario,
  eliminarUsuario
} = require('./usuarioController');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Crear usuario
app.post('/usuarios', async (req, res) => {
  try {
    const usuario = await crearUsuario(req.body);
    res.json(usuario);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Ver usuarios
app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await obtenerUsuarios();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Actualizar usuario
app.put('/usuarios/:id', async (req, res) => {
  try {
    const usuario = await actualizarUsuario(req.params.id, req.body);
    res.json(usuario);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Eliminar usuario
app.delete('/usuarios/:id', async (req, res) => {
  try {
    await eliminarUsuario(req.params.id);
    res.json({ mensaje: 'Usuario eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log('Servidor iniciado en puerto 3000'));
