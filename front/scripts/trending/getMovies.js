require("dotenv").config();

import axios from "axios";
import {renderCards } from "../searchPage/renderCards.js";
import {moviesToHTML} from "./moviesToHTML.js";

export let page = 1; // Variable de página definida globalmente
    
export async function getMovies() {
  
    const url = `https://api.themoviedb.org/3/trending/movie/week?language=es-MX&page=${page}`
  
    try {
        const response = await axios(url,{
            headers: {
                "accept": "application/json",
                "Authorization": process.env.tmbdBearer,
            }            
        });

        renderCards(response.data.results,moviesToHTML);
    } catch (error) {
        console.error(`Error al obtener las películas debido a :` , error.message);
    }
}