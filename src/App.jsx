import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import { PokemonItem } from "./components/PokemonItem/PokemonItem";
import { Link } from "react-router-dom";
import axios from "axios";

import "./App.css";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const solicitarDetallePokemon = async (pokemonObjects) => {
      const detailedPokemonList = await Promise.all(
        pokemonObjects.map(async (pokemonObject) => {
          const pokemonDetail = await axios.get(pokemonObject.url);
          return pokemonDetail.data;
        }),
      );
      setPokemonList(detailedPokemonList);
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

    /*  const lista = [];
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
      .then((resp) =>
        resp?.data?.results.map((pokemonObject) => {
          axios
            .get(pokemonObject.url)
            .then((pokemon) => lista.push(pokemon.data));
        }),
      );
    pokemonList.length > 0 && setPokemonList(lista); */
    fetchPokemonList();
  }, []);

  return (
    <>
      <div className="container">
        <Header />
        <div className="pokemonList">
          {pokemonList !== [] &&
            pokemonList.map((pokemon, index) => (
              <Link key={index} to={`/detalle/${pokemon.name}/${pokemon.id}`}>
                <PokemonItem  pokemonData={pokemon} />
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
