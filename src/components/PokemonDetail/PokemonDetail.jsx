import { useParams } from "react-router-dom";
import { BackButton } from "../BackButton/BackButton"

export function PokemonDetail() {
  const { name, id } = useParams();
  return (
    <div className="card">
      <div className="photo">
        <img
          /* src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" */
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt="pokemon photo"
        />
      </div>
      <div className="info">
        <div className="id">N° {id}</div>
        <div className="name">{name}</div>
        <div className="types">
          <div className="grass">Grass</div>
          <div className="poison">Poison</div>
        </div>
      </div>
      <div>
        <BackButton />
      </div>
    </div>
  );
}