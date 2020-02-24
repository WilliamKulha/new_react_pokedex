import React, { Component } from 'react'
import PokemonCard from '../PokemonCard/PokemonCard'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import classes from './Pokedex.module.css'
import Modal from '../UI/Modal/Modal'
import PokeView from '../PokeView/PokeView'

class Pokedex extends Component {
    
    state = {
        pokedex: [],
        currentPokemon: null,
        loading: false,
        error: false,
        showPokeModal: false
    };

    getList = async () => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=250`).then(resp =>
        resp.json()
        );
    };

    getPokemon = pokelist => {
        const promises = pokelist.results.map(async pokemon => {
        return await fetch(`${pokemon.url}`).then(resp => resp.json());
        });
        return Promise.all(promises);
    };

    componentDidMount() {
        this.setState({loading: true})
        this.getList().then(bigList => {
        return this.getPokemon(bigList).then(results =>
            this.setState({ pokedex: results, loading: false })
        );
        });
    }

    pokemonClickHandler = (id) => {
        const clicked_idx = this.state.pokedex.findIndex(poke_id => poke_id.id === id)
        this.setState({
        currentPokemon: this.state.pokedex[clicked_idx],
        showPokeModal: true
        })
    }


    closeModalHandler = () => {
        this.setState({ showPokeModal: false, currentPokemon: null})
    }
    
    render(){

        let loading = null;
        if (this.state.loading) {
            loading = (
                <LoadingSpinner />
            )
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
              <div className={classes.PokemonWrapper}>
                {this.state.pokedex
                    .map((pokemon, index) => (
                    <PokemonCard
                        key={pokemon.name}
                        id={pokemon.game_indices[0].game_index}
                        pokemon={pokemon}
                        click={this.pokemonClickHandler}
                    />
                    ))}
                </div>
            </div>
          </React.Fragment>
        );
    }

}

export default Pokedex