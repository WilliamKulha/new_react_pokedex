import React from 'react'
import classes from './PokeView.module.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as myTeamActions from '../../store/actions/myTeamActions'
import TeamToggle from '../teamToggle/teamToggle'

const PokeView = (props) => (
  <div className={classes.PokeViewContainer}>
    <Link to={"detail-view/" + props.pokemon.id}><div className={classes.PokeName}>
      <h1 className={classes.Title}>{props.pokemon.name}</h1>
      <h2>#{props.pokemon.id}</h2>
    </div> </Link>
    <div className={classes.PokeImage}>
      <img src={props.pokemon.sprites.front_default} alt={props.pokemon.name} />
    </div>
    <div className={classes.Stats}>
      <h3>Base Stats</h3>
      <div className={classes.BaseStats}>
        <p>HP : {props.pokemon.stats[5].base_stat}</p>
        <p>Attack : {props.pokemon.stats[3].base_stat}</p>
        <p>Defense : {props.pokemon.stats[4].base_stat}</p>
        <p>Special Attack : {props.pokemon.stats[2].base_stat}</p>
        <p>Special Defense : {props.pokemon.stats[1].base_stat}</p>
        <p>Speed : {props.pokemon.stats[0].base_stat}</p>
      </div>
      <TeamToggle 
        displayStyle="add"
        clicked={() => props.onAddPokemonHandler(props.pokemon)}>
          Add to my team 
      </TeamToggle>
    </div>

  </div>
);

const mapDispatchToProps = dispatch => {
  return {
    onAddPokemonHandler: pokemon =>
      dispatch(myTeamActions.addPokemon(pokemon))
  };
};

export default connect(null, mapDispatchToProps)(PokeView)