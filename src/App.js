import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from './views/Home';
import Navbar from './components/Navbar';
import Personajes from './views/Personajes';
import ContextoGlobal from './context/ContextoGlobal';
import Footer from './components/Footer';


function App() {
  const [endpoint, setEndpoint] = useState([]);
  // const [personaje, setPersonaje] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://rickandmortyapi.com/api/character";
        const response = await fetch(url);
        const data = await response.json();
        const character = data.results
        console.log(data)
        setEndpoint(character);
      } catch (error) {
        console.error('Error al cargar el personaje', error);
      }
    };

    fetchData();
  }, []);

  const globalState = { endpoint, setEndpoint};

  return (
    <div className="App">
      <ContextoGlobal.Provider value={globalState}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/personajes/:id" element={<Personajes />} />
          </Routes>
        </BrowserRouter>
      </ContextoGlobal.Provider>
      <Footer />

     
    </div>
  );
}

export default App;
