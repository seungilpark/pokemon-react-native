import React, {Component} from "react"
import { Button, Text } from "native-base"


class GetPokemonsButton extends Component {

  render() {
    return (
      <Button 
        block
        warning
        onPress={ this.props.getPokemons }
      >
        <Text style={{ color: "#263238" }}>
          Get Pokemons
        </Text>
      </Button>
    )
  }
}

export default GetPokemonsButton