const Movies = require("../models/Movies");
const catchAsync = require("../utils/catchAsync");

function isUrl(string) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocolo
        '((([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.)+[a-zA-Z]{2,})' + // nombre de dominio
        '(\\:\\d+)?(\\/[-a-zA-Z\\d%@_.~+&:;=]*)*' + // puerto, ruta (incluyendo '@')
        '(\\?[;&a-zA-Z\\d%@_.~+=-]*)?' + // consulta (incluyendo '@')
        '(\\#[-a-zA-Z\\d_]*)?$', 'i'); // fragmento
    return !!pattern.test(string);
}

module.exports = {
    addMovieMiddleware : async (req, res, next) => {
        let {
            title,
            year,
            director,
            duration,
            genre,
            rate,
            poster
        } 
        = req.body;

        if(title && year && director && duration && genre && rate && poster){
           let errorMessage;

           if(year.toString().length > 4) {
                errorMessage = "Mensaje del BackEnd. ERROR: El año no puede tener más de 4 digitos";
                res.status(400).json({message: errorMessage});
                return console.error("ERROR: El año no puede tener más de 4 digitos");
            }
           
           if(year<1895){
            errorMessage = `Mensaje del BackEnd. ERROR: La primera película se lanzó en 1985 y fue  "La salida de los obreros de la fábrica Lumière", el año de tu película no puede ser menor a 1,985`;
            res.status(400).json({message:errorMessage});
            return console.error(`ERROR: La primera película se lanzó en 1985 y fue  "La salida de los obreros de la fábrica Lumière", el año de tu película no puede ser menor a 1,985`)
            }

           if(rate>10) {
            errorMessage ="Mensaje del BackEnd. ERROR: La calificación es del 1 al 10, por mucho que te guste la película no puede tener una calificación mayor a 10";
           res.status(400).json({message:errorMessage});
           return console.error("ERROR: La calificación es del 1 al 10, por mucho que te guste la película no puede tener una calificación mayor a 10");
          }
           

           if(rate.toString().length>4){
            errorMessage = "Mensaje del BackEnd. ERROR: Conservemos la calificación simple, 2 decimales es más que suficiente para ser específicos, no seamos piky";
            res.status(400).json({message:errorMessage});
            return console.error("ERROR: Conservemos la calificación simple, 2 decimales es más que suficiente para ser específicos, no seamos piky");
           };

           if(!isUrl(poster)){
            errorMessage = "Mensaje del BackEnd. ERROR: El URL de la imagen no es válido";
            res.status(400).json({message:errorMessage});
            return console.error("ERROR: El URL de la imagen no es válido");
           };

           let movieExist = await Movies.findOne({"title": title});

           if(movieExist !== null){
            errorMessage = "Mensaje del BackEnd. ERROR: Ya existe esta película en la base de datos";
            res.status(400).json({message:errorMessage});
            return console.error("ERROR: Ya existe esta película en la base de datos")
          };
          console.log("AddMovies middleWare STATUS: PASSED");
        };
    next();
    },
};