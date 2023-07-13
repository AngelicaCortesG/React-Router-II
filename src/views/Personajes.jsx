import { useParams } from "react-router-dom";
import ContextoGlobal from "../context/ContextoGlobal";
import { useContext } from "react";
import { Card } from "react-bootstrap";

export default function Personajes() {
  const { endpoint } = useContext(ContextoGlobal);
  const { id } = useParams();

  const character = endpoint.find((character) => character.id === parseInt(id));

  if (!character) {
    return <p>Error: No se encontró el personaje con el ID especificado.</p>;
  }

  return (
    <Card className="custom-card">
      <div className="d-flex flex">
        <Card.Img src={character.image} alt={character.name} />
        <Card.Body>
          <Card.Title>{character.name}</Card.Title>
          <Card.Text>Status: {character.status}</Card.Text>
          <Card.Text>Species: {character.species}</Card.Text>
          <Card.Text>Gender: {character.gender}</Card.Text>
          <Card.Text>Location: {character.location.name}</Card.Text>
          <Card.Text>Origin Name: {character.origin.name}</Card.Text>
          {/* Agrega más detalles del personaje si lo deseas */}
        </Card.Body>
      </div>
    </Card>
  );
}
