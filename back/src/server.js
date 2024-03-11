const express = require("express");
const router = require("./routes");
const cors = require("cors");
const morgan = require("morgan");

//Construyo el servidor
const app = express();

//Uso el middleware de morgan
app.use(morgan("dev"));

//Para limitar el acceso a la api o abrirlo
app.use(cors());

//Convierte la info de la solicitud en json a un objeto en js
app.use(express.json());

app.use(router);

app.use((err,req,res,next) =>{
    console.log(err.message);
    res.status(err.status || 500).json({error: err.message});0
});



module.exports = app;