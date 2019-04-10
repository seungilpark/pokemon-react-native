import {combineReducers} from "redux"
import pokemons from "./pokemons"
import pokemonDetails from "./pokemonDetails"
import TeamReducer from "./TeamReducer";
import BattleReducer from "./BattleReducer";



export default combineReducers({
  team_selection: TeamReducer,
  battle: BattleReducer,
  pokemons: pokemons,
  pokemonDetails: pokemonDetails
})