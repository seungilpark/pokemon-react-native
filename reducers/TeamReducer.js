import { SELECTED_POKEMON_MARK } from "../actions/types";
import pokemon_data from "../data/pokemon_data";

const INITIAL_STATE = {
    pokemon: pokemon_data,
    selected_pokemon: []
};

export default ( state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECTED_POKEMON_MARK:
            let pokemon = state.pokemon.slice(0);
            let selected_pokemon = state.selected_pokemon.slice(0)

            const is_selected = action.is_selected;

            if (state.selected_pokemon.length < 6 || is_selected) {
                pokemon = pokemon.map(item => {
                    if (item.id == action.id) {
                        item.is_selected = !is_selected;
                    }
                    return item
                });

                if (is_selected) {
                    const index_to_remove = selected_pokemon.findIndex (
                        item => item.id == action.id
                    );
                    selected_pokemon.splice(index_to_remove, 1);
                } else {
                    selected_pokemon.push(action.pokemon_data);
                }
            }

            return { ...state, pokemon, selected_pokemon };
        default:
            return state;
    }
};