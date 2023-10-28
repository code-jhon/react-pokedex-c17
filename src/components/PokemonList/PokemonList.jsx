import { PokemonItem } from "../PokemonItem/PokemonItem";
import "./styles.scss"

export function PokemonList({datos}) {

  return (<div className="contenido">{
    data.map((pokemon, index) => <PokemonItem key={index} />)
  }</div>);
}
