import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import ContextoGlobal from "../context/ContextoGlobal";

export default function Home() {

    const { endpoint } = useContext(ContextoGlobal)
    const [id, setId] = useState("");
    const navigate = useNavigate();
    const irAPersonajes = () => {
        navigate(`/personajes/${id}`);   
    };

    const handleChange = (event) => {
        const { value } = event.target;
        setId(value);
      };

    return (
        <div className="mt-5">
            <h1>React Router II</h1>
            <input
                type="number"
                value={id}
                onChange={handleChange}
            />
            <Button onClick={irAPersonajes}>buscar</Button>
            <img src="Pikachu.png" alt="My Image" />
        </div>
    );
}