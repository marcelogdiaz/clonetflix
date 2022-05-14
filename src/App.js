import React,{useState} from 'react';
import './App.css';
import Header from './Componentes/Header';
import ListFilm from './Componentes/ListFilm';
import MainFilm from './Componentes/MainFilm';
import LoginContext from './Contexts/LoginContext';
import SPeliculasPopulares from './Servicios/SPeliculasPopulares';

function App() {
  
  const [usuario, setUsuario] = useState({
    nombre:"Anonimo",
    isLoggedIn: false});  //Estado para el usuario

    const handleClick = (estadoLogin, nombreUsuario) => {
      console.log(estadoLogin);
      setUsuario({
        nombre: nombreUsuario,
        isLoggedIn: estadoLogin
      });
    }//

  return (
    <>
    <div className="App">
      {/* <LoginContext.Provider value={false}> */}

      <Header usuario={usuario} onCambiarEstadoLogin= {handleClick}/>

      <MainFilm usuario={usuario}/>

      <ListFilm usuario={usuario}/>
      
      

      {/* </LoginContext.Provider> */}

    </div>

    <div><SPeliculasPopulares usuario={usuario}/></div>
    </>
  );
}

export default App;
