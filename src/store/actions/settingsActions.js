import * as actionTypes from "./actionTypes";

export const changePokemonNumber = num => {
  return {
    type: actionTypes.CHANGE_POKEMON_NUMBER,
    number: num
  };
};
