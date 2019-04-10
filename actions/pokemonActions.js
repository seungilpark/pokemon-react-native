import * as actionTypes from "./types"
import * as config from "../constants/config"
import apiClient from "../lib/apiClient"

// TODO split this file into different actions
export function getPokemons(nextUrl, paramaters) {
  const url = nextUrl ? nextUrl : config.get_pokemons_endpoint
  const params = nextUrl ? {} : paramaters
  return (dispatch, getState) => {
    // if response don not have nextUrl built the url with config params
    // passed from homeContainer to actions
    return apiClient.get(url, params).then(resp => {
      // concat new result batch to existing resources to reduce payload
      let pokemonResults = getState().pokemons.pokemonResults ? getState().pokemons.pokemonResults : []
      dispatch(setPokemons({
        pokemons: {
          count: resp.count,
          nextUrl: resp.next,
          previousUrl: resp.previous,
          pokemonResults: pokemonResults.concat(resp.results)
        }
      }))
    }).catch((ex) => {
      console.log(ex)
    })
  }
}

export function setPokemons({pokemons}) {
  return {
    type: actionTypes.SET_POKEMONS,
    pokemons
  }
}