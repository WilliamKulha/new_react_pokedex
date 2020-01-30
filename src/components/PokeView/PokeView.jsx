import React from 'react'
import classes from './PokeView.module.css'

const PokeView = ({ pokemon }) => (
  <div className={classes.PokeViewContainer}>
    <div className={classes.PokeName}>
      <h1 className={classes.Title}>{pokemon.name}</h1>
      <h2>#{pokemon.id}</h2>
    </div>
    <div className={classes.PokeImage}>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
    <div className={classes.Stats}>
      <h3>Base Stats</h3>
      <div className={classes.BaseStats}>
        <p>HP : {pokemon.stats[5].base_stat}</p>
        <p>Attack : {pokemon.stats[3].base_stat}</p>
        <p>Defense : {pokemon.stats[4].base_stat}</p>
        <p>Special Attack : {pokemon.stats[2].base_stat}</p>
        <p>Special Defense : {pokemon.stats[1].base_stat}</p>
        <p>Speed : {pokemon.stats[0].base_stat}</p>
      </div>
    </div>
  </div>
);

export default PokeView