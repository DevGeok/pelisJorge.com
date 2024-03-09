require("dotenv").config();
const dbCon = require("./src/config/dbCon")

const app = require("./src/server")
const port = process.env.PORT;

dbCon()
.then((res)=>{
        app.listen(port,() => {
            console.log("App listening on port 3000!");
        }); 
    })
.catch((error) => {
    console.error("No se pudo establecer la conexión con a la db", error);
});
