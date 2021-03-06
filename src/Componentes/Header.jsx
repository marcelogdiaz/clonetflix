import React, {useContext, useState} from "react";
import { Button, Navbar } from "react-bootstrap";
import LoginContext from "../Contexts/LoginContext";
import styles from './Header.css';


const Header = ({usuario, onCambiarEstadoLogin}) => {
    let button;
    // if (Logonetflix) {
    //   button = <Button variant="danger" onClick={handleLogoutClick}>  LogOut </Button>                  
    // } else {
    //   button = <Button variant="danger" onClick={handleLoginClick}>  LogIn </Button>                  
    // }

    if (usuario.isLoggedIn) {
      button = <Navbar.Brand title="Perfil" id="basic-nav-dropdown">
                  <Button variant="danger" value="logout" onClick={()=>onCambiarEstadoLogin(false, "Anonimo")}>  LogOut </Button>                  
              </Navbar.Brand>      
      //button = <Button variant="danger" onClick={handleLogoutClick}>  LogOut </Button>                  
  
    } else {
      button = <Navbar.Brand title="Perfil" id="basic-nav-dropdown">
                  <Button variant="danger" value="login" onClick={()=>onCambiarEstadoLogin(true, "Juan Carlos")}>  LogIn </Button>                  
              </Navbar.Brand>
      //button = <Button variant="danger" onClick={handleLoginClick}>  LogIn </Button>                  
    }

    return (
      <header>
        <Navbar variant="dark" className="left"> 
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
      
      <Navbar variant="dark" className="rigth">
        <Navbar.Brand >{usuario.nombre}</Navbar.Brand>
        {button}
      </Navbar>      
    </header>
    );    
}

export default Header;

