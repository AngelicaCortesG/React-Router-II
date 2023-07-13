import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "inActive");
  return (
    <>
      <Navbar bg="primary" variant="primary">
        <Container className="justify-content-start">
          <NavLink to="/" className={setActiveClass}>
        Home
          </NavLink>
          <NavLink to="/Pokemones" className={setActiveClass}>
          Pokemones
          </NavLink>
          <Navbar.Brand className="ms-auto text-white"><strong>Pokemones</strong></Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
