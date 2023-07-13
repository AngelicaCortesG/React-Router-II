import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "inActive");
  return (
    <>
      <Navbar bg="secondary" variant="secondary">
        <Container className="justify-content-start">
        <Navbar.Brand className="ms-auto text-white">         
        <img src="icon.svg" width="40" height="40" className="d-inline-block align-top" alt="Logo" />
          </Navbar.Brand>
          <NavLink to="/" className={setActiveClass}>
        Home
          </NavLink>
          <NavLink to="/pokemon" className={setActiveClass}>
          <strong>Pokemones</strong>
          </NavLink>
        </Container>
      </Navbar>
    </>
  );
}
