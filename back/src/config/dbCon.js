const mongoose = require("mongoose");

const dbCon = async () => {
    //Realiza conexión con la base de datosç
    await mongoose.connect(
      "mongodb+srv://devGeok:HSZZ7bGSyFRn5BYE@movies.8eh61bo.mongodb.net/movies"
    )
};

module.exports = dbCon;