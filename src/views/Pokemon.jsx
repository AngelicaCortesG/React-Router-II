import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, Card, Row, Col } from "react-bootstrap";
import ContextoGlobal from "../context/ContextoGlobal";

export default function Pokemon() {
  const { endpoint } = useContext(ContextoGlobal);
  const { selectedPokemon } = useParams();
  const [pokemonData, setPokemonData] = useState(null);
  const navigate = useNavigate();
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`);
        const data = await response.json();
        setPokemonData(data);
      } catch (error) {
        console.error('Error al cargar los datos del Pokémon', error);
      }
    };

    fetchPokemonData();
  }, [selectedPokemon]);

  const capitalizeFirstLetter = (string) => {
    return string && string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    navigate(`/pokemon/${value}`);
    setShowCard(false);
  };

  const handleVerDetalle = () => {
    setShowCard(true);
  };

  return (
    <div className="mt-5">
      <h1>Selecciona un Pokémon</h1>
      <Form>
        <Form.Group>
          <Form.Control as="select" value={selectedPokemon} onChange={handleChange}>
            <option value="">Selecciona un Pokémon</option>
            {endpoint.map((pokemon) => (
              <option key={pokemon.name} value={pokemon.name}>
                {capitalizeFirstLetter(pokemon.name)}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </Form>
      <div>Pokémon seleccionado: {capitalizeFirstLetter(selectedPokemon)}</div>
      <Button variant="primary" onClick={handleVerDetalle}>
        Ver detalle
      </Button>
      {showCard && pokemonData && (
        <Card className="mt-3 border my-card">
          <Row>
            <Col xs={4}>
              <Card.Img src={pokemonData.sprites.front_default} alt={selectedPokemon} />
            </Col>
            <Col xs={8}>
              <Card.Body>
                <Card.Title><strong>{capitalizeFirstLetter(selectedPokemon)}</strong></Card.Title>
                <Card.Text>
                  <ul>
                    {pokemonData.abilities?.map((ability) => (
                      <li key={ability.ability.name}>{capitalizeFirstLetter(ability.ability.name)}</li>
                    ))}
                  </ul>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      )}
    </div>
  );
}
