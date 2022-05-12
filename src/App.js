import React,{useState} from 'react';
import './App.css';
import Header from './Componentes/Header';
import ListFilm from './Componentes/ListFilm';
import MainFilm from './Componentes/MainFilm';
import LoginContext from './Contexts/LoginContext';

function App() {
  
  const [usuario, setUsuario] = useState({
    nombre:"Anonimo",
    isLoggedIn: false});  //Estado para el usuario

  return (
    <div className="App">
      {/* <LoginContext.Provider value={false}> */}

      <Header usuario={usuario}/>

      <MainFilm usuario={usuario}/>

      <ListFilm usuario={usuario}/>
      {/* </LoginContext.Provider> */}
    </div>
  );
}

export default App;
