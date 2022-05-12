import React from "react";

const MainFilm = ({usuario}) => {
    return (        
        <div className="section_content">
          <div>
            <h1>Películas y series ilimitadas y mucho más.</h1>          
            <h2>{usuario.nombre} : Disfruta donde quieras. Cancela cuando quieras.</h2>
          </div>
          <div>
            <img
                  className="d-block w-100"
                  src="https://assets.nflxext.com/ffe/siteui/vlv3/ebff1e0f-5704-423f-b4c6-94914dabe25b/a36a6fb0-5bfb-490f-aa5f-d4b820fff3b5/AR-es-20220509-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                  alt="First slide"
                  opacity= "0.5"
                />
          </div>
        </div>      
    );
}

export default MainFilm;