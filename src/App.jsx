import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import { PokemonItem } from "./components/PokemonItem/PokemonItem";
import { Link } from "react-router-dom";
import API from './services/api/api';
import axios from "axios";
import "./App.css";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [textoDeBusqueda, setTextoDeBusqueda] = useState(""); // Corrección aquí

  const filtrarLista = (textoDeBusqueda) => {
    const resultado = pokemonList.filter((pokemon) =>
      pokemon.name.includes(textoDeBusqueda),
    );

    setFilteredData(resultado.length > 0 ? resultado : pokemonList);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await API.getPokemonData();
      setPokemonList(data);
      console.log(data)
    }

    fetchData();
  }, []);

  useEffect(() => {
    filtrarLista(textoDeBusqueda); // Actualizamos la lista filtrada cuando cambia textoDeBusqueda
  }, [textoDeBusqueda]);

  return (
    <>
      <div className="container">
        <Header
          textoDeBusqueda={textoDeBusqueda}
          setTextoDeBusqueda={setTextoDeBusqueda}
        />
        <div className="pokemonList">
          {filteredData.length > 0 &&
            filteredData.map((pokemon) => (
              <Link
                key={pokemon.id}
                to={`/detalle/${pokemon.name}/${pokemon.id}`}
              >
                <PokemonItem pokemonData={pokemon} />
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
