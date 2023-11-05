require("dotenv").config();

const port = process.env.PORT;

const express = require('express');
const app = express();
const cors = require("cors");
const routes = require("../../infra/routes.js"); 


app.use(cors());
app.use(express.json());

app.use("/", routes);

app.listen(port);

console.log("🔥 Back-end rodando...")
