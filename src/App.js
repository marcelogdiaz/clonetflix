import './App.css';
import Header from './Componentes/Header';
import ListFilm from './Componentes/ListFilm';
import MainFilm from './Componentes/MainFilm';

function App() {
  return (
    <div className="App">
      <Header />

      <MainFilm />

      <ListFilm />
    </div>
  );
}

export default App;
