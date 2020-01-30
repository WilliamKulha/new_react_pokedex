import React, { Component } from 'react'
import PokemonCard from '../PokemonCard/PokemonCard'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import classes from './Pokedex.module.css'
import Header from '../Header/Header'

class Pokedex extends Component {
    
    state = {
        pokedex: [],
        search: "",
        currentPokemon: null,
        loading: false,
        error: false,
        showModal: false
    };

    getList = async () => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=400`).then(resp =>
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
        showModal: true
        })
    }

    searchFieldChangeHandler = event => {
          this.setState({ search: event.target.value });
    }

    closeModalHandler = () => {
        this.setStae({ showModal: false})
    }
    
    render(){

        let loading = null;
        if (this.state.loading) {
            loading = (
                <LoadingSpinner />
            )
        }
        let header = null;
        if(!this.state.loading) {
            header = (
                <Header typingChange={this.searchFieldChangeHandler} searched={this.state.search}/>
            )
        }
        let pokeModal = null;

        return (
          <React.Fragment>
            {header}
            <div className={classes.PokedexWrapper}>
              {loading}
              {pokeModal}
              {this.state.pokedex
                .filter(pokemon =>
                  pokemon.name
                    .toLowerCase()
                    .includes(this.state.search.toLowerCase())
                )
                .map((pokemon, index) => (
                  <PokemonCard
                    key={pokemon.name}
                    id={pokemon.game_indices[0].game_index}
                    pokemon={pokemon}
                    click={this.pokemonClickHandler}
                  />
                ))}
            </div>
          </React.Fragment>
        );
    }

}

export default Pokedex