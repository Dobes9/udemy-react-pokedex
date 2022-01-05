import React from "react";
import "./Pokecard.css";

export default function Pokecard({ id, name, type, base_experience }) {
  const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

  //   let modifiedId = id.toString();
  //   if (modifiedId.length === 1) {
  //     modifiedId = "00" + modifiedId;
  //   } else if (modifiedId.length === 2) {
  //     modifiedId = "0" + modifiedId;
  //   }
  //   while (modifiedId.length < 3) {
  //     modifiedId = "0" + modifiedId;
  //   }

  let padToThree = (number) =>
    number <= 999 ? `00${number}`.slice(-3) : number;
  let imgSrc = `${POKE_API}${padToThree(id)}.png`;
  return (
    <div className="Pokecard" key={name}>
      <h2 className="Pokecard-title">{name}</h2>
      <div className="Pokecard-image">
        <img src={imgSrc} alt={name} />
      </div>
      <div className="Pokecard-data">Type: {type}</div>
      <div className="Pokecard-data">EXP: {base_experience}</div>
    </div>
  );
}
