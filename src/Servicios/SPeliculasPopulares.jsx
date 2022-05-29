/*npm i axios  en la terminal de la carpeta raiz para instalarlo*/ 
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";
import * as configAPI from '../Config/configAPI.js';

const SPeliculasPopulares = () => {

    const [movies, setMovies] = useState([]);    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

     let randomMovie;
   
    //Ejecuta la función Asincrónica al cargar el componente por única vez por estar definida con [].     
    useEffect(() => {
      getPopularMovies();        
      //console.log("Se ejecutó el useEffect");
      }, []);    

    //Función Asincrónica que una vez que finaliza la petición a la API actualiza el estado peliculas.
     const getPopularMovies = async () => {
        try 
        {
          setLoading(true)    
          const result = await getPopular();        
          
          setMovies(result.data.results);        
          setLoading(false)
        } catch (error) {
          setError(error)
          //console.log(error);
        }
      };   
      
    //Petición a la API con timeOut que devuelve una promesa con timeout de 1 seg.
    const getPopular = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(axios.get(configAPI.apiTMDBUrl + '?' +configAPI.myAPIkey + '&' + configAPI.languageUS));
          //console.log("Se ejecutó el Resolve");
        },1000);
      });
    };      
      
      // DEVUELVE UN ITEM RANDOM 
      function getRandomItem(set) {
        const item =set[Math.floor(Math.random() * set.length)];
        return item;        
      }

  //Se devuelve un Jsx con el mapeo de películas.
  return (  
          <>     
            {loading ? ( <div>cargando...</div>):
                (                 
                  <>
                    {             
                        getRandomItem(movies?.map((movie) => (      
                        <div>                    
                          <div className="col-lg-4 left" >
                            <img variant="top" src={configAPI.apiIMGurl+ configAPI.imageSize200+ "/"+ movie.poster_path} />
                            {/* <p>{movie.id}</p>  */}                                    
                          </div>
                          <div className="col-lg-8" style={{padding: "10px"}}>
                            <h2>{movie.title}</h2>   
                            <p>{movie.overview}</p>
                            {/* <p>{movie.vote_count}</p> */}
                            <Badge>{movie.vote_average}</Badge>
                            {/* <Badge>{movie.popularity}</Badge> */}
                            </div>
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