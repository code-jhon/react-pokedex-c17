import { useState } from "react";
import { Navbar, NavbarBrand, Nav, Input, Button, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

export default function Header({ textoDeBusqueda, setTextoDeBusqueda }) {
  const [isLight, setIsLight] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleChange = (event) => {
    setTextoDeBusqueda(event.target.value);
  };

  const theme = isLight ? "light" : "dark";

  return (
    <Navbar color={theme}>
      <Nav className="me-auto" navbar>
        <NavItem>
          <Link to="/">Pokedex</Link>
        </NavItem>
        <NavItem>
          <Input value={textoDeBusqueda} onChange={handleChange} />
        </NavItem>
        <NavItem>
          <Button color="danger">Buscar</Button>
        </NavItem>
        <NavItem>
          <Button
            color={isLight ? "secondary" : "info"}
            onClick={() => setIsLight(!isLight)}
          >
            {isLight ? "Dark" : "Light"} {" Theme"}
          </Button>
        </NavItem>
      </Nav>
    </Navbar>
  );
}
/* <div className={`header ${theme}`}>
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
    </div> */
