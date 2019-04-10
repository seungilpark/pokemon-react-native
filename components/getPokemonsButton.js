import React, {Component} from "react"
import { Button, Text } from "native-base"


class GetPokemonsButton extends Component {

  render() {
    return (
      <Button 
        block
        warning
        onPress={ this.props.getPokemons }
        style={{backgroundColor: "#00b5ec"}}
    >
        <Text style={{ color: "#263238", fontWeight: "bold" }}>
          Get Pokemons
        </Text>
      </Button>
    )
  }
}

export default GetPokemonsButton