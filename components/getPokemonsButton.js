import React, {Component} from "react"
import { Button, Text, Icon } from "native-base"


class GetPokemonsButton extends Component {

  render() {
    return (
      <Button 
        full
        onPress={ this.props.getPokemons }
        style={{backgroundColor: "#00b5ec", height: 50}}
    >
        <Icon name='md-add-circle' />
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          Get Pokemons
        </Text>
      </Button>
    )
  }
}

export default GetPokemonsButton