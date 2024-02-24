const express = require("express");
const router = require("./routes");
const indexController = require("./controllers/indexController");
const cors = require("cors");
const morgan = require("morgan");

//Construyo el servidor
const app = express();

app.get("/",indexController.serverOn)

//Uso el middleware de morgan
app.use(morgan("dev"));

//Para limitar el acceso a la api o abrirlo
app.use(cors());

//Convierte la info de la solicitud en json a un objeto en js
app.use(express.json());

app.use(router);

module.exports = app;