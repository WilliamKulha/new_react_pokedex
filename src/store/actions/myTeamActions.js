import * as actionTypes from './actionTypes'

export const addPokemonToTeam = pokemon => {
    return {
        type: actionTypes.ADD_POKEMON_TO_TEAM,
        pokemon: pokemon
    }
}

export const removePokemonFromTeam = id => {
    return {
        type: actionTypes.REMOVE_POKEMON_FROM_TEAM,
        id: id
    }
}