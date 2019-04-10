import React, {Component} from "react"
import {View} from "react-native"
import {ListItem} from "react-native-elements"

class PokemonList extends Component {

  render() {
    return (
      <View>
        { this.props.pokemons.map((pokemon, i) => (
          <ListItem
            button
            onPress={() => this.props.getPokemonDetails(pokemon.url) }
            roundAvatar
            key={i}
            title={pokemon.name}
          />))
        }
      </View>
    )
  }
}

export default PokemonList