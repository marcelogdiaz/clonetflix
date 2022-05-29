import React from "react";
import { useEffect, useState } from "react";
import styles from './ListFilm.css';
import axios from "axios";
// import { Swiper, SwiperSlide } from 'swiper/react';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import * as configAPI from '../Config/configAPI.js';

const ListFilm = ({usuario}) => {

  const [movies, setMovies] = useState([]);    
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

    return (
    <>     
      {(loading ) ? (<div>cargando...</div> ):
        (                 
          <>
          {(!usuario.isLoggedIn) ? (<div></div> ):(
            <section className="listfilm_content">
            <h3>Populares en Netflix</h3>
            <Swiper slidesPerView={movies.length/2} >
              {             
                movies.map(movie => {
                    let path= configAPI.apiIMGurl+ configAPI.imageSize200+ "/"+ movie.poster_path;
                    return (                    
                        <SwiperSlide>
                            <img variant="top" src={path} />
                            <div className="swipertitle">{movie.title}</div>
                        </SwiperSlide>
                )})               
              }   
             </Swiper>
            </section>
          )
          }
          </>
        )
      }
    </>
    );         
}

export default ListFilm;