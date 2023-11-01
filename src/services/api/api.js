import axios from 'axios';

//claridad en nombres
const fetchPokemonDetails = async (pokemonObjects) => {
  const detailedPokemonList = await Promise.all(
    pokemonObjects.map(async (pokemonObject) => {
      const pokemonDetail = await axios.get(pokemonObject.url);
      return pokemonDetail.data;
    }),
  );
  return detailedPokemonList;
  //filtrarLista(textoDeBusqueda); // Agregamos la invocación aquí para inicializar el filteredData
};

/* const fetchPokemonList = async () => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0",
    );
    const pokemonObjects = response?.data?.results;
    return fetchPokemonDetails(pokemonObjects);
  } catch (error) {
    console.error(error);
  }
}; */

//Axios
/* const fetchPokemonList = () => {
  return axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
    .then(response => {
      const pokemonObjects = response?.data?.results;
      return fetchPokemonDetails(pokemonObjects)
    })
    .catch( error => {
      console.error(error);
    })
} */

//fetch
const fetchPokemonList = () => {
  return fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
    .then(resp => resp.json())
    .then(response => {
      const pokemonObjects = response?.data?.results;
      return fetchPokemonDetails(pokemonObjects)
    })
    .catch( error => {
      console.error(error);
    })
}

//Encapsular
const API = {
  getPokemonData: () => fetchPokemonList()
}

export default API;


