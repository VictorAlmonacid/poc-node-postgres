import Usuario from '../models/user.js';

const registerUser = async (req, res) => {
    res.json({
        msg: "Hola, soy muy malo programando"
    });
};




const obtenerUsuariosController = async (req, res) => {
  try {
    const usuario = new Usuario();
    const usuarios = await usuario.obtenerUsuarios();
    res.json(usuarios);
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
};




export {
    registerUser,
    obtenerUsuariosController
};