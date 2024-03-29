import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from './views/Home';
import Navbar from './components/Navbar';
import ContextoGlobal from './context/ContextoGlobal';
import Footer from './components/Footer';
import Pokemon from './views/Pokemon';


function App() {
  const [endpoint, setEndpoint] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://pokeapi.co/api/v2/pokemon/";
        const response = await fetch(url);
        const data = await response.json();
        const character = data.results
        console.log("oki", data)
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
            <Route path="/pokemon" element={<Pokemon />} />
            <Route path="/pokemon/:selectedPokemon" element={<Pokemon />} />
          </Routes>
        </BrowserRouter>
      </ContextoGlobal.Provider>
      <Footer />
    </div>
  );
}

export default App;
