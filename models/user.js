import db from '../database/config.js';

class Usuario {
  constructor(nombre, edad, email, opcionales = {}) {
    this.nombre = nombre;
    this.edad = edad;
    this.email = email;
    this.opcional1 = opcionales.opcional1 || '';
    this.opcional2 = opcionales.opcional2 || '';
  }

  async obtenerUsuarios() {
    try {
      await db.connect();
      const result = await db.query('SELECT * FROM usuarios');
      return result.rows;
    } catch (error) {
      console.error('Error al obtener los usuarios:', error);
      throw error;
    } finally {
      await db.end();
    }
  }

  // Otras funciones del modelo Usuario...
}

export default Usuario;