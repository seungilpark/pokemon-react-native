
import createReducer from "../lib/createReducer"
import * as actionTypes from "../actions/types"

export default pokemons = createReducer({}, {
  [actionTypes.SET_POKEMONS](state, action) {
    let updatedState = action.pokemons
    return updatedState
  }
})