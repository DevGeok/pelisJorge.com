require("dotenv").config();


const app = require("./src/server")
const port = process.env.PORT;

//Levanto el servidor 
app.listen(port,() => {
    console.log(`Servidor escuchando en puerto ${port}`);
});
