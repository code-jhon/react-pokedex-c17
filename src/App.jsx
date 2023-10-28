import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import { PokemonItem } from "./components/PokemonItem/PokemonItem";
import { Link } from "react-router-dom";
import axios from "axios";
import "./App.css";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [textoDeBusqueda, setTextoDeBusqueda] = useState(""); // Corrección aquí

  const filtrarLista = (textoDeBusqueda) => {
    const resultado = pokemonList.filter(
      (pokemon) =>
        pokemon.name.includes(textoDeBusqueda)
    );

    setFilteredData(resultado.length > 0 ? resultado : pokemonList);
  };

  useEffect(() => {
    const solicitarDetallePokemon = async (pokemonObjects) => {
      const detailedPokemonList = await Promise.all(
        pokemonObjects.map(async (pokemonObject) => {
          const pokemonDetail = await axios.get(pokemonObject.url);
          return pokemonDetail.data;
        }),
      );
      setPokemonList(detailedPokemonList);
      filtrarLista(textoDeBusqueda); // Agregamos la invocación aquí para inicializar el filteredData
    };

    const fetchPokemonList = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0",
        );
        const pokemonObjects = response?.data?.results;
        solicitarDetallePokemon(pokemonObjects);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPokemonList();
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
