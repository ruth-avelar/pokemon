import React from "react";
//import mockPokemonData from "/src/mock/pokeData.js";

const PokeCard = ({ name, sprites, video }) => {
  return (
    <div>
      <h1>{name}</h1>
      <img src={sprites.front_default} alt="" />
      <img src={sprites.front_shiny} alt="" />
      <a target="_blank" rel="noreferrer" href={video}>
        {" "}
        Video{" "}
      </a>
    </div>
  );
};

export default PokeCard;
