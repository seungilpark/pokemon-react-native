import * as pokemonActions from "./pokemonActions.js"
import * as pokemonDetailActions from "./pokemonDetailActions.js"
import { SELECTED_POKEMON_MARK, CURRENT_POKEMON_SET, TEAM_SET, SET_OPPONENT_TEAM, SET_MOVE, SET_OPPONENT_POKEMON, SET_OPPONENT_POKEMON_HEALTH, REMOVE_POKEMON_FROM_OPPONENT_TEAM, SET_POKEMON_HEALTH, SET_MESSAGE, REMOVE_POKEMON_FROM_TEAM} from "./types";

export const ActionCreators = Object.assign({}, pokemonActions, pokemonDetailActions)

export const selectPokemon = (id, pokemon_data, is_selected) => { 
    return {
    type: SELECTED_POKEMON_MARK,
    id,
    pokemon_data,
    is_selected
    };
};

export const setPokemon = pokemon => { 
    return {
        type: CURRENT_POKEMON_SET,
        pokemon
    };
};

export const setTeam = team => { 
    return {
        type: TEAM_SET,
        team
    };
};

export const setOpponentTeam = team => { 
    return {
      type: SET_OPPONENT_TEAM,
      team 
    };
  };

export const setMove = move => {
  return {
    type: SET_MOVE,
    move
  };
};

export const setOpponentPokemon = pokemon => { 
  return {
    type: SET_OPPONENT_POKEMON,
    pokemon
  };
};

export const setOpponentPokemonHealth = (team_member_id, health) => {
  return {
    type: SET_OPPONENT_POKEMON_HEALTH,
    team_member_id,
    health
  };
};

export const removePokemonFromOpponentTeam = team_member_id => { 
  return {
    type: REMOVE_POKEMON_FROM_OPPONENT_TEAM,
    team_member_id
  };
};

export const setPokemonHealth = (team_member_id, health) => {
  return {
    type: SET_POKEMON_HEALTH,
    team_member_id,
    health
  }
}

export const setMessage = (message) => {
  return {
    type: SET_MESSAGE,
    message,
  }
}

export const removePokemonFromTeam = (team_member_id) => {
  return {
    type: REMOVE_POKEMON_FROM_TEAM,
    team_member_id
  }
}