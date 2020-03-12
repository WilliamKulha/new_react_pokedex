import * as actionTypes from '../actions/actionTypes'

const initialState = {
    pokedex: null,
    error: false,
    errorType: null,
    myTeam: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.POKEDEX_FETCH_SUCCESS: 
            return {
                ...state,
                pokedex: action.pokedex
            }
        case actionTypes.POKEDEX_FETCH_ERROR :
            return {
                ...state,
                error: true,
                errorType: action.error
            }
        case actionTypes.ADD_POKEMON_TO_TEAM :
            return {
                ...state,
                myTeam: state.myTeam.concat([action.pokemon])

            }
        default:
            return state
    }
}

export default reducer