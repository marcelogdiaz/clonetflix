
import React from "react";
import { useEffect, useState } from "react";
import { Badge, Button, Card, CardGroup, CardImg } from "react-bootstrap";
import styles from './ListFilm.css';
import axios from "axios";

const ListFilm = ({usuario}) => {

  const API_CHARACTERS = "https://api.themoviedb.org/3/movie/popular?api_key=98e4e46af373cfadf7a481b9e525f3de&language=en-US";
  const apiTMDBUrl="https://api.themoviedb.org/3/movie/550";
  const myAPIkey = ""

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
          //const url="https://api.themoviedb.org/3/movie/popular?api_key=98e4e46af373cfadf7a481b9e525f3de&language=en-US";
          resolve(axios.get(API_CHARACTERS));
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
    {loading ? (            
        <div>cargando...</div>  
        ):
        (                 
          <>
            <section className="section_content">
            <h3>Populares en Netflix</h3>
            {/* <CardGroup> */}
            {             
               movies.map(movie => {
                  let path= "https://image.tmdb.org/t/p/w200/"+ movie.poster_path;
                  return (
                  <Card                    
                    key={movie.id}
                    // text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                    // style={{ width: '18rem', display: 'inline', float: 'left' }}
                    className="col-sm-2">                    
                    <CardImg variant="top" src={path} />
                    {/* <Card.Body>
                      <Card.Text>
                         <div>{(movie.overview).substring(0,100)+"..."}</div>
                         <div>
                         <Badge 
                          variant="secondary"
                          pill="true">
                            {movie.vote_average}</Badge>
                            </div>
                      </Card.Text>
                    </Card.Body> */}
                    <Card.Header>{movie.title}</Card.Header>
                  </Card>                  
               )})
             }   
            {/* </CardGroup> */}
            </section>
          </>
        )
    }      
  </>
  );         
}

export default ListFilm;