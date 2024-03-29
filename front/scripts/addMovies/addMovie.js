import { getMovieFormInfo } from "./getMovieFormInfo";
import { verifyData } from "./verifyData";
const axios = require("axios");


export async function addMovie(){
    const newMovie = getMovieFormInfo();
    const isDataComplete = verifyData(newMovie);
    const url = "http://localhost:3000/movies"
    
    if(isDataComplete){
     try {
      const answer = await axios.post(url, newMovie)
      console.log(answer.data);
      alert(`Mensaje del BackEnd: ${answer.data.message}`);
     } catch (error) {
      console.log(error);
      if(error.response)
      alert(`Hubo problemas al intentar agregar la movie, ${error.response.data.message}`);
      else alert(`Hubo problemas al intentar agregar la movie, ${error.message}`);
     }
    }
};