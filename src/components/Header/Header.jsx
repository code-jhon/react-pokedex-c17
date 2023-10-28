import { useState } from "react";
import "./styles.scss";

export default function Header({ textoDeBusqueda, setTextoDeBusqueda }) {
  const [isLight, setIsLight] = useState(true);

  const handleChange = (event) => {
    setTextoDeBusqueda(event.target.value);
  };

  const theme = isLight ? "light" : "dark";

  return (
    <div className={`header ${theme}`}>
      <div className={`title ${theme}`}>Pokedex</div>
      <div className="search">
        <input
          type="text"
          className="searchbox"
          value={textoDeBusqueda}
          onChange={handleChange}
        />
        <button className="searchbutton">Buscar</button>
        <button onClick={() => setIsLight(!isLight)}>
          {isLight ? "Dark" : "Light"} {" Theme"}
        </button>
      </div>
    </div>
  );
}
