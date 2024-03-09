const mongoose = require("mongoose");

const uriFer = process.env.MONGOFER
const miUri = process.env.MIMONGO
const uriPruebas = process.env.MIMONGOPRUEBAS

const dbCon = async () => {
    //Realiza conexión con la base de datosç
    await mongoose.connect(
      uriPruebas
    )
};

module.exports = dbCon;
