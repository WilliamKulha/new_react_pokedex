import * as actionTypes from './actionTypes'

export const addPokemon = pokemon => {
    console.log('[addPokemonToTeam] is being dispatched')
    return {
        type: actionTypes.ADD_POKEMON_TO_TEAM,
        pokemon: pokemon,
        message: 'got here'
    }
}

export const removePokemonFromTeam = id => {
    return {
        type: actionTypes.REMOVE_POKEMON_FROM_TEAM,
        id: id
    }
}

