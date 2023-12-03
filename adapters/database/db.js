async function connect(){

    if(global.connection){
        return global.connection.connect();
    }
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

connect();

async function verClientes(){
    const client = await connect();
    const res = await client.query("SELECT * FROM clientes")
    return res.rows;
}

async function verClientePeloId(id){
    const client = await connect();
    const res = await client.query("SELECT * FROM clientes WHERE id=$1", [id]);
    return res.rows;
}

async function cadastrarCliente(cliente){
    const client = await connect();
    const sql = "INSERT INTO clientes (nome, email, cpf) VALUES ($1, $2, $3)"
    const values = [cliente.nome, cliente.email, cliente.cpf];
    const res = await client.query(sql,values);
}


async function atualizaCliente(id, cliente){
    const client = await connect();
    const sql = "UPDATE clientes set nome=$1, email=$2, cpf=$3 WHERE id=$4"
    const values = [cliente.nome, cliente.email, cliente.cpf, id];
    const res = await client.query(sql,values);
}

async function deletaCliente(id){
    const client = await connect();
    const sql = "DELETE FROM clientes WHERE id=$1"
    const values = [id];
    const res = await client.query(sql,values);
}

module.exports = {
    verClientes,
    verClientePeloId,
    cadastrarCliente,
    atualizaCliente,
    deletaCliente
}

