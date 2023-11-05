const express = require("express");
const database = require("../adapters/database/db.js");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "Funcionando!"
    })
});


//Rota para buscar cliente por id
router.get("/clientes/:id",  async (req, res) => {
    const cliente = await database.verClientePeloId(req.params.id);
    res.json(cliente);
});

//Rota para buscar todos clientes
router.get("/clientes",  async (req, res) => {
    const clientes = await database.verClientes();
    res.json(clientes);
});

//Rota para cadastrar cliente
router.post("/clientes",  async (req, res) => {
    await database.cadastrarCliente(req.body);
    res.sendStatus(201);
});

//Rota para atualizar cliente
router.patch("/clientes/:id",  async (req, res) => {
    await database.atualizaCliente(req.params.id, req.body);
    res.sendStatus(200);
});


//Rota para apagar cliente por id
router.delete("/clientes/:id",  async (req, res) => {
    await database.deletaCliente(req.params.id);
    res.sendStatus(204);
});

module.exports = router;
