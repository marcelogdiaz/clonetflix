/*npm i axios  en la terminal de la carpeta raiz para instalarlo*/ 
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";


const SPeliculasPopulares = () => {

    const [peliculas, setPeliculas] = useState([]);
   
    //Ejecuta la función Asincrónica al cargar el componente por única vez por estar definida con [].
     useEffect(() => {
        console.log("Se ejecutó el useEffect");
        getPopularMovies();
      }, []);

    //Petición a la API con timeOut que devuelve una promesa.
    const getPeliculasPopulares = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(axios("https://api.themoviedb.org/3/movie/popular?api_key=98e4e46af373cfadf7a481b9e525f3de&language=en-US").then((response) => console.log(response.data)));
            console.log("Paso el Resolve");
          }, 3000);
        });
      };

    //Función Asincrónica que una vez que finaliza la petición a la API actualiza el estado peliculas.
    const getPopularMovies = async () => {
        try 
        {
          const pelisPopulares = await getPeliculasPopulares();          
          setPeliculas(pelisPopulares);          
          console.log("Se realizó la petición a la API.");
        } catch (error) {
          console.log(error);
        }
      };    

  //Se devuelve un Jsx con el mapeo de películas.
  return (
    <>
      <div>PELICULAS POPULARES</div>    
      <div>Aca Hay que mapear lo que ya está seteado en la variable peliculas del useState.</div> 
    </>
  );
}

export default SPeliculasPopulares;