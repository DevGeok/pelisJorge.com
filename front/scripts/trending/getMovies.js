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
                "Authorization": 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzI5MDJjOTNhM2EzZjc1MmNiYzQ1MzMzMDU1M2U4YyIsInN1YiI6IjY1Y2EyZWFjNDM1MDExMDE4M2ViMWYxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eYiUyh8VEHIV-uN868CbUPFSM_O3I3hOhRjMjtemKTE'
            }            
        });

        renderCards(response.data.results,moviesToHTML);
    } catch (error) {
        console.error(`Error al obtener las películas debido a :` , error.message);
    }
}