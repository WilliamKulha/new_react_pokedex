import * as actionTypes from './actionTypes'

const getList = async () => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=250`).then(resp =>
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

export const pokedexTryFetch = () => {
    return dispatch => {
        getList().then(bigList => {
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