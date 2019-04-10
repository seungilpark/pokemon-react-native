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
            chevron={true}
            bottomDivider={true}
            titleStyle={{textAlign: "center", fontSize: 20, fontWeight: "bold"}}
            leftAvatar={{ source: require("../assets/pokedex-icon.png") }}
          />))
        }
      </View>
    )
  }
}

export default PokemonList