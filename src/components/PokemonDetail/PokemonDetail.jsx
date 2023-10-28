import { useParams } from "react-router-dom";
import { BackButton } from "../BackButton/BackButton";
import { motion } from "framer-motion";
import styled from "styled-components";

export function PokemonDetail() {
  const { name, id } = useParams();

  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };

  const estilos = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  };

  // -(score) _(underscore)

  const ComponenteConEstilo = styled.div`
    /*Puro CSS*/
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 100px;
  `;

  return (
    <ComponenteConEstilo>
      <motion.div transition={spring} animate={{ scale: 1.2 }}>
        <div className="card">
          <div className="photo">
            <img
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
      </motion.div>
    </ComponenteConEstilo>
  );
}
