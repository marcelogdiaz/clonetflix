/*npm i axios  en la terminal de la carpeta raiz para instalarlo*/ 
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import * as configAPI from '../Config/configAPI.js';

const SPeliculasPopulares = () => {

    const [movies, setMovies] = useState([]);    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

     let randomMovie;
   
    //Ejecuta la función Asincrónica al cargar el componente por única vez por estar definida con [].     
    useEffect(() => {
      getPopularMovies();        
      console.log("Se ejecutó el useEffect");
      }, []);    


    //Petición a la API con timeOut que devuelve una promesa con timeout de 1 seg.
     const getPopular = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(axios.get(configAPI.apiTMDBUrl + '?' +configAPI.myAPIkey + '&' + configAPI.languageUS));
            console.log("Se ejecutó el Resolve");
          },1000);
        });
      };

    //Función Asincrónica que una vez que finaliza la petición a la API actualiza el estado peliculas.
     const getPopularMovies = async () => {
        try 
        {
          setLoading(true)    
          const result = await getPopular();        
          
          setMovies(result.data.results);        
          setLoading(false)

          console.log("Se realizó la petición a la API.");
          console.log(result.data.results)   

        } catch (error) {
          setError(error)
          console.log(error);
        }
      };   
      
      
      // DEVUELVE UN ITEM RANDOM 
      function getRandomItem(set) {
        console.log(set)
        const item =set[Math.floor(Math.random() * set.length)];
       
        console.log("FUNCION RANDOM")
        console.log(item)
        return item;        
      }

    

  //Se devuelve un Jsx con el mapeo de películas.
  return (  

          <>     
            {loading ? (            
                <div>cargando...</div>  
                ):
                (                 

                  <>
                    
                    <div>PELICULA RECOMENDADA</div>    
                    <div>Elije una random cada vez que te logueas.</div>
                    {             
                        getRandomItem(movies?.map((movie) => (
                         <div >
                         <p>{movie.id}</p> 
                         <p>{movie.title}</p>           
                         </div>
                         )) )  
                     }   
                  </>
                )
            }      
          </>
          );
}

export default SPeliculasPopulares;