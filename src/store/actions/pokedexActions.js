import * as actionTypes from './actionTypes'

const getList = async (numToGet) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=` + numToGet).then(resp =>
    resp.json()
  );
};

const getPokemon = pokelist => {
  const promises = pokelist.results.map(async pokemon => {
    return await fetch(`${pokemon.url}`).then(resp => resp.json());
  });
  return Promise.all(promises);
};


export const pokedexFetchSuccess = (pokedex) => {
    return {
        type: actionTypes.POKEDEX_FETCH_SUCCESS,
        pokedex: pokedex
    }
}

export const pokedexFetchError = error => {
    return {
        type: actionTypes.POKEDEX_FETCH_ERROR,
        error: error
    }
}

export const pokedexTryFetch = (numToGet) => {
    return dispatch => {
        getList(numToGet).then(bigList => {
          return getPokemon(bigList).then(results => {
            console.log(results)
            dispatch(pokedexFetchSuccess(results))
          })
          .catch(error => {
              dispatch(pokedexFetchError())
          })
        });
    }
}