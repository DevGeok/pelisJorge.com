require("dotenv").config();
const dbCon = require("./src/config/dbCon")

const app = require("./src/server")
const port = process.env.PORT;

dbCon().then(
    (res)=>{
        app.listen(3000,() => {
            console.log("App listening on port 3000!");
        }); 
    }
)
