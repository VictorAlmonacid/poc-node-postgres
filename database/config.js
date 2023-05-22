import pkg from 'pg';
const { Client } = pkg;

const dbConfig = {
  user: 'tu_usuario',
  host: 'localhost',
  database: 'tu_base_de_datos',
  password: 'tu_contraseña',
  port: 5432,
};

const client = new Client(dbConfig);

export default client;