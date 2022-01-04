import React from "react";
import './Pokecard.css';

export default function Pokecard({ id, name, type, base_experience }) {
  const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

  let modifiedId = id.toString();
  if (modifiedId.length === 1) {
    modifiedId = "00" + modifiedId;
  } else if (modifiedId.length === 2) {
    modifiedId = "0" + modifiedId;
  }
  let imgSrc = `${POKE_API}${modifiedId}.png`;
  return (
    <div className="Pokecard">
      <h1>{name}</h1>
      <img src={imgSrc} alt={name} />
      <div>Type: {type}</div>
      <div>EXP: {base_experience}</div>
    </div>
  );
}
