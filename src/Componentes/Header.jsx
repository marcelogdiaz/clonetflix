import React from "react";
import { Navbar, NavDropdown } from "react-bootstrap";
import styles from './Header.css';


const Header = () => {
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
        <Navbar.Brand href="#home">Buscar</Navbar.Brand>
        <Navbar.Brand href="#home">Notificaciones</Navbar.Brand>

          <NavDropdown title="Perfil" id="basic-nav-dropdown">
                      <img
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                    />{' '}    
          
            <NavDropdown.Item href="#action/3.1">Administrar Perfil</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">Cuenta</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Centro de Ayuda</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Cerrar Sesion en Netflix</NavDropdown.Item>
        </NavDropdown>          
      </Navbar>      
    </header>
    );    
}

export default Header;

