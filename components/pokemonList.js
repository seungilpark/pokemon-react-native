import React, {Component} from "react"
import {View, StyleSheet, TextInput} from "react-native"
import {ListItem} from "react-native-elements"
import {Button, Text, Icon } from "native-base"

class PokemonList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pokemons: this.props.pokemons
        }
      }

      filterSearch(text){
        const filteredPokemons = this.state.pokemons.filter((pokemon)=>{
          const pokemons = pokemon.name.toLowerCase()
          const textInput = text.toLowerCase()
          return pokemons.indexOf(textInput) > -1
        });
        this.setState({
          pokemons: filteredPokemons
        });
      }

      refreshFilter() {
        this.setState({
            pokemons: this.state.originalPokemons
        });
        this.textInput.clear()
      }

      componentWillReceiveProps(nextProps) {
        if (this.props.pokemons != nextProps.pokemons) {
          this.setState({
            pokemons: nextProps.pokemons,
            originalPokemons: nextProps.pokemons
          })
        }
      }

  render() {
    return (
        
      <View> 
          <View style={styles.inputContainer}>
            <TextInput
            ref={input => { this.textInput = input }}
            style={styles.inputs}
            placeholder="Search for a pokemon"
            onChangeText={(text) => this.filterSearch(text)}
            />
          </View>
        <Button 
            onPress={ this.refreshFilter.bind(this) }
            style={{backgroundColor: "#00b5ec", height: 50, marginBottom: 10}}
            full
        >      
            <Icon name='refresh' />
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
            Refresh Filter
            </Text>
      </Button>
        { this.state.pokemons.map((pokemon, i) => (
          <ListItem
            button
            onPress={() => this.props.getPokemonDetails(pokemon.url) }
            roundAvatar
            key={i}
            title={pokemon.name}
            chevron={true}
            bottomDivider={true}
            titleStyle={{textAlign: "center", fontSize: 20, fontWeight: "bold"}}
            leftAvatar={{ source: require("../assets/pokeball.gif") }}
          />))
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#DCDCDC',
        borderRadius: 50,
        borderColor: "#ccc",
        borderWidth: 1,
        backgroundColor: "#eaeaea",
        padding: 10,
        borderBottomWidth: 1,
        width: "80%",
        height:50,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems:'center',
        marginTop: 25,
        marginBottom: 25,
        flex:1,
        left:30
    },
    inputs:{
        height:45,
        borderBottomColor: '#FFFFFF',
        flex:1,
        fontSize: 20
    },
});

export default PokemonList