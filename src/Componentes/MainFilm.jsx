import React from "react";
import styles from './MainFilm.css';
import SPeliculasPopulares from '../Servicios/SPeliculasPopulares';

const MainFilm = ({usuario}) => {

let mainFilmTag;
if (usuario.isLoggedIn) {
  mainFilmTag = <div className="mainFilm_content">
                  <img
                        className="d-block w-100"
                        src="https://assets.nflxext.com/ffe/siteui/vlv3/ebff1e0f-5704-423f-b4c6-94914dabe25b/a36a6fb0-5bfb-490f-aa5f-d4b820fff3b5/AR-es-20220509-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                        alt="First slide"
                        opacity= "0.5"
                      />
                  <div className ="main_film">
                    {/* <h1>Película recomendada para {usuario.nombre}</h1>                             */}
                    <SPeliculasPopulares />                  
                  </div>
              </div>    
} else {
  mainFilmTag = <div className="mainFilm_content">
                  <img
                        className="d-block w-100"
                        src="https://assets.nflxext.com/ffe/siteui/vlv3/ebff1e0f-5704-423f-b4c6-94914dabe25b/a36a6fb0-5bfb-490f-aa5f-d4b820fff3b5/AR-es-20220509-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                        alt="First slide"
                        opacity= "0.5"
                      />
                  <div className ="main_film">
                    <h1>Películas y series ilimitadas y mucho más.</h1>          
                    <h3>Disfruta donde quieras. Cancela cuando quieras.</h3>
                    <h4>Iniciá sesión ahora y podrás disfrutar de las películas más populares, las mejores series y mucho más.</h4>
                  </div>
              </div>    
}

    return (       
      <section>
        {mainFilmTag}
        </section> 
    );
}

export default MainFilm;