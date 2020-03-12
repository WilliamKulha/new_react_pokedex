import React, { Component } from 'react'
import { connect } from 'react-redux'
import PokemonCard from '../PokemonCard/PokemonCard'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import classes from './Pokedex.module.css'
import Modal from '../UI/Modal/Modal'
import PokeView from '../PokeView/PokeView'

class Pokedex extends Component {
    
    state = {
        currentPokemon: null,
        loading: false,
        error: false,
        showPokeModal: false
    };


    pokemonClickHandler = (id) => {
        const clicked_idx = this.props.pokedex.findIndex(poke_id => poke_id.id === id)
        this.setState({
        currentPokemon: this.props.pokedex[clicked_idx],
        showPokeModal: true
        })
    }


    closeModalHandler = () => {
        this.setState({ showPokeModal: false, currentPokemon: null})
    }
    
    render(){
        let pokedex = null
        let loading = null;
        if (!this.props.pokedex) {
            loading = (
                <LoadingSpinner />
            )
        }

        if (this.props.pokedex) {
            pokedex = (
              <div className={classes.PokemonWrapper}>
                {this.props.pokedex.map((pokemon, index) => (
                  <PokemonCard
                    key={pokemon.name}
                    id={pokemon.game_indices[0].game_index}
                    pokemon={pokemon}
                    click={this.pokemonClickHandler}
                  />
                ))}
              </div>
            );
        }
        let pokeviewer = null
        if(this.state.currentPokemon !== null) {
            pokeviewer = (
                <PokeView pokemon={this.state.currentPokemon}/>
            )
        }

        return (
          <React.Fragment>
            <div className={classes.PokedexWrapper}>
              {loading}
              <Modal show={this.state.showPokeModal} closeModal={this.closeModalHandler}>
                {pokeviewer}
              </Modal>
                {pokedex}
            </div>
          </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        pokedex: state.pokedex
    }
}

export default connect(mapStateToProps)(Pokedex)