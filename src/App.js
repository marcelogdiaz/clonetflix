import logo from './logo.svg';
import './App.css';
import { Navbar,NavDropdown, Card, CardGroup, Carousel } from 'react-bootstrap';

function App() {
  return (
    <div className="App">

      <header>
          <Navbar bg="dark" variant="dark">
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

      <section>
        <div className="section_content">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <button>Play</button>
                <button>Mi lista</button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>              


        </div>
        <div className="section_content">
          <CardGroup >
                {[
            'Primary',
            'Secondary',
            'Success',
            'Danger',
            'Warning',
            'Info',
            'Light',
            'Dark',
          ].map((variant) => (
            <Card
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
              style={{ width: '18rem', display: 'inline', float: 'left' }}
              className="mb-2"
            >
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>{variant} Card Title </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
          </CardGroup>
        </div>
      </section>
    </div>
  );
}

export default App;
