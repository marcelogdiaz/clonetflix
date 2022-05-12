import React, {useContext, useState} from "react";
import { Button, Navbar } from "react-bootstrap";
import LoginContext from "../Contexts/LoginContext";
import styles from './Header.css';


const Header = ({usuario}) => {
    //const [isLoggedContext, setIsLoggedContext] = useContext(LoginContext);
   

    const handleLoginClick = () => {
        // setLogonetflix(true);
        // setUsuario("Usuario");
        //setIsLoggedContext(true);
    }
        
    const handleLogoutClick = () => {
      // setLogonetflix(false);
      // setUsuario("");
      //setIsLoggedContext(false);
  }

    let button;
    // if (Logonetflix) {
    //   button = <Button variant="danger" onClick={handleLogoutClick}>  LogOut </Button>                  
    // } else {
    //   button = <Button variant="danger" onClick={handleLoginClick}>  LogIn </Button>                  
    // }

    if (usuario.isLoggedIn) {
      button = <Navbar.Brand title="Perfil" id="basic-nav-dropdown"><img
                    alt=""
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  />{usuario}
                  <Button variant="danger" onClick={handleLogoutClick}>  LogOut </Button>                  
              </Navbar.Brand>
    } else {
      button = <Navbar.Brand title="Perfil" id="basic-nav-dropdown">
                  <Button variant="danger" onClick={handleLoginClick}>  LogIn </Button>                  
              </Navbar.Brand>
    }

    return (
      <header>
        <Navbar bg="dark" variant="dark" className="left"> 
        <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1920px-Logonetflix.png"
              width="100"
              height="30"
              className="d-inline-block align-top"
            />{' '}            
        </Navbar.Brand>
        <Navbar.Brand href="#home">Inicio</Navbar.Brand>
        <Navbar.Brand href="#home">Series</Navbar.Brand>
        <Navbar.Brand href="#home">Peliculas</Navbar.Brand>
        <Navbar.Brand href="#home">Novedades</Navbar.Brand>
        <Navbar.Brand href="#home">Mi Lista</Navbar.Brand>    
      </Navbar>
      
      <Navbar bg="dark" variant="dark" className="rigth">
        {usuario.nombre}
        {button}
      </Navbar>      
    </header>
    );    
}

export default Header;

