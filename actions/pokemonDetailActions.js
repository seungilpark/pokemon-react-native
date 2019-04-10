import * as actionTypes from "./types"
import apiClient from "../lib/apiClient"

export function getPokemonDetails(url) {
  return (dispatch, getState) => {
    return apiClient.get(url).then(resp => {
      let pokemonDetails = getState().pokemonDetails ? resp : {}
      dispatch(setPokemonDetails({
        pokemonDetails: pokemonDetails
      }))
    }).catch((ex) => {
      console.log(ex)
    })
  }
}

export function setPokemonDetails({pokemonDetails}) {
  return {
    type: actionTypes.SET_POKEMON_DETAILS,
    pokemonDetails
  }
}