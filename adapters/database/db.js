const { Pool } = require('pg');

async function connect() {
    const { Pool } = require("pg");
    const pool = new Pool({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASS,
        port: process.env.DB_PORT,
    });
    
    global.connection = pool;
    return pool.connect();
}


async function verClientes() {
  const client = await connect();
  try {
    const res = await client.query('SELECT * FROM clientes');
    return res.rows;
  } finally {
    client.release();
  }
}

async function verClientePeloId(id) {
  const client = await connect();
  try {
    const res = await client.query('SELECT * FROM clientes WHERE id=$1', [id]);
    return res.rows;
  } finally {
    client.release();
  }
}

async function cadastrarCliente(cliente) {
  const client = await connect();
  try {
    const sql = 'INSERT INTO clientes (nome, email, cpf) VALUES ($1, $2, $3)';
    const values = [cliente.nome, cliente.email, cliente.cpf];
    await client.query(sql, values);
  } finally {
    client.release();
  }
}

async function atualizaCliente(id, cliente) {
  const client = await connect();
  try {
    const sql = 'UPDATE clientes SET nome=$1, email=$2, cpf=$3 WHERE id=$4';
    const values = [cliente.nome, cliente.email, cliente.cpf, id];
    await client.query(sql, values);
  } finally {
    client.release();
  }
}

async function deletaCliente(id) {
  const client = await connect();
  try {
    const sql = 'DELETE FROM clientes WHERE id=$1';
    const values = [id];
    await client.query(sql, values);
  } finally {
    client.release();
  }
}

module.exports = {
  verClientes,
  verClientePeloId,
  cadastrarCliente,
  atualizaCliente,
  deletaCliente,
};
