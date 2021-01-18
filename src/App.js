import React from "react";
import "./styles.css";
import PokeCard from "./components/PokeCard.js";
import { mockPokemonData } from "./mock/pokeData.js";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to your second mini challenge!</h1>

      <PokeCard {...mockPokemonData} />
    </div>
  );
}
